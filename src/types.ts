// Тип для функций, принимающих строку и возвращающих строку
export type StringTransformer = (input: string) => string;

// Тип для функций со строкой и числом
export type StringNumberTransformer = (input: string, num: number) => string;

// Интерфейс для всех утилит
export interface StringUtils {
  capitalize: StringTransformer;
  trim: StringTransformer;
  repeat: (input: string, count: number) => string;
  toSnakeCase: StringTransformer;
  toUpperCase: StringTransformer;
  toLowerCase: StringTransformer;
  isEmpty: (input: string) => boolean;
  reverseString: StringTransformer;
  truncate: StringNumberTransformer;
  removeSpaces: StringTransformer;
  countWords: (input: string) => number;
  startsWith: (input: string, prefix: string) => boolean;
  endsWith: (input: string, suffix: string) => boolean;
  replaceAll: (input: string, search: string, replace: string) => string;
}
