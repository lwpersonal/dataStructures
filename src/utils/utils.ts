/**
 * 获取值的类型
 * @param data
 */
export const getType = (data: any) => {
  const str = Object.prototype.toString.call(data).toLocaleLowerCase();

  return str.replace(/^\[object (\w+)\]$/, "$1");
};

export const isObject = (obj: any) => getType(obj) === "object";

export const isEmpty = (data: any) =>
  getType(data) === "null" || getType(data) === "undefined";

// 是否是可用的数字
export const isAllowNumber = (num: any, exclude: number[] = [0]): boolean => {
  return (
    typeof num === "number" && !Number.isNaN(num) && !exclude.includes(num)
  );
};
