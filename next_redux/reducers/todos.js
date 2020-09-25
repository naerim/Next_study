import produce from "immer";

// 액션 타입
const RESET_TODOS = "todos/RESET_TODOS";
const CHNAGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const CHECK = "todos/CHECK";
const REMOVE = "todos/REMOVE";

// 액션 생성 함수
export const resetTodos = () => ({
    type: RESET_TODOS,
});

export const changeInput = (input) => ({
    type: CHNAGE_INPUT,
    input,
});

let id = 2;
export const insert = (text) => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false,
    },
});

export const check = (id) => ({
    type: CHECK,
    id,
});

export const remove = (id) => ({
    type: REMOVE,
    id,
});

// 초기 상태
const initialState = {
    input: "",
    todos: [{ id: 1, text: "리액트 기초 배우기", done: true }],
};

// 리듀서 함수
function todos(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case RESET_TODOS:
                draft.todos = [{ id: 1, text: "리액트 기초 배우기", done: true }];
            case CHNAGE_INPUT:
                draft.input = action.input;
                break;
            case INSERT:
                console.log(action.todo);
                draft.todos.push(action.todo);
                break;
            case CHECK:
                const todo = draft.todos.find((todo) => todo.id === action.id);
                todo.done = !todo.done;
                break;
            case REMOVE:
                const index = draft.todos.findIndex((todo) => todo.id === action.id);
                draft.todos.splice(index, 1);
                break;
            default:
                break;
        }
    });
}

export default todos;