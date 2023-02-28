// import puppeteer from "puppeteer";
// const { generateText } = require("./util");
const { generateText, checkAndGenerate } = require("./util");

test("should be name and age", () => {
  const text = generateText("max", 28);
  expect(text).toBe("max (28 years old)");
});

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

// test("should click around", async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 80,
//     args: ["-window-size=1920,1080"],
//   });
//   const page = await browser.newPage();
//   await page.goto("");
// });
