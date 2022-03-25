function check(n: number, times: number[], mid: number): boolean {
  return (
    times.reduce(
      (acc: number, cur: number) => acc + Math.floor(mid / cur),
      0
    ) >= n
  );
}

function solution(n: number, times: number[]): number {
  let left = 1;
  let right = times[times.length - 1] * n;
  let ret = right;
  times.sort((a, b) => a - b);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (check(n, times, mid)) {
      ret = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ret;
}

const n = 6;
const times = [10, 7];
console.log(solution(n, times));
export { solution };
