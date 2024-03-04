// import React from "react";
// import { TabPanel } from "@mui/base/TabPanel";

// function Completedtasks() {
//   return (
//     <TabPanel className="w-full font-sans text-sm" value={2}>
      
//     </TabPanel>
//   );
// }

// export default Completedtasks;


// import React from "react";
// import { TabPanel } from "@mui/base/TabPanel";

// function Completedtasks() {
//   return (
//     <TabPanel className="w-full font-sans text-sm" value={2}>
//       {/* You can place any content related to completed tasks here */}
//     </TabPanel>
//   );
// }

// export default Completedtasks;


// import React from "react";
// import { TabPanel } from "@mui/base/TabPanel";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// interface Props {
//   completedTasks: Task[];
// }

// function Completedtasks({ completedTasks }: Props) {
//   return (
//     <TabPanel value={2} className="w-full font-sans text-sm">
//       <ul>
//         {completedTasks.map((task) => (
//           <li key={task.id}>{task.content}</li>
//         ))}
//       </ul>
//     </TabPanel>
//   );
// }

// export default Completedtasks;


// import React from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// // Define the Task interface
// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// interface CompletedTasksProps {
//   completedTasks: Task[];
// }

// const Completedtasks: React.FC<CompletedTasksProps> = ({ completedTasks }) => {
//   return (
//     <TabPanel value={2}>
//       <div className="max-h-48 overflow-y-auto">
//         <div>
//           <ul className="bg-blue-500 text-black">
//             {completedTasks.map((task) => (
//               <li
//                 key={task.id}
//                 className="flex items-center justify-between border-b border-gray-400 py-2 px-4"
//               >
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.date}</span>
//                 <IconButton aria-label="delete">
//                   <DeleteIcon />
//                 </IconButton>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </TabPanel>
//   );
// };

// export default Completedtasks;


// import React from "react";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// Define the Task interface
// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// interface CompletedTasksProps {
//   completedTasks: Task[];
//   onDeleteTask: (taskId: number) => void;
//   handleMoveToActive: (taskId: number) => void; // Add handleMoveToActive function to props
// }

// const Completedtasks: React.FC<CompletedTasksProps> = ({
//   completedTasks,
//   onDeleteTask,
//   handleMoveToActive,
// }) => {
//   const handleDeleteTask = (taskId: number) => {
//     onDeleteTask(taskId);
//   };
//   const handleDeleteAllTasks = () => {
//     // Delete all completed tasks
//     completedTasks.forEach((task) => onDeleteTask(task.id));
//   };
//   return (
//     <>
//       {completedTasks.length === 0 && (
//         <div className="absolute top-44 left-1/2 text-gray-500 transform -translate-x-1/2 -translate-y-1/2 text-center">
//           <p>No completed tasks</p>
//         </div>
//       )}
//       <div className="max-h-48 overflow-y-auto">
//         <div>
//           <ul className="bg-blue-500 text-black">
//             {completedTasks.map((task) => (
//               <li
//                 key={task.id}
//                 className="flex items-center justify-between border-b border-gray-400 py-2 px-4"
//               >
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.date}</span>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   // Use handleMoveToActive function for onChange
//                   onChange={() => handleMoveToActive(task.id)}
//                   className="h-4 w-4 mr-16"
//                 />
//                 <IconButton
//                   onClick={() => handleDeleteTask(task.id)}
//                   aria-label="delete"
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="fixed bottom-48">
//         <button
//           disabled={completedTasks.length === 0} // Disable the button if no completed tasks
//           className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           onClick={handleDeleteAllTasks} // handleDeleteAllTasks function is not defined, you need to define it
//         >
//           Delete All
//         </button>
//       </div>
//     </>
//   );
// };

// export default Completedtasks;



// Completedtasks.tsx
// CompletedTasks.tsx
// import React from "react";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// interface CompletedTasksProps {
//   completedTasks: Task[];
//   onDeleteTask: (taskId: number) => void;
//   handleMoveToActive: (taskId: number) => void;
// }

// const CompletedTasks: React.FC<CompletedTasksProps> = ({
//   completedTasks,
//   onDeleteTask,
//   handleMoveToActive,
// }) => {
//   const handleDeleteTask = (taskId: number) => {
//     onDeleteTask(taskId);
//   };

//   const handleDeleteAllTasks = () => {
//     completedTasks.forEach((task) => onDeleteTask(task.id));
//   };

//   return (
//     <>
//       {completedTasks.length === 0 && (
//         <div className="absolute top-44 left-1/2 text-gray-500 transform -translate-x-1/2 -translate-y-1/2 text-center">
//           <p>No completed tasks</p>
//         </div>
//       )}
//       <div className="max-h-48 overflow-y-auto">
//         <div>
//           <ul className="bg-blue-500 text-black">
//             {completedTasks.map((task) => (
//               <li
//                 key={task.id}
//                 className="flex items-center justify-between border-b border-gray-400 py-2 px-4"
//               >
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.date}</span>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleMoveToActive(task.id)}
//                   className="h-4 w-4 mr-16"
//                 />
//                 <IconButton
//                   onClick={() => handleDeleteTask(task.id)}
//                   aria-label="delete"
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="fixed bottom-48">
//         <button
//           disabled={completedTasks.length === 0}
//           className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </>
//   );
// };

