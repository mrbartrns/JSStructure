import { Trie } from "./projects/Trie";
function test() {
  const trie = new Trie();
  trie.insert("cat");
  trie.insert("dog");
  trie.insert("cost");
  console.log(trie.find("c"));
  console.log(trie.find("ca"));
  console.log(trie.find("cat"));
  console.log(trie.find("d"));
  console.log(trie.find("e"));
}

test();

export { test };
