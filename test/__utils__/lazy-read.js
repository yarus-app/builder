import { readFile } from 'fs';
import { resolve } from 'path';
import pify from 'pify';

const read = pify((path, callback) =>
  readFile(resolve(__dirname, path), 'utf8', callback),
);

export default read;
