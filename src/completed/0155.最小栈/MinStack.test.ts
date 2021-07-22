import { MinStack } from "./MinStack";

describe("155. 最小栈", () => {
  test("merge.case 1 ", () => {
    const m = new MinStack();
    m.push(-2);
    m.push(0);
    m.push(-3);
    expect(m.getMin()).toBe(-3);
    m.pop();
    expect(m.top()).toBe(0);
    expect(m.getMin()).toBe(-2);
  });
});
