import { Heap } from "./Structure/Heap";
function test() {
  const heap = new Heap();
  heap.heappush(-45);
  heap.heappush(-36);
  heap.heappush(-54);
  heap.heappush(-27);
  heap.heappush(-63);
  console.log(heap.heap);
  console.log(heap.heappop());
  console.log(heap.heappop());
  console.log(heap.heappop());
  console.log(heap.heappop());
  console.log(heap.heappop());
  console.log(heap.heappop());
}

test();

export { test };
