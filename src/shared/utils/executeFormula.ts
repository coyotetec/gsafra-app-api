export function executeFomula(formula: string) {
  const result: number = eval(formula);

  return result.toFixed(2);
}
