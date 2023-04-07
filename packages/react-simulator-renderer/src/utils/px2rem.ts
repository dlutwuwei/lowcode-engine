export const transformPxToRem = (styleData: Record<string, string> = {}) => {
  const style: Record<string, string> = {};
  Object.keys(styleData).forEach((key) => {
    const val = styleData[key];
    if (/px$/.test(val)) {
      style[key] = `${parseFloat(val) / 50}rem`;
    } else {
      style[key] = val;
    }
  });
  return style;
};
