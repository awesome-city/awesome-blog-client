export class StringUtils {
  static format(str: string, args: { [key: string]: any }): string {
    return !args
      ? str
      : new Function(...Object.keys(args), `return \`${str}\`;`)(...Object.values(args).map((value) => value ?? ''));
  }
}
