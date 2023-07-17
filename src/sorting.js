export default function orderByProps(obj, array) {
  const defaultSorting = [];
  const customSorting = [];

  for (const property in obj) {
    if (array.includes(property)) {
      defaultSorting[array.findIndex((item) => item === property)] = {
        key: property, value: obj[property],
      };
    } else {
      customSorting.push({ key: property, value: obj[property] });
    }
  }

  customSorting.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    return 0;
  });

  return defaultSorting.concat(customSorting);
}
