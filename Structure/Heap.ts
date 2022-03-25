// 항상 가장 기본적인것 부터 구현하기
interface HeapInterface {
  heap: Array<number | null>;
}

// MinHeap
class Heap implements HeapInterface {
  heap: Array<number | null>;
  constructor() {
    this.heap = [null];
  }

  /**
   * 힙에 요소를 추가한다.
   * 요소를 추가한 뒤, 부모 노드의 요소와 비교하여 우선순위가 더 크다면 부모 노드의 값과 추가한 노드의 값을 서로 뒤집는다.
   * @param value :numebr
   */
  heappush(value: number) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex) {
      if (
        (this.heap[currentIndex] as number) < (this.heap[parentIndex] as number)
      ) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
        parentIndex = Math.floor(currentIndex / 2);
        continue;
      }
      break;
    }
  }
}

export { Heap };
