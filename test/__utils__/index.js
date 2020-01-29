import { readFile } from 'fs';
import { resolve } from 'path';
import pify from 'pify';
import rimraf from 'rimraf';

import build from '../../src/build';

const lazyRead = pify((path, callback) =>
  readFile(resolve(__dirname, path), 'utf8', callback),
);

const lazyDelete = pify(rimraf);
