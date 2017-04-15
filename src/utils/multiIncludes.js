// @flow
function multiIncludes(text: string, values: Array<string>): boolean {
  return new RegExp(values.join('|')).test(text);
}

export default multiIncludes;
