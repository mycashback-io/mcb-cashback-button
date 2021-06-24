import MCBButton from "./MCBButton";
test("it works", () => {
  let obj = new MCBButton();
  expect(obj.getVersion() === "0.0.0").toBe(true);
});
