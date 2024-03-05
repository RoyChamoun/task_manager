import React, { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Task {
  id: number;
  content: string;
  date: string;
  completed: boolean;
}

interface ActiveTasksProps {
  activeTasks: Task[];
  onAddTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
  onMoveToCompleted: (taskId: number) => void;
  onDeleteAllTasks: () => void; // New prop added
}

const ActiveTasks: React.FC<ActiveTasksProps> = ({
  activeTasks,
  onAddTask,
  onDeleteTask,
  onMoveToCompleted,
  onDeleteAllTasks,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [showDateWarning, setShowDateWarning] = useState<boolean>(false);
  const [showInputWarning, setShowInputWarning] = useState<boolean>(false);

  const handleAddTask = () => {
    if (inputValue.trim() === "") {
      setShowInputWarning(true);
      setShowDateWarning(false);
    } else if (selectedDate === "") {
      setShowDateWarning(true);
      setShowInputWarning(false);
    } else {
      const newTask: Task = {
        id: activeTasks.length + 1,
        content: inputValue.trim(),
        date: selectedDate,
        completed: false,
      };
      onAddTask(newTask);
      setInputValue("");
      setSelectedDate("");
      setShowDateWarning(false);
      setShowInputWarning(false);
    }
  };

  const handleCheckboxChange = (taskId: number) => {
    onMoveToCompleted(taskId);
  };

  const handleDeleteTask = (taskId: number) => {
    onDeleteTask(taskId);
  };

  const handleDeleteAllTasks = () => {
    onDeleteAllTasks(); // Call the parent function to delete all tasks
  };

  return (
    <div className="w-full font-semibold text-sm relative">
      <div className="flex items-center mb-4">
        {/* Input fields for adding tasks */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
          aria-label="Demo input"
          placeholder="Enter the task..."
        />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
        />
        {/* Add button */}
        <button
          className="px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      {/* Warning modals */}
      {showDateWarning && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-red-500 mb-2">
              Please select a date before adding a task.
            </p>
            <button
              onClick={() => setShowDateWarning(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
            >
              OK
            </button>
          </div>
        </div>
      )}
      {showInputWarning && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-red-500 mb-2">
              Please enter a task before adding.
            </p>
            <button
              onClick={() => setShowInputWarning(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
            >
              OK
            </button>
          </div>
        </div>
      )}
      {/* No tasks message */}
      {activeTasks.length === 0 && (
        <div className="absolute top-44 left-1/2 text-gray-500 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p>No active tasks</p>
        </div>
      )}
      {/* Task list */}
      <div className="max-h-48 overflow-y-auto">
        <ul className="bg-blue-500 text-black">
          {activeTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between border-b border-gray-400 py-2 px-4"
            >
              <div className="flex-grow">{task.content}</div>
              <span>{task.date}</span>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(task.id)}
                className="h-4 w-4 mr-2"
              />
              <IconButton
                onClick={() => handleDeleteTask(task.id)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </li>
          ))}
        </ul>
      </div>
      {/* Delete All button */}
      {activeTasks.length > 0 && ( // Only render button if there are active tasks
        <div className="fixed bottom-48">
          <button
            disabled={activeTasks.length === 0}
            className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
            onClick={handleDeleteAllTasks}
          >
            Delete All
          </button>
        </div>
      )}
    </div>
  );
};

export default ActiveTasks;

