export const changeIndex = (index) => {
  return {
    type: 'INDEX',
    payload: {
      picked_index: index,
    }
  };
};

export const addAddress = (data) => {
  return {
    type: 'ADD',
    payload: {
      address: data,
    }
  };
};