// export default CompletedTasks;



// Completedtasks.tsx
// import React from "react";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// interface CompletedTasksProps {
//   completedTasks: Task[];
//   onDeleteTask: (taskId: number) => void;
//   handleMoveToActive: (taskId: number) => void;
// }

// const CompletedTasks: React.FC<CompletedTasksProps> = ({
//   completedTasks,
//   onDeleteTask,
//   handleMoveToActive,
// }) => {
//   const handleDeleteTask = (taskId: number) => {
//     onDeleteTask(taskId);
//   };

//   const handleDeleteAllTasks = () => {
//     completedTasks.forEach((task) => onDeleteTask(task.id));
//   };

//   return (
//     <>
//       {completedTasks.length === 0 && (
//         <div className="absolute top-44 left-1/2 text-gray-500 transform -translate-x-1/2 -translate-y-1/2 text-center">
//           <p>No completed tasks</p>
//         </div>
//       )}
//       <div className="max-h-48 overflow-y-auto">
//         <div>
//           <ul className="bg-blue-500 text-black">
//             {completedTasks.map((task) => (
//               <li
//                 key={task.id}
//                 className="flex items-center justify-between border-b border-gray-400 py-2 px-4"
//               >
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.date}</span>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleMoveToActive(task.id)}
//                   className="h-4 w-4 mr-16"
//                 />
//                 <IconButton
//                   onClick={() => handleDeleteTask(task.id)}
//                   aria-label="delete"
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="fixed bottom-48">
//         <button
//           disabled={completedTasks.length === 0}
//           className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </>
//   );
// };

// export default CompletedTasks;

// import React from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface CompletedTasksProps {
//   completedTasks: Task[];
//   onDeleteTask: (taskId: number) => void;
//   handleMoveToActive: (taskId: number) => void;
// }

// const CompletedTasks: React.FC<CompletedTasksProps> = ({
//   completedTasks,
//   onDeleteTask,
//   handleMoveToActive,
// }) => {
//   return (
//     <TabPanel value={2}>
//       <div className="w-full font-semibold text-sm relative">
//         <div className="max-h-48 overflow-y-auto">
//           <div>
//             <ul className="bg-blue-500 text-black">
//               {completedTasks.map((task) => (
//                 <li
//                   key={task.id}
//                   className="flex items-center justify-between border-b border-gray-400 py-2 px-4"
//                 >
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.date}</span>
//                   <IconButton
//                     onClick={() => handleMoveToActive(task.id)}
//                     aria-label="move-to-active"
//                   >
//                     Move to Active
//                   </IconButton>
//                   <IconButton
//                     onClick={() => onDeleteTask(task.id)}
//                     aria-label="delete"
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </TabPanel>
//   );
// };

// export default CompletedTasks;

// Completedtasks.tsx
// import React from "react";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// interface CompletedTasksProps {
//   completedTasks: Task[];
//   onDeleteTask: (taskId: number) => void;
//   handleMoveToActive: (taskId: number) => void;
// }

// const CompletedTasks: React.FC<CompletedTasksProps> = ({
//   completedTasks,
//   onDeleteTask,
//   handleMoveToActive,
// }) => {
//   const handleDeleteTask = (taskId: number) => {
//     onDeleteTask(taskId);
//   };

//   const handleDeleteAllTasks = () => {
//     completedTasks.forEach((task) => onDeleteTask(task.id));
//   };

//   return (
//     <>
//       {completedTasks.length === 0 && (
//         <div className="absolute top-44 left-1/2 text-gray-500 transform -translate-x-1/2 -translate-y-1/2 text-center">
//           <p>No completed tasks</p>
//         </div>
//       )}
//       <div className="max-h-48 overflow-y-auto">
//         <div>
//           <ul className="bg-blue-500 text-black">
//             {completedTasks.map((task) => (
//               <li
//                 key={task.id}
//                 className="flex items-center justify-between border-b border-gray-400 py-2 px-4"
//               >
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.date}</span>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleMoveToActive(task.id)}
//                   className="h-4 w-4 mr-16"
//                 />
//                 <IconButton
//                   onClick={() => handleDeleteTask(task.id)}
//                   aria-label="delete"
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="fixed bottom-48">
//         <button
//           disabled={completedTasks.length === 0}
//           className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </>
//   );
// };

// export default CompletedTasks;




// CompletedTasks.tsx
// CompletedTasks.tsx
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
  onMoveToActive: (taskId: number) => void; // Add onMoveToActive prop
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
        <button
          disabled={completedTasks.length === 0}
          className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
          onClick={handleDeleteAllTasks}
        >
          Delete All
        </button>
      </div>
    </>
  );
};

export default CompletedTasks;

