
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskItem from './TaskItem'
import { setFilter, toggleTask, deleteTask } from '../features/task/taskSlice'

const TaskList = () => {
    const dispatch = useDispatch();
    const { items, filters } = useSelector(state => state.tasks);

    const filteredItems = filters === 'completed'
        ? items.filter(item => item.completed)
        : items;

    return (
        <>
            <div className="flex gap-2 mb-4">
                <button
                    className={`px-4 py-2 rounded ${filters === 'all' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                    onClick={() => dispatch(setFilter('all'))}
                >
                    All
                </button>
                <button
                    className={`px-4 py-2 rounded ${filters === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                    onClick={() => dispatch(setFilter('completed'))}
                >
                    Completed
                </button>
            </div>
            <ul className="list-none p-0 my-5 bg-gray-50 rounded-lg">
                {filteredItems.map(item => (
                    <TaskItem
                        key={item.id}
                        task={item}
                        onToggle={() => dispatch(toggleTask(item.id))}
                        onDelete={() => dispatch(deleteTask(item.id))}
                    />
                ))}
            </ul>
        </>
    )
}

export default TaskList
