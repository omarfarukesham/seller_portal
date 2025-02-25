export default function removeEmptyKeys(
  obj,
  keyValues = [],
  options = {
    removeEmptyObject: false,
    removeEmptyArray: false,
  },
) {
  const newObj = { ...obj };
  Object.keys(newObj).forEach((key) => {
    // Remove the key if null or undefined
    if (newObj[key] === null || newObj[key] === undefined) {
      delete newObj[key];
      return;
    }

    // Remove the key if matched by given keyValues
    if (keyValues.includes(newObj[key])) {
      delete newObj[key];
      return;
    }

    // Remove the key if it's an empty array
    if (
      options.removeEmptyArray &&
      Array.isArray(newObj[key]) &&
      newObj[key].length === 0
    ) {
      delete newObj[key];
      return;
    }

    // Remove the key if it's an empty object
    if (
      options.removeEmptyObject &&
      typeof newObj[key] === 'object' &&
      !Array.isArray(newObj[key]) &&
      Object.keys(newObj[key]).length === 0
    ) {
      delete newObj[key];
    }
  });
  return newObj;
}
