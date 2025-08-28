import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../features/task/taskSlice'

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})