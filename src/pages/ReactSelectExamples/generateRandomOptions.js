import namor from "namor";

export const generateRandomOptions = (len = 50) => {
  const ret = [];
  for (let i = 0; i < len; ++i) {
    const valueAndLabel = namor.generate({ words: 1, numbers: 0 });
    ret.push({ value: valueAndLabel, label: valueAndLabel });
  }

  return ret;
};

export const permOptions = generateRandomOptions();
