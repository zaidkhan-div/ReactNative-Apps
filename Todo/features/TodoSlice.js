import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "TodoSlice",
    initialState: {
        todos: [],
    },
    reducers: {
        setTodo: (state, action) => {
            state.todos = action.payload;
        },

    }
});

export default TodoSlice.reducer;
export const { setTodo } = TodoSlice.actions