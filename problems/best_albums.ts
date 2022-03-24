/**
 * 문제 설명
 * 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모은다.
 * 1. 속한 노래가 가장 많이 재생된 장르
 * 2. 장르 내에서 많이 재생된 노래 먼저 수록
 * 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유번호가 낮은 노래를 먼저 수록
 */

type PlayList = {
  [key in string]: Array<Array<number>>;
};

function sum(arr: Array<number>): number {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function solution(genres: string[], plays: number[]): number[] {
  const answer: number[] = [];

  // 1. object에 넣어 정리하기
  const obj: PlayList = {};
  Array(plays.length)
    .fill(0)
    .forEach((_, index) => {
      obj[genres[index]] = [
        ...(obj[genres[index]] || []),
        [plays[index], index],
      ];
    });

  // 2. key 값으로 정렬하여 가장 많이 재생된 장르를 먼저 수록하기 (내림차순 정렬)
  const keys = Object.keys(obj);
  keys.sort((a, b) => {
    if (
      sum(obj[a].map((value) => value[0])) <
      sum(obj[b].map((value) => value[0]))
    ) {
      return 1;
    }
    return -1;
  });

  // 3. 장르 내에서 정렬
  for (const key of keys) {
    obj[key].sort((a, b) => {
      if (a[0] < b[0]) return 1;
      else if (a[0] > b[0]) return -1;
      else if (a[1] < b[1]) return -1;
      return 1;
    });
  }

  // 4. 수록
  for (const key of keys) {
    for (let i = 0; i < (obj[key].length >= 2 ? 2 : obj[key].length); i++) {
      answer.push(obj[key][i][1]); // index
    }
  }
  return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 500, 800, 2500];
console.log(solution(genres, plays));
export { solution };
