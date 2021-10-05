export const cleanUrl = (url = '', toReplace = []) => {
  let cleaned = url.slice();
  toReplace.forEach(replaceStr => {
    if (typeof replaceStr !== 'string') {
      throw new TypeError(
        'cleanUrl expects Array<string> for toReplace parameter'
      );
    }
    cleaned = cleaned.replace(new RegExp(replaceStr, 'g'), '');
  });
  return cleaned;
};
