// /**
//  * Created by mumarm45 on 10/12/2018.
//  */
//
// import {applyReducuder, combineReducers, createStroe} from "react-redux";
// //library
// // let createStore = (reducer) => {
// //     let state;
// //     let listeners = [];
// //
// //     let getState = () => state;
// //     let subscribe = (listener) => {
// //         listeners.push(listener);
// //         return () => {
// //             return listeners.filter(l => l !== listener)
// //         }
// //     };
// //     let dispatch = (action) => {
// //         state = reducer(state, action);
// //         listeners.forEach(listener => listener());
// //     };
// //
// //     return {
// //         getState: getState,
// //         subscribe: subscribe,
// //         dispatch: dispatch
// //     }
// //
// // };
// let ADD_TODO = 'ADD_TODO';
// let REMOVE_TODO = 'REMOVE_TODO';
// let TOGGLE_TODO = 'TOGGLE_TODO';
// let ADD_GOAL = 'ADD_GOAL';
// let REMOVE_GOAL = 'REMOVE_GOAL';
//
// //action creator
// function addTodoAction(todo) {
//     return {
//         type: ADD_TODO,
//         todo
//     }
// }
// function removeTodoAction(id) {
//     return {
//         type: REMOVE_TODO,
//         id
//     }
// }
// function toggleTodoAction(id) {
//     return {
//         type: TOGGLE_TODO,
//         id
//     }
// }
// function addGoalAction(goal) {
//     return {
//         type: ADD_GOAL,
//         goal
//     }
// }
// function removeGoalAction(id) {
//     return {
//         type: REMOVE_GOAL,
//         id
//     }
// }
//
//
// //reducer
// let todos = (state = [], action) => {
//     switch (action.type) {
//         case  ADD_TODO:
//             return state.concat(action.todo);
//         case REMOVE_TODO:
//             return state.filter(todo => todo.id !== action.id);
//         case TOGGLE_TODO:
//             return state.map(todo => todo.id !== action.id ? todo : Object.assign({}, todo, {complete: !todo.complete}));
//         default:
//             return state;
//
//     }
// };
//
// let goals = (state = [], action) => {
//     switch (action.type) {
//         case  ADD_GOAL:
//             return state.concat(action.goal);
//         case REMOVE_GOAL:
//             return state.filter(goal => goal.id !== action.id);
//         default:
//             return state;
//
//     }
// };
//
//
// let checker = (store) => (next) => (action) => {
//     if (action.type === ADD_TODO && action.todo.name.toLowerCase().indexOf('bitcoin') !== -1) {
//         return alert('bad idea');
//     }
//     if (action.type === ADD_GOAL && action.goal.name.toLowerCase().indexOf('bitcoin') !== -1) {
//         return alert('bad idea');
//     }
//
//     return next(action);
// };
//
// let logger = (store) => (next) => (action) => {
//     console.group(action.type);
//     console.log('this action: ', action);
//     const result = next(action);
//     console.log('this is new state: ', store.getState());
//     console.groupEnd();
// };
// export const store = createStroe(combineReducers({todos, goals}), applyReducuder(checker, logger()));
//
// // store.dispatch(addTodoAction({id: 0, name: 'learning react', complete: false}));
// // store.dispatch(addTodoAction({id: 1, name: 'learning redux', complete: false}));
// // store.dispatch(addGoalAction({id: 0, name: 'lose fates', complete: false}));