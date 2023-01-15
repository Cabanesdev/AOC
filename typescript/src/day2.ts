import { readFileSync } from "fs";

type ScoreShape = { [index: string]: number }

type TransformShape = { [index: string]: string }

type Score = { [index: string]: ScoreShape }

function checkIfWin([opponent, player]: string[]): number {
  const scoreForShape: ScoreShape = { X: 1, Y: 2, Z: 3 };
  const scoreForOutcome: Score = {
    A: { X: 3, Y: 6, Z: 0 },
    B: { X: 0, Y: 3, Z: 6 },
    C: { X: 6, Y: 0, Z: 3 },
  };

  const shapeScore = scoreForShape[player];
  const outcomeScore = scoreForOutcome[opponent][player];

  return shapeScore + outcomeScore;
}

function transformPlay([opponent, player]: string[]): string {
  const transformValues: { [value: string]: TransformShape } = {
    A: { X: 'Z', Y: 'X', Z: 'Y' },
    B: { X: 'X', Y: 'Y', Z: 'Z' },
    C: { X: 'Y', Y: 'Z', Z: 'X' },
  };

  return transformValues[opponent][player]
}

function part1(): void {
  console.log('Part 1');
  let totalPoints = 0;

  readFileSync('input/day2/day2', 'utf-8')
    .split('\n')
    .filter((val) => val)
    .forEach((play) => totalPoints += checkIfWin(play.split(' ')));

  console.log('Total points', totalPoints);
}

function part2(): void {
  console.log('Part 2');
  let totalPoints = 0;

  readFileSync('input/day2/day2', 'utf-8')
    .split('\n')
    .filter((val) => val)
    .map((val) => [val.split(' ')[0], transformPlay(val.split(' '))])
    .forEach((play) => totalPoints += checkIfWin(play));

  console.log('Total points', totalPoints);

}

function main() {
  part1();
  part2();
}

main();
