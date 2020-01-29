import findRoot from 'find-root';
import updateNotifier from 'update-notifier';

import { name, version } from '../package.json';

import build from './build';

const notifier = updateNotifier({
  pkg: { name, version },
});

async function main() {
  notifier.notify();

  try {
    await build({
      root: findRoot(process.cwd()),
    });
  } catch (error) {
    process.exit(1);
  }

  process.exit(0);
}

main();
