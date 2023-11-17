import { doubleTheNum, funckyNum } from "./utils";

describe("check double num", () => {
  it("double the number", () => {
    const input = 2;
    const expected = 4;
    const res = doubleTheNum(input);
    expect(res).toEqual(expected);
  });
});

describe("check funky", () => {
  it("have divide by 10", () => {
    const input = 20;
    const output = 10;
    const res = funckyNum(input)
    expect(res).toEqual(output)
  });
  it("add 1 to fibo",()=>{
    const input = 89
    const output = 90
    const res = funckyNum(input)
    expect(res).toEqual(output)
  })
  it('retutn square',()=>{
    const input = 6
    const output = 36
    const res = funckyNum(input)
    expect(res).toEqual(output)
  })
});
