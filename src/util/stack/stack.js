export default class Stack {
    constructor() {
      this.top = -1;
      this.items = {};
    //   this.size = 0;
    }
  
    get peek() {
      return this.items[this.top];
    }
  
    push(value) {
      this.top += 1;
    //   this.size += 1;
      this.items[this.top] = value;
    }
  }