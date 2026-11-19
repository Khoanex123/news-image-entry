// World news of Wednesday 18 November 2026, copied out as entry.png.
// Node 22, standard library only. Outside the grader, set MAKEFUN_OUTPUT_DIR:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// entry.png ships next to this script, so resolve it relative to main.ts.
const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outputDir, 'entry.png');

// Revision 2: report a missing image on stderr instead of an unhandled stack trace.
if (!existsSync(source)) {
  console.error(`main.ts: entry.png is missing at ${source}`);
  process.exit(1);
}

// The grader uses /output, which may not exist on a fresh machine.
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
