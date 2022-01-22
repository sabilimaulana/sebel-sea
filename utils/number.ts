export const random = (min = 0, max = 9) =>
  Math.floor(Math.random() * (max - min) + min);
