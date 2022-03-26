// BST가 잘 작동하는지 검증하는 테스트코드
import heapq from "./structure/Heap";
function test() {
  const q: number[] = [];
  heapq.heappush(q, 10);
  heapq.heappush(q, 9);
  heapq.heappush(q, 8);
  heapq.heappush(q, 7);
  heapq.heappush(q, 6);
  console.log(heapq.heappop(q));
  console.log(heapq.heappop(q));
  console.log(heapq.heappop(q));
  console.log(heapq.heappop(q));
  console.log(heapq.heappop(q));
  console.log(heapq.heappop(q));
  console.log(heapq.heappop(q));
}

test();

export { test };
