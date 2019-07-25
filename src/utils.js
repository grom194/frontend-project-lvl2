import { isObject, isString } from "lodash/fp";

const genPath = (path, key) => {
  return `${path}${path.length === 0 ? "" : "."}${key}`;
};

const formatValue = value => {
  if (isObject(value)) return "[complex value]";
  if (isString(value)) return `'${value}'`;
  return value;
};

export { genPath, formatValue };
