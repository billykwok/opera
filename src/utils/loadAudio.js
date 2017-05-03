// @flow
import Pizzicato from 'pizzicato';
import CharacterToNoteMap from './CharacterToNoteMap';

export default {
  playNote(note: string): void {
    const s = new Pizzicato.Sound(`./audio/piano/${note}.mp3`, () => {
      console.log(s);
      console.log(s.play);
      s.play();
    });
  },
  playCharacter(char: string): void {
    if (char in CharacterToNoteMap) {
      const { instrument, note } = CharacterToNoteMap[char];
      this.playNote(note);
    }
  },
  playText(text: string): void {
    for (let i = 0; i <= text.length; ++i) {
      setTimeout(() => {
        this.playCharacter(text.charAt(i));
      }, 500 * i);
    }
  }
};
