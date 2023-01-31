import { readFileSync } from "fs";

function checkIfPairContaintsPair([pair1, pair2]: string[]): boolean {
  const startValue = [pair1.split('-')[0], pair2.split('-')[0]]
  const endValue = [pair1.split('-')[1], pair2.split('-')[1]]

  if ((startValue[0] <= startValue[1] && endValue[0] >= endValue[1]) || (startValue[1] <= startValue[0] && endValue[1] >= endValue[0])) return true;

  return false;
}

function part1() {
  console.log('Part 1');

  readFileSync('./input/day4/day4', 'utf-8')
    .split('\n')
    .filter((val) => val)
    .map((line) => line.split(','))
    .map((pairs) => {
      if (checkIfPairContaintsPair(pairs)) return pairs;
    })
    .filter((val) => val).forEach((val) => console.log(val));

  // console.log('Total Pairs: ', totalPairst);
}

function main() {
  part1();
}

main();
