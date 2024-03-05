
import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Task {
  id: number;
  content: string;
  date: string;
  completed: boolean;
}

interface CompletedTasksProps {
  completedTasks: Task[];
  onDeleteTask: (taskId: number) => void;
  onMoveToActive: (taskId: number) => void; 
}

const CompletedTasks: React.FC<CompletedTasksProps> = ({
  completedTasks,
  onDeleteTask,
  onMoveToActive,
}) => {
  const handleDeleteTask = (taskId: number) => {
    onDeleteTask(taskId);
  };

  const handleMoveToActive = (taskId: number) => {
    onMoveToActive(taskId);
  };

  const handleDeleteAllTasks = () => {
    completedTasks.forEach((task) => onDeleteTask(task.id));
  };

  return (
    <>
      {completedTasks.length === 0 && (
        <div className="absolute top-96 left-1/2 text-gray-500 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p>No completed tasks</p>
        </div>
      )}
      <div className="max-h-48 overflow-y-auto">
        <div>
          <ul className="bg-blue-500 text-black">
            {completedTasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between border-b border-gray-400 py-2 px-4"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={false} // Initially unchecked
                    onChange={() => handleMoveToActive(task.id)}
                    className="mr-2"
                  />
                  <div className="flex-grow">{task.content}</div>
                </div>
                <span>{task.date}</span>
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
      </div>
      <div className="fixed bottom-48">
      {completedTasks.length > 0 && ( // Only render button if there are active tasks
        <div className="fixed bottom-48">
          <button
            disabled={completedTasks.length === 0}
            className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
            onClick={handleDeleteAllTasks}
          >
            Delete All
          </button>
        </div>
      )}
      </div>
    </>
  );
};

export default CompletedTasks;

