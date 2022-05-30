// isValidCSSColor is a function that check if a
// given string is a valid css color rule
//
// Example:
//
//   #eee -> true
//   #eee1 -> false
//   rgba(0,0,0,0.5) -> true
//   initial -> true
export const isValidCSSColor = (color: string) => {
  const s = new Option().style;
  s.color = color;
  return s.color !== '';
};
