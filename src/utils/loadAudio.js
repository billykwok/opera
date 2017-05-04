// @flow
import Rx from 'rxjs';
import _ from 'lodash';
import Pizzicato from 'pizzicato';
import CharacterToSoundPieceMap from './CharacterToNoteMap';

const BEAT_DURATION = 1000; // 0.5 sec

type SoundPiece = { instrument: string, note: string };

function playSoundPiece({ instrument, note }: SoundPiece): void {
  const s = new Pizzicato.Sound(`./audio/${instrument}/${note}.mp3`, () => {
    s.play();
  });
}

const rhythmMap = [
  [0],
  [0, 1],
  [0, 1, 1.5],
  [0, 0.5, 1, 1.5],
  [0, 0.5, 0.75, 1, 1.5],
  [0, 0.5, 0.75, 1, 1.25, 1.5],
  [0, 0.5, 0.75, 1, 1.25, 1.5, 1.75],
  [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75]
];

export default function playText(text: string): void {
  // "Lorem ipsum dolor sit amet, consectetur adipiscing elit" ...
  _.flatMap(
    text.split(' '),
    word => word.match(/.{1,7}/g) || []
    // "Lorem", "ipsum", "dolor", "sit, "amet", "consecte", "tur", ...
  ).forEach((segment, segmentIndex) => {
    // "Lorem"
    let transformedSegment = segment;
    if (segment.indexOf(',') !== -1) {
      // Last char
      transformedSegment = segment.replace(/,/i, ' ');
    } else if (segment.indexOf('.') !== -1) {
      transformedSegment = segment.replace(/./i, '  ');
    }
    transformedSegment.split('').forEach((char: string, charIndex: number) => {
      // "L"
      const totalDelay =
        segmentIndex * 2 * BEAT_DURATION +
        rhythmMap[transformedSegment.length - 1][charIndex] * BEAT_DURATION;
      console.log(char);
      if (char in CharacterToSoundPieceMap) {
        Rx.Scheduler.async.schedule(() => {
          console.log(CharacterToSoundPieceMap[char]);
          playSoundPiece(CharacterToSoundPieceMap[char]);
        }, totalDelay);
      }
    });
  });
}
