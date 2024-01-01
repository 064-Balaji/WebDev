function AddressObj(street, city, zip) {
  this.address = {
    streetName: street,
    cityName: city,
    zipCode: zip
  };
}

let address1 = new AddressObj('a', 'b', 'c');
let address2 = new AddressObj('a', 'b', 'c');

//Iterate all of the properties of an objects and find if its both objects can have the same property name then returns as true.
function areEqual(address1, address2) {
  let val;
  for(let key in address1){
    for(let key2 in address2){
      if(key === key2){
        val = true;
        break;
      }
      else
        val = false;
    }
    if(val !== true)
      return false
  }
  return true;
}

console.log(areEqual(address1, address2));


let address3 = address1;
//Object Equality if two objects are points same data then return true
function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areSame(address1, address3))