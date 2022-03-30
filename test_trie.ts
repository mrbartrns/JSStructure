import { Trie } from "./projects/Trie";
function test() {
  const trie = new Trie();
  trie.insert("ca");
  trie.insert("cat");
  console.log(trie.has("cat"));
}

test();

export { test };
