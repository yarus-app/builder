import fs from 'fs';
import path from 'path';
import stripBom from 'strip-bom';
import stripComments from 'strip-json-comments';

const importPackageJson = (rootPath = process.cwd()) =>
  new Promise((resolve, reject) => {
    const file = path.resolve(rootPath, 'package.json');

    fs.readFile(file, { encoding: 'utf-8' }, (readError, data) => {
      if (readError) {
        return reject(readError);
      }

      const json = stripComments(stripBom(data));

      try {
        const obj = JSON.parse(json);
        return resolve(obj);
      } catch (parseError) {
        parseError.message = `${file}: ${parseError.message}`;
        return reject(parseError);
      }
    });
  });

export default importPackageJson;
