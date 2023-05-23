export const truncateText = (text: string, maxNum: number) => {
  return text.length <= maxNum ? text : `${text.slice(0, maxNum)}`;
};
