import { todoReducer } from "../reducers/todoReducer";
import  * as redux from "redux";

export const store = redux.createStore(todoReducer);