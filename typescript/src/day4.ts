import { readFileSync } from "fs";

function isPairContainsPair([pair1, pair2]: string[]): boolean {
  const startValues = [Number(pair1.split('-')[0]), Number(pair2.split('-')[0])]
  const endValues = [Number(pair1.split('-')[1]), Number(pair2.split('-')[1])]

  return ((startValues[0] <= startValues[1] && endValues[0] >= endValues[1]) || (startValues[1] <= startValues[0] && endValues[1] >= endValues[0]));
}

function isPairOverlap([pair1, pair2]: string[]): boolean {
  const startValues = [Number(pair1.split('-')[0]), Number(pair2.split('-')[0])];
  const endValues = [Number(pair1.split('-')[1]), Number(pair2.split('-')[1])];

  return (startValues[0] <= endValues[1]) && (startValues[1] <= endValues[0]);
}

function readFile(): string[][] {
  return readFileSync('../input/day4/data', 'utf-8')
    .split('\n')
    .filter((val) => val)
    .map((line) => line.split(','))
}

function part1() {
  console.log('Part 1');

  const numberOfPairs = readFile()
    .map((pairs) => isPairContainsPair(pairs) ? pairs : undefined)
    .filter((val) => val)

  console.log('numberOfPairs', numberOfPairs.length);
}

function part2() {
  console.log('Part 2');

  const numberOfPairs = readFile().map((pairs) => isPairOverlap(pairs) ? pairs : undefined)
    .filter((val) => val)

  console.log('numberOfPairs', numberOfPairs.length);
}

function main() {
  part1();
  part2();
}

main();
