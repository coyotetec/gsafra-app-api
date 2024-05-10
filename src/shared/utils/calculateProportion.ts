export function calculateProportion(value: number, total: number) {
  return parseFloat(((value / total) * 100).toFixed(2));
}
