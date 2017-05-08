// @flow
import BufferLoader from './BufferLoader';
import PlaybackScheduler from './PlaybackScheduler';

function playSoundPiece(instrument: string, note: string): void {
  BufferLoader.startBufferSource(`./audio/${instrument}/${note}.mp3`);
}

export default {
  init() {
    PlaybackScheduler.Subject.subscribe({
      next: ({ instrument, note }: SoundPiece): void => {
        playSoundPiece(instrument, note);
      }
    });
  }
};
