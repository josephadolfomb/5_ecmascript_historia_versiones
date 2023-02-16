function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//

export function* getId() {
    let michiId = 1
    while (true) {
      yield michiId++
    }
  }
  
  const michiId = getId()
  console.log(michiId.next().value);
  console.log(michiId.next().value);
  console.log(michiId.next().value);
  console.log(michiId.next().value);
  console.log(michiId.next().value);

//

export function* getId() {
    while (true) {
      yield Math.random().toString(36).substring(5).toUpperCase();
    }
  }

  console.log(getId().next().value);
  console.log(getId().next().value);
  console.log(getId().next().value);
  console.log(getId().next().value);
  console.log(getId().next().value);
  console.log(getId().next().value);


  
  /*Results examples 
  
  ["I84P6YK","O7QL83M8","N5NCIQ1","JY6GGDYF","KLUY7TJQ","PAIU4RJB","Y5HUKX1M","SJWKL74O","62C1OBY7","783334YA"]
  
  */
  

  //

  export function* getId() {
    while (true) {
      const random = []
      const id = Math.random().toString(36).substring(5).toUpperCase();
      if (!random.includes(id)) {
        random.push(id)
      }
      for (let value of random) {
        yield value
      }
    }
  }

  const uniqueId = getId();
  console.log(uniqueId.next().value);
  console.log(uniqueId.next().value);
  console.log(uniqueId.next().value);
  console.log(uniqueId.next().value);
  console.log(uniqueId.next().value);
  console.log(uniqueId.next().value);