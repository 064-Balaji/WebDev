function SortProducts(products) {
  this.inExpensive = [],
  this.moderate = [],
  this.pricy = [],
  this.products = products,
  this.ok = function() {
    for(let key in this.products){
      if(this.products[key] < 100)
        this.inExpensive[this.inExpensive.length] = {[key]: this.products[key]};
      else if(products[key] < 1000)
        this.moderate[this.moderate.length] = {[key]: this.products[key]};
      else if(products[key] < 100000)
        this.pricy[this.pricy.length] = {[key]: this.products[key]};
    }
  }
}

let products = {
  Shampoo: 1,
  Soap: 35,
  headPhone: 500,
  pen: 45,
  Mobile: 15000
};

const sike = new SortProducts(products);

sike.ok();

console.log(sike);