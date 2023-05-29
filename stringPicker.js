function stringPicker(input) {
    const regex = /\$\{([^}]+)\}/g;
    const result = [];
    let match;
  
    while ((match = regex.exec(input)) !== null) {
      result.push(match[1]);
    }
  
    return result;
  }
  
  const arg = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur sagittis risus ${PRICE}, sed finibus ante ornare a. Donec a dolor ultricies, bibendum eros in ${Ticket 09}, commodo nibh. Morbi eget dui facilisis, imperdiet quam vitae, faucibus sem.";
  
  const result = stringPicker(arg);
  console.log(result);
  