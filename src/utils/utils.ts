export const pickMultiColor = (index: number) => {
  const val = index % 5;
  switch (val) {
    case 0:
      return '#bde26b';
    case 1:
      return '#ffa8f5';
    case 2:
      return '#6be7f5';
    case 3:
      return '#ffbf82';
    default:
      return '#dcb2fb';
  }
};
