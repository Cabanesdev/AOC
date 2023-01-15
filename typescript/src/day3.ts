import { readFileSync } from "fs";

const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getPriority(commonLetter: string): number {
  return abc.indexOf(commonLetter) + 1;
}

function getCommonLetter([rucksack1, rucksack2]: string[]): string | undefined {
  let commonLetter;

  for (let i = 0; i < rucksack1.length; i += 1) {
    const char = rucksack1[i];
    if (rucksack2.includes(char)) commonLetter = char;
  }

  return commonLetter;
}

function splitRucksack(rucksack: string): string[] {
  const rucksack1 = rucksack.substring(0, (rucksack.length / 2));
  const rucksack2 = rucksack.substring((rucksack.length / 2), rucksack.length);

  return [rucksack1, rucksack2];
}

function getCommonLetterByStackOfRucksack(val: string[]): string | undefined {
  let commonLetter;

  for (let i = 0; i < val[0].length; i += 1) {
    const char = val[0][i];
    if (val[1].includes(char) && val[2].includes(char) ) commonLetter = char;
  }

  return commonLetter;
}

function part1(): void {
  console.log('Part 1');
  let total = 0;

  readFileSync('input/day3/day3', 'utf-8')
    .split('\n')
    .filter((val) => val)
    .map((rucksack) => splitRucksack(rucksack))
    .forEach((rucksack) => total += getPriority(getCommonLetter(rucksack) as string));

  console.log('Total Priority', total);
}

function part2(): void {
  console.log('Part 2');
  let total = 0;

  const lines = readFileSync('input/day3/day3', 'utf-8').split('\n').filter((val) => val)
  const groups: string[][] = [];

  for (let i = 0; i < lines.length; i += 3) {
    const rucksack1 = lines[i];
    const rucksack2 = lines[i + 1];
    const rucksack3 = lines[i + 2];

    groups.push([rucksack1, rucksack2, rucksack3]);
  }

  groups.forEach((val)=> total += getPriority(getCommonLetterByStackOfRucksack(val) as string));

  console.log('Total Priority', total);
}

function main(): void {
  part1();
  part2();
}

main();
