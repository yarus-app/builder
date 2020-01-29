import lazyDelete from './lazy-delete'

const clean = async (paths = []) => Promise.all(paths.map(path => lazyDelete(path)))
