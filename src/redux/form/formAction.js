export const formAction = (form) => {
  return {
    type: "ADD_FORM",
    payload: form,
  };
};

export const changeName = (value) => {
  return {
    type: "CHANGE_NAME",
    payload: value,
  };
};

export const changeNumber = (value) => {
  return {
    type: "CHANGE_NUMBER",
    payload: value,
  };
};
