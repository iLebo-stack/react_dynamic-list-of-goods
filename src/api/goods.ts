// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => (
      goods.slice(0, 5)
        .sort((goodA, goodB) => goodA.name.localeCompare(goodB.name))));
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(({ color }) => color === 'red'));
};
