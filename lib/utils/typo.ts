/**
 * Functions to convert camelCase strings to PascalCase.
 * Example: “helloWorld” → ”HelloWorld”
 * @props str string in camelCase format
 * @returns the string converted to PascalCase
 */
export function camelToPascalCase(str: string): string {
  if (!str) return str;

  return str.charAt(0).toUpperCase() + str.slice(1);
}
