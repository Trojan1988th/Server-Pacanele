// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

// Check if the "crypto" module is available
let crypto: any;

try {
  crypto = require("node:crypto");
} catch (err) {
  console.error(
    "WARNING: crypto support is disabled and Math.random() will be used instead!"
  );
}

type segment =
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30;

/*
 * API endpoint to fetch a scratchcard.
 *
 * Generates an array of values for the scratchcard.
 * Each value represents the reward amount for a specific scratch area.
 */
export function getValues(): segment[] {
  // Array to store the generated values
  const values: segment[] = [];

  // Generate values for each position on the scratchcard
  for (let i = 0; i < 3; i++) {
    let randomNumber: number;

    // Use crypto library for random number generation if available
    if (crypto && crypto.randomBytes) {
      const randomBytes = crypto.randomBytes(4);
      randomNumber = randomBytes.readUInt32BE(0) / Math.pow(2, 32);
    } else {
      // Fallback to Math.random() if crypto support is disabled
      randomNumber = Math.random();
    }

    // Assign a reward value based on the generated random number
    if (randomNumber < 0.0625) {
      values.push(15);
    } else if (randomNumber < 0.125) {
      values.push(16);
    } else if (randomNumber < 0.1875) {
      values.push(17);
    } else if (randomNumber < 0.25) {
      values.push(18);
    } else if (randomNumber < 0.3125) {
      values.push(19);
    } else if (randomNumber < 0.375) {
      values.push(20);
    } else if (randomNumber < 0.4375) {
      values.push(21);
    } else if (randomNumber < 0.5) {
      values.push(22);
    } else if (randomNumber < 0.5625) {
      values.push(23);
    } else if (randomNumber < 0.625) {
      values.push(24);
    } else if (randomNumber < 0.6875) {
      values.push(25);
    } else if (randomNumber < 0.75) {
      values.push(26);
    } else if (randomNumber < 0.8125) {
      values.push(27);
    } else if (randomNumber < 0.875) {
      values.push(28);
    } else if (randomNumber < 0.9375) {
      values.push(29);
    } else {
      values.push(30);
    }
  }

  return values;
}
