
import React from 'react'

const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
        <li className={`flex items-center gap-3 py-2 px-4 bg-white rounded shadow mb-2 ${task.completed ? 'opacity-60 line-through' : ''}`}>
            <span className="flex-1 text-gray-800">{task.text}</span>
            <button
                className={`px-3 py-1 rounded transition ${task.completed ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                onClick={onToggle}
            >
                {task.completed ? 'Undo' : 'Done'}
            </button>
            <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={onDelete}
            >
                Delete
            </button>
        </li>
    )
}

export default TaskItem