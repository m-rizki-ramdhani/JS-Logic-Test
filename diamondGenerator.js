function printDiamond(long) {
    const middleIndex = Math.floor(long / 2);
    for (let i = 0; i < long; i++) {
      const kosong = Math.abs(middleIndex - i);
      const bintang = long - spaces * 2;
      console.log(" ".repeat(kosong) + "*".repeat(bintang));
    }
  }
  
  printDiamond(3);
  printDiamond(5); 
  printDiamond(6);