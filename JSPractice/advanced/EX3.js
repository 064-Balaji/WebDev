//Stack using JS

const _array = new WeakMap();

class stack{
  constructor(value){
    this.count = value.length;
    _array.set(this, [value]);
  }

  push(value){
    _array.get(this)[0].push(value);
    this.count++;
  }

  peek(){
    if(this.count === 0) 
      throw new Error('Stack is Empty');
    console.log(_array.get(this)[0][this.count-1])
  }

  pop(){
    if(this.count === 0) 
      throw new Error('Stack is Empty');
    _array.get(this)[0].pop()
    this.count--;
  }
}

const s= new stack([1,2,3]);