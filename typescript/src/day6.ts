import { readFileSync } from "fs";

function getMarker(input: string, size: number) {
  for (let index = 0; index < input.length; index++) {
    if (new Set(input.substring(index, size + index)).size === size) return index + size;
  }
}


function part1() {
  const input = readFileSync('../input/day6/data.test').toString();
  const marker = getMarker(input, 4);

  console.log('FIRST marker', marker);
}

function part2() {
  const input = readFileSync('../input/day6/data.test').toString();
  const marker = getMarker(input, 14);

  console.log('FIRST marker', marker);
}

part1();
part2();
