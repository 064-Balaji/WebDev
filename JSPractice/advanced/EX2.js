function HTMLElement() {
  this.click = function(){
    console.log('Clicked');
  }
  this.render = function(){
    return 'Rendering HTML Element.';
  }
}

HTMLElement.prototype.focus = function() {
  console.log('Focused');
}

function HTMLSelectElement(items = []) {
  this.items = items;
  this.addItem = function(value) {
    this.items.push(value);
  }
  this.removeItem = function(value) {
    this.items.splice(this.items.indexOf(value), 1);
  }
  this.render = function(){
    return `
<select>
${this.items.map(item =>` <option>${item}</option>`).join('\n')}
</select>
    `
  }
}

function HTMLImageElement(value = ''){
  this.src = value;
  this.render = function() {
    return `<img src="${this.src}" />`;
  }
}


HTMLSelectElement.prototype = new HTMLElement;
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

HTMLImageElement.prototype = new HTMLElement;
HTMLImageElement.prototype.constructor = HTMLImageElement;


const html = new HTMLElement();

const elements = [
  new HTMLSelectElement([1,2,3]),
  new HTMLImageElement('http://')
];

for (let key of elements){
  console.log(key.render());
}