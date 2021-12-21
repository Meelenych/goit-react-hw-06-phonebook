const addContact = (text) => ({
  type: "ADD_CONTACT",
  payload: {
    id: Date.now(),
    text,
  },
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (text) => dispatch(addContact(text)),
});

const delContact = (id) => ({
  type: "DELETE_CONTACT",
  payload: {
    id,
  },
});

//или так Если аргументы действия совпадают с параметрами объявляемого метода, можно вместо функции передать объект. В таком случае connect пройдет по ключам объекта и обернет их в dispatch
const mapDispatchToProps2 = { delContact };
