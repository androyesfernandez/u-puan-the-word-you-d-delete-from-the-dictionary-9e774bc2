import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The output directory is provided by the tournament runner; fall back to
// the standard /output location when it is not set.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

writeFileSync(entryPath, "lisp");
