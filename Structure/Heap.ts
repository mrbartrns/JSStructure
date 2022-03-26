/**
 * Heap 자료구조를 구현하는 클래스
 * 가장 작은 것이 최우선순위를 갖는 MinHeap형태를 가진다.
 */
class Heap {
  /**
   * heap 자료구조에 요소를 추가한다.
   * heappush 함수는 오직 요소를 추가하기만 하고
   * 우선 순위에 맞게 재배치하는 과정은 shiftdown 함수에 위임한다.
   * @param {Array<number>} heap
   * @param {number} value
   */
  heappush(heap: Array<number>, value: number) {
    heap.push(value);
    this._shiftdown(heap, 0, heap.length - 1);
  }

  /**
   * heap 자료구조에서 요소를 빼낸다.
   * heappop 함수는 오직 가장 큰 우선순위의 요소를 반환하고
   * 가장 상위에 배치된 요소를 우선 순위에 맞게 재배치 하는 과정은
   * _shiftup 함수에 위임한다.
   * @param {Array<number>} heap
   * @returns
   */
  heappop(heap: Array<number>) {
    const lastelt = heap.pop();
    if (heap.length && lastelt) {
      const ret = heap[0];
      heap[0] = lastelt;
      this._shiftup(heap, 0);
      return ret;
    }
    return lastelt;
  }

  // 현재 pos에 있는 요소를 우선 순위에 맞게 끌어올린다.
  private _shiftdown(heap: Array<number>, startpos: number, pos: number) {
    const newitem = heap[pos];
    while (startpos < pos) {
      // 0번 인덱스부터 시작하므로, pos - 1한 값을 오른쪽으로 shift 한다.
      let parentpos = (pos - 1) >> 1;
      let parent = heap[parentpos];
      if (newitem < parent) {
        // while문 내부에서 newitem을 할당하지 않는다. 계속 지워지므로 의미가 없다.
        heap[pos] = parent;
        pos = parentpos;
        continue;
      }
      break;
    }

    // 최종 pos에서 newitem만 배치하면, 한번만 할당하면 된다.
    heap[pos] = newitem;
  }

  /**
   *
   * @param {Array<number>} heap
   * @param {number} pos
   */
  private _shiftup(heap: Array<number>, pos: number) {
    const newitem = heap[pos];
    let startpos = pos;
    let endpos = heap.length;
    let childpos = startpos * 2 + 1;
    while (childpos < endpos) {
      let rightpos = childpos + 1;

      // heap[rightpos]가 heap[leftpos]보다 작거나 같다면 rightpos를 선택한다.
      if (rightpos < endpos && !(heap[childpos] < heap[rightpos])) {
        childpos = rightpos;
      }
      heap[pos] = heap[childpos];
      pos = childpos;
      childpos = childpos * 2 + 1;
    }
    heap[pos] = newitem;
    this._shiftdown(heap, startpos, pos);
  }
}

export default new Heap();
