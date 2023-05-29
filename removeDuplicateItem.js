function removeDuplicateItem(items) {
    const lastIndex = {};
    for (let i = items.length - 1; i >= 0; i--) {
      if (!(items[i] in lastIndex)) {
        lastIndex[items[i]] = i;
      }
    }
    console.log(Object.keys(lastIndex));
  }
  
  const items = [3, 4, 4, 3, 6, 3];
  removeDuplicateItem(items);
  