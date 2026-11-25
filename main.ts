// u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4 — one star, written in sap.
//
// A houseplant leaves a 1-star review of its human: bought for the
// Instagram photo, potted with no drainage hole, left sitting in a
// puddle. The punch lands in the last words — the plant is now
// auditioning for root rot. Plant's-eye all the way: pot, puddle,
// drainage — never a person in a costume. Gate: 1-279 characters;
// this is 138.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. He bought me for the Instagram photo, put me in a pot with no drainage hole, and now I sit in a puddle auditioning for root rot.";

// Guard: the bounty gate allows 1-279 characters.
if ([...ENTRY].length < 1 || [...ENTRY].length > 279) {
  throw new Error(
    `entry is ${[...ENTRY].length} chars, outside the 1-279 gate`,
  );
}

// The grader sets MAKEFUN_OUTPUT_DIR; locally /output is the default.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, ENTRY, "utf8");

console.log(`wrote entry.txt: ${ENTRY}`);
