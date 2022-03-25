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

  heappop(): number {
    // return 할 값을 저장한다.
    if (this.heap.length <= 1 || this.heap[1] === null) return -Infinity;
    const ret = this.heap[1];
    const last = this.heap.pop();
    if (typeof last === "number" && this.heap.length > 1) {
      this.heap[1] = last;
      let currentIndex = 1;

      /**
       * left와 right index가 현재 배열의 길이보다 작은지 확인한다.
       * current가 left와 right 둘 중 하나보다 작다면 반복문을 계속 돈다.
       * 만약 left값이
       */
      while (currentIndex < this.heap.length) {
        let child = currentIndex * 2;
        if (child >= this.heap.length) break;
        let flag = false;
        for (let i = 0; i < 2; i++) {
          child += i;
          if (
            (this.heap[currentIndex] as number) > (this.heap[child] as number)
          ) {
            [this.heap[currentIndex], this.heap[child]] = [
              this.heap[child],
              this.heap[currentIndex],
            ];
            currentIndex = child;
            flag = true;
            break;
          }
        }
        if (!flag) break;
      }
    }
    return ret;
  }
}

export { Heap };
