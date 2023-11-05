import { readFileSync } from "fs";

const STACK_LENGTH = 3;

type Stack = { [key: string]: Array<string> };

function formatStack(stack: Array<string>): Stack {
  const stacks: Stack = {};

  stack.pop()?.split(' ').filter((item) => item).forEach((item: string) => stacks[item] = []);

  for (let i = 0; i < stack.length; i += 1) {
    let stackIndex = 0;

    for (let y = 0; y < stack[i].length; y += STACK_LENGTH + 1) {
      stackIndex = stackIndex + 1;
      const end = y + STACK_LENGTH;
      const stackValue = stack[i].substring(y, end);
      if (stackValue.replace(/ /g, '')) stacks[stackIndex].push(stackValue);
    }
  }

  return stacks;
}

function getEndsUpCrates(stacks: Stack, orders: Array<string>, keepOrder = false): any {
  for (let i = 0; i < orders.length; i += 1) {
    const order = orders[i];
    const [itemsToMove, from, to] = order.split(/[a-z]{2}? ?/).filter((item) => item).map((item) => item.trim())
    const items = stacks[from].splice(0, Number(itemsToMove));

    if (!keepOrder) items.reverse();
    stacks[to] = items.concat(stacks[to]);
  }

  return Object.values(stacks).map((item) => item[0].substring(1, 2)).join('');
}

function part1() {
  const [stacks, orders]: string[] = readFileSync('../input/day5/data', 'utf-8')
    .split('\n\n');

  const formattedStacks = formatStack(stacks.split('\n'));
  const cratesEndsUps = getEndsUpCrates(formattedStacks, orders.split('\n').filter((order) => order));
  console.log('Crated ends', cratesEndsUps);
}

function part2() {
  const [stacks, orders]: string[] = readFileSync('../input/day5/data', 'utf-8')
    .split('\n\n');

  const formattedStacks = formatStack(stacks.split('\n'));
  const cratesEndsUps = getEndsUpCrates(formattedStacks, orders.split('\n').filter((order) => order), true);
  console.log('Crated ends', cratesEndsUps);
}

part1();
part2();

