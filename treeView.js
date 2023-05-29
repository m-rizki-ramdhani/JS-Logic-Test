function treeViewBuilder(list) {
    const tree = {};
  
    for (const item of list) {
      const parts = item.split('-');
      let currentNode = tree;
  
      for (const part of parts) {
        if (!currentNode[part]) {
          currentNode[part] = {};
        }
  
        currentNode = currentNode[part];
      }
    }
  
    function buildTreeString(node, depth = 0) {
      let treeString = '';
  
      for (const key in node) {
        const indent = '  '.repeat(depth);
        treeString += `${indent}- ${key}\n`;
        treeString += buildTreeString(node[key], depth + 1);
      }
  
      return treeString;
    }
  
    const treeString = buildTreeString(tree);
    console.log(treeString);
  }
  
  // Example usage:
  const list = [
    'folder1-file1.txt',
    'folder1-folder2-file2.txt',
    'folder1-folder2-folder3-file3.txt',
    'folder1-folder4-file4.txt',
    'file5.txt'
  ];
  
  treeViewBuilder(list);  