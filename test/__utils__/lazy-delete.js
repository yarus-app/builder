import pify from 'pify';
import rimraf from 'rimraf';

const lazyDelete = pify(rimraf);

export default lazyDelete;
