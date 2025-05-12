import { stringUtils } from "./utils";

console.log(stringUtils.capitalize("typescript"));
console.log(stringUtils.trim("   Hello World   "));
console.log(stringUtils.repeat("abc", 3));
console.log(stringUtils.toSnakeCase("Hello World Again"));
console.log(stringUtils.toUpperCase("hello"));
console.log(stringUtils.toLowerCase("HELLO"));
console.log(stringUtils.isEmpty("    "));
console.log(stringUtils.isEmpty("content"));
console.log(stringUtils.reverseString("abcdef"));
console.log(stringUtils.truncate("This is a long text", 10));
console.log(stringUtils.removeSpaces("a b c d e f"));
console.log(stringUtils.countWords("one two three four"));
console.log(stringUtils.startsWith("TypeScript", "Type"));
console.log(stringUtils.startsWith("TypeScript", "Script"));

// ✅ Вот эти 2 строки ты добавляешь:
console.log(stringUtils.endsWith("TypeScript", "Script"));
console.log(stringUtils.replaceAll("one two two three", "two", "2"));
