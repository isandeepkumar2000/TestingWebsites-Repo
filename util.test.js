const { generateText } = require("./util");

test("should be name and age", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});
