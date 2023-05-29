class Item {
    constructor(type, name, price) {
      this.type = type;
      this.name = name;
      this.price = price;
    }
  }
  
  function filterList(items) {
    const filteredList = [];
    const uniqueItems = {};
  
    for (const item of items) {
      const key = item.type + '-' + item.name;
  
      if (!(key in uniqueItems) || item.price < uniqueItems[key].price) {
        uniqueItems[key] = item;
      }
    }
  
    for (const key in uniqueItems) {
      filteredList.push(uniqueItems[key]);
    }
  
    return filteredList;
  }
  
  // Example usage:
  const items = [
    new Item('TypeA', 'Item1', 10),
    new Item('TypeB', 'Item2', 15),
    new Item('TypeA', 'Item1', 8),
    new Item('TypeC', 'Item3', 20),
    new Item('TypeB', 'Item2', 12)
  ];
  
  const filteredItems = filterList(items);
  console.log(filteredItems);
  