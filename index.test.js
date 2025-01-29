const { expect } = require("@playwright/test");
const index = require("./index");

describe("Check env variables", () => {
  test("DATABASE_URL exists", () => {
    expect(process.env.DATABASE_URL).toBeDefined();
  });
});

describe("Check users", () => {
  it("Create new user with no params", () => {
    const user = new index.User();
    expect(user).toBeDefined();

    expect(user).toEqual(
      expect.objectContaining({ name: undefined, age: undefined }),
    );
  });

  it("Create new user with name and age", () => {
    const user = new index.User("John", 25);
    expect(user).toBeDefined();

    expect(user).toEqual(expect.objectContaining({ name: "John", age: 25 }));
  });

  it("Create new user with name and age, but inverted", () => {
    const user = new index.User(25, "John");
    expect(user).toBeDefined();

    expect(user).toEqual(expect.objectContaining({ name: 25, age: "John" }));
  });

  it("Create new user with one param", () => {
    const user = new index.User("John");
    expect(user).toBeDefined();

    expect(user).toEqual(
      expect.objectContaining({ name: "John", age: undefined }),
    );
  });

  it("Create new user with the create function", () => {
    const user = index.createUser();
    expect(user).toBeDefined();

    expect(user).toEqual(expect.objectContaining({ name: "John", age: 25 }));
  });
});

describe("Check getAllFlavors", () => {
  it("Should return an array of flavors", () => {
    const flavors = index.getAllFlavors();
    expect(flavors).toBeDefined();

    expect(flavors).toEqual(["chocolate", "vanilla", "strawberry"]);
  });

  it("Should not be empty", () => {
    const flavors = index.getAllFlavors();
    expect(flavors).toBeDefined();

    expect(flavors.length).toBeGreaterThan(0);
  });

  it("Should have only 3 elements", () => {
    const flavors = index.getAllFlavors();
    expect(flavors).toBeDefined();

    expect(flavors.length).toBe(3);
  });

  it("Should contain only strings", () => {
    const flavors = index.getAllFlavors();
    expect(flavors).toBeDefined();

    flavors.forEach((flavor) => {
      expect(typeof flavor).toBe("string");
    });
  });

  it("Should contain only unique strings", () => {
    const flavors = index.getAllFlavors();
    expect(flavors).toBeDefined();

    const uniqueFlavors = [...new Set(flavors)];
    expect(uniqueFlavors.length).toBe(flavors.length);
  });
});

describe("Check add", () => {
  it("Should pass two number", () => {
    expect(index.add(2)).toBeNaN();
    expect(index.add("2", "3")).toBe("23");
    expect(index.add("2", 3)).toBe("23");
    expect(index.add(2, "3")).toBe("23");
    expect(index.add(2, {})).toBe("2[object Object]");
  });

  it("Should return the sum of two numbers", () => {
    const result = index.add(2, 3);
    expect(result).toBeDefined();

    expect(result).toBe(5);
  });

  it("Should return the sum of two numbers, but inverted", () => {
    const result = index.add(3, 2);
    expect(result).toBeDefined();

    expect(result).toBe(5);
  });

  it("Should return the sum of two numbers, with a negative number", () => {
    const result = index.add(10, -5);

    expect(result).toEqual(5);
  });
});

describe("Check firstNumberIsOne", () => {
  it("Should be an array of number", () => {
    expect(index.firstNumberIsOne("1")).toBe(false);
    expect(index.firstNumberIsOne({})).toBe(undefined);
    expect(index.firstNumberIsOne([])).toBe(undefined);
    expect(index.firstNumberIsOne(1)).toBe(undefined);
    expect(index.firstNumberIsOne(["1"])).toBe(false);
    expect(index.firstNumberIsOne([1])).toBe(true);
  });
});
