// World news of Wednesday 18 November 2026, drawn in entry.png beside this file.
// Node 22, standard library only. Outside the grader, set MAKEFUN_OUTPUT_DIR:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// entry.png ships next to this script, so resolve it relative to main.ts.
const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Refuse to continue if the bundled image is missing rather than crashing mid-copy.
if (!existsSync(source)) {
  throw new Error(`entry.png not found at ${source}`);
}

// The grader uses /output, which may not exist on a fresh machine.
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, 'entry.png'));
