export const changeIndex = (index) => {
  return {
    type: 'INDEX',
    payload: {
      picked_index: index,
    }
  };
};