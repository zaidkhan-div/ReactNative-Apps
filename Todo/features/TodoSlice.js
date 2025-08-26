import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "TodoSlice",
    initialState: {
        todo: [],
        filterTodo: []
    },
    reducers: {
        setTodo: (state, action) => {
            state.todo = action.payload;
            state.filterTodo = action.payload;
        }
    }
});

export default TodoSlice.reducer;
export const { setTodo } = TodoSlice.actions