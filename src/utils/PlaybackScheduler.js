// @flow
import { Subject } from 'rxjs/Subject';
import flow from 'lodash/fp/flow';
import uniqWith from 'lodash/fp/uniqWith';
import forEach from 'lodash/fp/forEach';

import BufferLoader from './BufferLoader';
import mapTextToSong from './mapTextToSoundPiece';
import store from '../redux/store';
import { updatePlayerState } from '../redux/actions';

let timeoutIds: Array<number> = [];

export default {
  Subject: new Subject(),
  play(text: string): void {
    timeoutIds.forEach(id => clearTimeout(id));
    store.dispatch(updatePlayerState('Loading...'));

    const song = mapTextToSong(text);

    timeoutIds = song.content.map((sp: SoundPiece) =>
      setTimeout(() => {
        this.Subject.next(sp);
      }, sp.delay + 3000)
    );

    // Preload the audio to make the playback smoother
    // eslint-disable-next-line lodash-fp/no-unused-result
    flow(
      uniqWith(
        (a: SoundPiece, b: SoundPiece) =>
          a.instrument === b.instrument && a.note === b.note
      ),
      forEach((sp: SoundPiece) =>
        BufferLoader.load(`./audio/${sp.instrument}/${sp.note}.mp3`)
      )
    )(song.content);

    timeoutIds.concat(
      setTimeout(() => {
        store.dispatch(updatePlayerState('Playing'));
      }, 3000),
      setTimeout(() => {
        store.dispatch(updatePlayerState('Stopped'));
      }, song.duration + 3000)
    );
  },
  stop(): void {
    timeoutIds.forEach(id => clearTimeout(id));
    store.dispatch(updatePlayerState('Stopped'));
  }
};
