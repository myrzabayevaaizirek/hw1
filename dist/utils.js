"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringUtils = void 0;
exports.stringUtils = {
    capitalize: (input) => input.charAt(0).toUpperCase() + input.slice(1),
    trim: (input) => input.trim(),
    repeat: (input, count) => input.repeat(count),
    toSnakeCase: (input) => input.trim().toLowerCase().replace(/\s+/g, "_"),
    toUpperCase: (input) => input.toUpperCase(),
    toLowerCase: (input) => input.toLowerCase(),
    isEmpty: (input) => input.trim().length === 0,
    reverseString: (input) => input.split("").reverse().join(""),
    truncate: (input, num) => input.length > num ? input.slice(0, num) + "..." : input,
    removeSpaces: (input) => input.replace(/\s+/g, ""),
    countWords: (input) => input.trim().split(/\s+/).length,
    startsWith: (input, prefix) => input.startsWith(prefix),
    endsWith: (input, suffix) => input.endsWith(suffix),
    replaceAll: (input, search, replace) => input.split(search).join(replace),
};
