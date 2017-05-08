// @flow
import flow from 'lodash/fp/flow';
import cappedArgFlatMap from 'lodash/fp/flatMap';
import map from 'lodash/fp/map';
import capitalize from 'lodash/fp/capitalize';

import CharacterToSoundPieceMap from './CharacterToNoteMap';

const flatMap = cappedArgFlatMap.convert({ cap: false });

const BEAT_DUR: number = 500; // 0.5 sec

const rhythmMap: Array<Array<number>> = [
  [0],
  [0, 2],
  [0, 2, 3],
  [0, 1, 2, 3],
  [0, 1, 1.5, 2, 3],
  [0, 1, 1.5, 2, 2.5, 3],
  [0, 1, 1.5, 2, 2.5, 3, 3.5],
  [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5]
];

export default function mapTextToSoundPiece(text: string): Array<SoundPiece> {
  // "Abc123 defghij456klmn, dasf124lhk." ...
  // eslint-disable-next-line lodash-fp/prefer-composition-grouping
  return flow(
    // [ "Abc123", "defghij456klmn,", "dasf124lhk." ... ]
    // ⬇
    cappedArgFlatMap((s: string): Array<string> => s.match(/.{1,7}/g) || []),
    // ⬇
    // [ "Abc123", "defghij4", "56klmn,", "dasf124l", "hk." ... ]
    // ⬇
    map((s: string): string =>
      s.replace(/(.*),/i, ' ').replace(/(.*)\./i, '  ')
    ),
    // ⬇
    // [ "Abc123", "defghij4", "56klmn ", "dasf124l", "hk  " ... ]
    // ⬇
    map((s: string): string => `${capitalize(s)} `),
    // ⬇
    // [ "Abc123 ", "Defghij4 ", "56klmn  ", "Dasf124l ", "Hk   " ... ]
    // ⬇
    flatMap((s: string, barId: number): Array<SoundPiece> =>
      s
        .split('')
        .filter((char: string) => char in CharacterToSoundPieceMap)
        .map((char: string, pos: number): SoundPiece => ({
          ...CharacterToSoundPieceMap[char],
          delay: barId * 4 * BEAT_DUR + rhythmMap[s.length - 1][pos] * BEAT_DUR
        }))
    )
    // ⬇
    // [ SoundPiece, ... ]
  )(text.split(' '));
}
