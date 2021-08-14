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

export const changeAddress = (data) => {
  return {
    type: 'CHANGE',
    payload: {
      data
    }
  }
}

export const removeAddress = () => {
  return {
    type: 'REMOVE',
    payload: {
    }
  }
}