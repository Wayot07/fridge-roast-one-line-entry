// One Line, One Laugh: Roast Your Fridge
// make.fun competition: u-suzy-one-line-one-laugh-roast-your-fridge-f1063521
// Deterministic entry program. Node 22 stdlib only.
// Writes exactly one roast line (1-200 chars, single line, no trailing
// newline) to /output/entry.txt and validates it before exiting.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My fridge's ice maker sounds like a rockslide and drops a single cube, like it's charging rent for the noise.";

const OUTPUT_PATH = "/output/entry.txt";

// Fail fast on any gate violation.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");

// Read back and verify the written bytes are identical to the entry.
if (!readFileSync(OUTPUT_PATH).equals(Buffer.from(LINE, "utf8"))) {
  throw new Error("entry.txt bytes differ from the entry line");
}
console.log(`wrote ${LINE.length} chars to ${OUTPUT_PATH}`);
