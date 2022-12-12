import cryptoRandomString from "crypto-random-string";

export const randomColor = () => {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = "#" + hex.toString(16);

  return color;
};

export const createId = () => {
  const randomNumber = cryptoRandomString({ length: 12, type: "numeric" });
  return Number(randomNumber);
};
