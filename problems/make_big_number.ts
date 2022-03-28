function solution(number: string, k: number) {
  const stack: number[] = [];
  let count = 0;
  for (const char of number) {
    const n = parseInt(char);
    while (count < k && stack.length && stack[stack.length - 1] < n) {
      stack.pop();
      count++;
    }
    stack.push(n);
  }
  while (count < k) {
    stack.pop();
    count++;
  }
  return stack.map((value) => String(value)).join("");
}

const number = "4177252841";
const k = 4;
console.log(solution(number, k));

export { solution };
