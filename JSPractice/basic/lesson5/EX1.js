//pass the object to an function and displays

const address = {
  street: 'Solai alagu puram',
  city: 'Madurai',
  zipcode: 625011
};

showAddress(address);

function showAddress(address) {
  for (let key in address)
    console.log(key, address[key]);
}