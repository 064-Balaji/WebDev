//Factory and Constructor function practice to initialize an object at runtime.

function AddressObj(street, city, zip) {
  this.address = {
    streetName: street,
    cityName: city,
    zipCode: zip
  };

  this.showAddresss = function(){
    for(let key in this.address)
      console.log(key, this.address[key]);
  }
}

let balaji = new AddressObj('a', 'b', 'c');

balaji.showAddresss();



function addressObj(street, city, zip){
  return {
    streetName: street,
    cityName: city,
    zipCode: zip
  };
}

let another = addressObj('a', 'b', 'c');

for(let key in another)
  console.log(key, another[key]);