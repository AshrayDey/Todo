// Actions constants
const ADD_TODO="ADD Todo";
const TOGGLE_TODO="Toggle Todo"

// Action Creators
const addTodo=(text)=>({text,type:ADD_TODO});
const toggleTodo=(index)=>({index,type:TOGGLE_TODO});