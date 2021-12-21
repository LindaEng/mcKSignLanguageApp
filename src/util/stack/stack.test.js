import Stack from './stack.js';

describe('The Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push(1);
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe(1);

    stack.push(2);
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe(2);
  });

  // // example test
  // it('can return it\'s size', () => {
  //   let stackSize = stack.size;
  //   expect(stackSize).toBe(0);

  //   stack.push(1);
  //   stack.push(1);
  //   stack.push(1);
  //   stack.push(1);
  //   stack.push(1);

  //   stackSize = stack.size;
  //   expect(stackSize).toBe(5);
  // });

  it.todo('write a pop function, and test it');
});
