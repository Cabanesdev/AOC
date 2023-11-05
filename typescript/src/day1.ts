import { readFileSync } from 'fs';

function getCalories(): number[] {
  const calories = readFileSync('../input/day1/data', 'utf-8')
    .split('\n\n')
    .map((values) => values.split('\n'))
    .map((values) => values.map((value) => Number(value)))
    .map((values) => values.reduce((a, b) => a + b)).sort((a, b) => a - b).reverse();

  return calories;
}

function part1(): void {
  console.log('Part 1');
  const calories = getCalories();
  console.log(`Calories me daddy: ${calories[0]}`);
}

function part2(): void {
  console.log('Part 2');
  const calories = getCalories().slice(0, 3).reduce((a, b) => a + b);
  console.log(`Calories me daddy: ${calories}`);
}

function main(): void {
  part1();
  part2();
}

main();
