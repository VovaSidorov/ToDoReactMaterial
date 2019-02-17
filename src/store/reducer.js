import {ADD_NEW_TASK, DONE_TASK, REMOVE_TASK} from "../index";

const initState = {
    tasks: [
        {name: "Wake up", done:false, remove:false}
    ],
    user: null
};

export const reducer = (state=initState,action) => {

    console.log(action);

    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state, tasks: [...state.tasks, {name: action.payload, done:false, remove:false}]
            };
        case DONE_TASK:
            return {
                // ...state, tasks: state.tasks
                ...state, tasks: state.tasks.map((el, i) => action.payload === i?{...el, done:true}:el)
            };
        case REMOVE_TASK:
            return {
                // ...state, tasks: state.tasks
                ...state, tasks: state.tasks.map((el, i) => action.payload === i?{...el, remove:true}:el)
            };
    }
    return state;
};