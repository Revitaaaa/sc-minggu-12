const { tambah, kurang } = require("./math");

test("menjumlahkan 1 + 2 sama dengan 3", () => {
  expect(tambah(1, 2)).toBe(3);
});

test("mengurangkan 5 - 3 sama dengan 2", () => {
  expect(kurang(5, 3)).toBe(2);
});
