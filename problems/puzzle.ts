function solution(strs: string[], t: string) {
  const INF = 987654321;
  const cache = Array(t.length + 1).fill(INF);
  cache[0] = 0;
  for (let i = 1; i < t.length + 1; i++) {
    for (const piece of strs) {
      if (i - piece.length < 0) continue;
      let flag = true;
      for (let j = 0; j < piece.length; j++) {
        if (piece[j] !== t[i + j - piece.length]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        cache[i] = Math.min(cache[i], cache[i - piece.length] + 1);
      }
    }
  }
  return cache[t.length] < INF ? cache[t.length] : -1;
}

const strs = ["ba", "an", "nan", "ban", "n"];
const t = "banana";
console.log(solution(strs, t));

export { solution };
