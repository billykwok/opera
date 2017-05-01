import Pizzicato from 'pizzicato';

const noteTable = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
const soundTable = {};

noteTable.forEach((note) => {
  soundTable[`${note}4`] = new Pizzicato.Sound(`./audio/${note}4.mp3`, () => {
    soundTable[`${note}4`].play();
  });
});

export default soundTable;
