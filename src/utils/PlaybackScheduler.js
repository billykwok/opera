// @flow
import { Subject } from 'rxjs/Subject';
import flow from 'lodash/fp/flow';
import uniqWith from 'lodash/fp/uniqWith';
import forEach from 'lodash/fp/forEach';

import BufferLoader from './BufferLoader';
import mapTextToSong from './mapTextToSoundPiece';

let timeoutIds: Array<number> = [];

export default {
  Subject: new Subject(),
  play(text: string): void {
    const song = mapTextToSong(text);
    timeoutIds = song.map((sp: SoundPiece) =>
      setTimeout(() => {
        this.Subject.next(sp);
      }, sp.delay + 1000)
    );
    // eslint-disable-next-line lodash-fp/no-unused-result
    flow(
      uniqWith(
        (a: SoundPiece, b: SoundPiece) =>
          a.instrument === b.instrument && a.note === b.note
      ),
      forEach((sp: SoundPiece) =>
        BufferLoader.load(`./audio/${sp.instrument}/${sp.note}.mp3`)
      )
    )(song);
  },
  stop(): void {
    timeoutIds.forEach(id => clearTimeout(id));
  }
};
