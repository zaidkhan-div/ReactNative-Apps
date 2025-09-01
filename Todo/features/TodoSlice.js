import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "TodoSlice",
    initialState: {
        todo: [],
    },
    reducers: {
        setTodo: (state, action) => {
            state.todo = action.payload;
        },
    }
});

export default TodoSlice.reducer;
export const { setTodo } = TodoSlice.actions