// @flow
function getArrayBufferFromBlob(blob): Promise<any> {
  const reader = new global.FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = function onload() {
      resolve(this.result);
    };
    reader.onerror = function onerror() {
      reject(this.error);
    };

    reader.readAsArrayBuffer(blob);
  });
}

function decodeAudioData(ctx, arrayBuffer): Promise<any> {
  return new Promise((resolve, reject) =>
    ctx.decodeAudioData(
      arrayBuffer,
      decodedBuffer => resolve(decodedBuffer),
      e => reject(e.err)
    )
  );
}

const bufferMap: Object = {};
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

export default {
  startBufferSource(url: string): void {
    this.getBufferByUrl(url).then(
      (buffer) => {
        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.start();
      },
      // eslint-disable-next-line no-console
      error => console.error(error)
    );
  },
  getBufferByUrl(url: string): Promise<any> {
    if (url in bufferMap) return Promise.resolve(bufferMap[url]);
    return this.load(url);
  },
  load(url: string): Promise<any> {
    return fetch(url)
      .then(res => res.blob())
      .then(blob => getArrayBufferFromBlob(blob))
      .then(arrayBuffer => decodeAudioData(audioCtx, arrayBuffer))
      .then(decodedBuffer => (bufferMap[url] = decodedBuffer));
  }
};
