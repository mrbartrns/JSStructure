/**
 * 프로그래머스 여행 경로
 * 항상 ICN 공항에서만 출발한다.
 * tickets 각 행 [a, b]는 a에서 b로 가는 항공권이 존재한다는 뜻이다.
 * 만약 가능한 경로가 두개 이상이라면, 알파벳 순서가 앞서는 경로를 return해야 한다.
 */

type Obj<T> = { [key in string]: T };

function solution(tickets: Array<Array<string>>): Array<string> {
  const answer: Array<Array<string>> = [];
  const adj: Obj<Array<string>> = {};
  const visited: Obj<Array<boolean>> = {};

  // insert
  for (const [from, to] of tickets) {
    adj[from] = from in adj ? [...adj[from], to] : [to];
    visited[from] = from in visited ? [...visited[from], false] : [false];
  }
  const routes = ["ICN"];
  const dfs = (node: string, routes: Array<string>) => {
    if (routes.length >= tickets.length + 1) {
      answer.push([...routes]);
      return;
    }
    if (!adj[node]) return;
    adj[node].forEach((next, index) => {
      if (!visited[node][index]) {
        visited[node][index] = true;
        dfs(next, [...routes, next]);
        visited[node][index] = false;
      }
    });
  };
  dfs("ICN", routes);
  answer.sort();
  console.log(answer[0]);
  return answer[0];
}
function isSame<T>(a: T, b: T): boolean {
  console.log("a:", a);
  console.log("b:", b);
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log(
  isSame(
    solution([
      ["ICN", "SFO"],
      ["ICN", "ATL"],
      ["SFO", "ATL"],
      ["ATL", "ICN"],
      ["ATL", "SFO"],
    ]),
    ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
  )
);

console.log(
  isSame(
    solution([
      ["ICN", "AOO"],
      ["AOO", "BOO"],
      ["BOO", "COO"],
      ["COO", "DOO"],
      ["DOO", "EOO"],
      ["EOO", "DOO"],
      ["DOO", "COO"],
      ["COO", "BOO"],
      ["BOO", "AOO"],
    ]),
    ["ICN", "AOO", "BOO", "COO", "DOO", "EOO", "DOO", "COO", "BOO", "AOO"]
  )
);

console.log(
  isSame(
    solution([
      ["ICN", "AOO"],
      ["AOO", "BOO"],
      ["AOO", "COO"],
      ["COO", "AOO"],
      ["BOO", "ZOO"],
    ]),
    ["ICN", "AOO", "COO", "AOO", "BOO", "ZOO"]
  )
);

console.log(
  isSame(
    solution([
      ["ICN", "AOO"],
      ["AOO", "BOO"],
      ["AOO", "BOO"],
      ["BOO", "AOO"],
      ["BOO", "FOO"],
      ["FOO", "COO"],
      ["COO", "ZOO"],
    ]),
    ["ICN", "AOO", "BOO", "AOO", "BOO", "FOO", "COO", "ZOO"]
  )
);

console.log(
  isSame(
    solution([
      ["ICN", "BOO"],
      ["ICN", "COO"],
      ["COO", "DOO"],
      ["DOO", "COO"],
      ["BOO", "DOO"],
      ["DOO", "BOO"],
      ["BOO", "ICN"],
      ["COO", "BOO"],
    ]),
    ["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"]
  )
);

console.log(
  isSame(
    solution([
      ["ICN", "AAA"],
      ["ICN", "AAA"],
      ["ICN", "AAA"],
      ["AAA", "ICN"],
      ["AAA", "ICN"],
    ]),
    ["ICN", "AAA", "ICN", "AAA", "ICN", "AAA"]
  )
);

console.log(
  isSame(
    solution([
      ["ICN", "BBB"],
      ["ICN", "CCC"],
      ["BBB", "CCC"],
      ["CCC", "BBB"],
      ["CCC", "ICN"],
    ]),
    ["ICN", "BBB", "CCC", "ICN", "CCC", "BBB"]
  )
);

console.log(
  isSame(
    solution([
      ["ICN", "JFK"],
      ["HND", "IAD"],
      ["JFK", "HND"],
    ]),
    ["ICN", "JFK", "HND", "IAD"]
  )
);

console.log(
  isSame(
    solution([
      ["ICN", "SFO"],
      ["ICN", "ATL"],
      ["SFO", "ATL"],
      ["ATL", "ICN"],
      ["ATL", "SFO"],
    ]),
    ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
  )
);

console.log(
  isSame(
    solution([
      ["ICN", "AOO"],
      ["ICN", "AOO"],
      ["AOO", "ICN"],
      ["AOO", "COO"],
    ]),
    ["ICN", "AOO", "ICN", "AOO", "COO"]
  )
);

console.log(
  isSame(
    solution([
      ["ICN", "AAA"],
      ["ICN", "AAA"],
      ["ICN", "AAA"],
      ["AAA", "ICN"],
      ["AAA", "ICN"],
    ]),
    ["ICN", "AAA", "ICN", "AAA", "ICN", "AAA"]
  )
);

console.log(
  isSame(
    solution([
      ["ICN", "BOO"],
      ["ICN", "COO"],
      ["COO", "DOO"],
      ["DOO", "COO"],
      ["BOO", "DOO"],
      ["DOO", "BOO"],
      ["BOO", "ICN"],
      ["COO", "BOO"],
    ]),
    ["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"]
  )
);
export { solution };
