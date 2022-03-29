function solution(n: number) {
  let ret = 0;
  const vertical: Array<boolean> = Array(n).fill(false);
  const diagonal1: Array<boolean> = Array(2 * n - 1).fill(false);
  const diagonal2: Array<boolean> = Array(2 * n - 1).fill(false);
  const backtrack = (row: number) => {
    if (row >= n) {
      ret += 1;
      return;
    }
    for (let col = 0; col < n; col++) {
      if (
        !vertical[col] &&
        !diagonal1[row + col] &&
        !diagonal2[col - row + n - 1]
      ) {
        vertical[col] = true;
        diagonal1[row + col] = true;
        diagonal2[col - row + n - 1] = true;
        backtrack(row + 1);
        vertical[col] = false;
        diagonal1[row + col] = false;
        diagonal2[col - row + n - 1] = false;
      }
    }
  };
  backtrack(0);
  return ret;
}

const n = 4;
console.log(solution(n));

export { solution };
