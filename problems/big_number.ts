function solution(numbers: number[]) {
  const ret = numbers.map((value: number) => [String(value).repeat(3), value]);
  ret.sort((a, b) => {
    if (a[0] < b[0]) return 1;
    return -1;
  });

  const answer = ret.reduce((acc: string, [_, value]) => acc + value, "");
  return answer[0] == "0" ? "0" : answer;
}

const numbers = [0, 0, 0, 0, 0];
console.log(solution(numbers));

export { solution };
