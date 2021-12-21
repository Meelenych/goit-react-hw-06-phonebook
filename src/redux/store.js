// import { createStore } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { connect } from "react-redux";
import { contactsReducer } from "./contacts/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(contactsReducer, composeWithDevTools());

//createStore(reducer, [preloadedState], [enhancer])
//reducer - функция, которая возвращает следующее дерево состояния, учитывая текущее дерево состояния и действие для обработки.
// preloadedState - начальное состояние, к примеру сериализаванное состояние последнего пользовательского сеанса. Это должен быть объект той же формы, что и, как минимум, часть состояния.
// enhancer - расширяет возможности хранилища при помощи прослоек (middleware).

//Позволяет получить доступ к состоянию через метод getState()
//Для отправки дейсвтий есть метод dispatch(action)
//Изменения производятся с использованием чистых функций - редюсеров (reducers), которые реагируют на действия
// Регистрирация слушателей делается методом subscribe(listener)
