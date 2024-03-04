// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { useTheme } from '@mui/system';
// import clsx from 'clsx';

// interface Task {
//   id: number;
//   content: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const isDarkMode = useTheme().palette.mode === 'dark';

//   const handleAddTask = () => {
//     if (inputValue.trim() !== "") {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(tasks.map(task =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   return (
//     <TabPanel className="w-full font-sans text-sm" value={1}>
//       <div className="flex items-center mb-4"> {/* Input Field */}
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           className={clsx(
//             isDarkMode ? 'dark' : '',
//             'w-full sm:w-80 text-black font-sans font-normal leading-5 px-3 py-2 rounded-lg bg-white outline-none'
//           )}
//           aria-label="Demo input"
//           placeholder="Type something…"
//         />
//         <button
//           className={clsx(
//             'px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400'
//           )}
//           onClick={handleAddTask}
//         >
//           Add
//         </button>
//       </div>
//       <ul className="bg-black text-white">
//         {tasks.map((task) => (
//           <li key={task.id} className="flex items-center justify-between">
//             <span className="flex-grow">{task.content}</span>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => handleCheckboxChange(task.id)}
//               className="h-4 w-4 mr-16" // Adjust checkbox height and width
//             />
//             <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </TabPanel>
//   );
// }

// export default Activetasks;

// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { useTheme } from "@mui/system";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const isDarkMode = useTheme().palette.mode === "dark";

//   const handleAddTask = () => {
//     if (inputValue.trim() !== "") {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     setTasks([]);
//   };

//   return (
//     <TabPanel className="w-full font-sans text-sm" value={1}>
//       <div className="flex items-center mb-4"> {/* Input Field */}
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           className={clsx(
//             isDarkMode ? "dark" : "",
//             "w-full sm:w-80 text-black font-sans font-normal leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//           )}
//           aria-label="Demo input"
//           placeholder="Type something…"
//         />
//         <button
//           className={clsx(
//             "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//           )}
//           onClick={handleAddTask}
//         >
//           Add
//         </button>
//         <button
//           className={clsx(
//             "px-3 py-2 bg-red-500 text-white rounded-r-lg hover:bg-red-400"
//           )}
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//       <ul className="bg-black text-white">
//         {tasks.map((task) => (
//           <li key={task.id} className="flex items-center justify-between">
//             <span className="flex-grow">{task.content}</span>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => handleCheckboxChange(task.id)}
//               className="h-4 w-4 mr-16" // Adjust checkbox height and width
//             />
//             <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </TabPanel>
//   );
// }

// export default Activetasks;

// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { useTheme } from "@mui/system";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const isDarkMode = useTheme().palette.mode === "dark";

//   const handleAddTask = () => {
//     if (inputValue.trim() !== "") {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     setTasks([]);
//   };

//   return (
//     <div className="w-full font-sans text-sm">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4"> {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               isDarkMode ? "dark" : "",
//               "w-full sm:w-80 text-black font-sans font-normal leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Type something…"
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         <ul className="bg-black text-white">
//           {tasks.map((task) => (
//             <li key={task.id} className="flex items-center justify-between">
//               <span className="flex-grow">{task.content}</span>
//               <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange={() => handleCheckboxChange(task.id)}
//                 className="h-4 w-4 mr-16" // Adjust checkbox height and width
//               />
//               <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </TabPanel>
//       <div className="flex justify-center">
//         <button
//           className={clsx(
//             "px-3 py-2 mt-56 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           )}
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Activetasks;

// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { useTheme } from "@mui/system";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const isDarkMode = useTheme().palette.mode === "dark";

//   const handleAddTask = () => {
//     if (inputValue.trim() !== "") {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     setTasks([]);
//   };

//   return (
//     <div className="w-full font-sans text-sm">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4"> {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               isDarkMode ? "dark" : "",
//               "w-full sm:w-80 text-black font-sans font-normal leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Type something…"
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         <div className="max-h-48 overflow-y-auto"> {/* Scrollable container */}
//           <ul className="bg-black text-white">
//             {tasks.map((task) => (
//               <li key={task.id} className="flex items-center justify-between">
//                 <span className="flex-grow">{task.content}</span>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleCheckboxChange(task.id)}
//                   className="h-4 w-4 mr-16" // Adjust checkbox height and width
//                 />
//                 <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </TabPanel>
//       <div className="flex justify-center">
//         <button
//           className={clsx(
//             "px-3 py-2 mt-56 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           )}
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Activetasks;

// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { useTheme } from "@mui/system";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const isDarkMode = useTheme().palette.mode === "dark";

//   const handleAddTask = () => {
//     if (inputValue.trim() !== "") {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     setTasks([]);
//   };

//   return (
//     <div className="w-full font-sans text-sm">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4"> {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold font-normal leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         <div className="max-h-48 overflow-y-auto"> {/* Scrollable container */}
//           <ul className="bg-blue-500 text-black">
//             {tasks.map((task) => (
//               <li key={task.id} className="flex items-center justify-between">
//                 <span className="flex-grow">{task.content}</span>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleCheckboxChange(task.id)}
//                   className="h-4 w-4 mr-16" // Adjust checkbox height and width
//                 />
//                 <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </TabPanel>
//       <div className="flex justify-center mt-56">
//         <button
//           className={clsx(
//             "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           )}
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Activetasks;

// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { useTheme } from "@mui/system";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   gender: string; // New property for storing gender
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedGender, setSelectedGender] = useState<string>(""); // State for selected gender
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const isDarkMode = useTheme().palette.mode === "dark";

//   const handleAddTask = () => {
//     if (inputValue.trim() !== "") {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         gender: selectedGender, // Assign selected gender to the task
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedGender(""); // Reset selected gender after adding task
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     setTasks([]);
//   };

//   return (
//     <div className="w-full font-sans text-sm">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4"> {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold font-normal leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className={clsx(
//               "text-black font-semibold font-normal leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         <div className="max-h-48 overflow-y-auto"> {/* Scrollable container */}
//           <ul className="bg-blue-500 text-black">
//             {tasks.map((task) => (
//               <li key={task.id} className="flex items-center justify-between">
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.gender}</span> {/* Display selected gender */}
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleCheckboxChange(task.id)}
//                   className="h-4 w-4 mr-16" // Adjust checkbox height and width
//                 />
//                 <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </TabPanel>
//       <div className="flex justify-center mt-56">
//         <button
//           className={clsx(
//             "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           )}
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Activetasks;

// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { useTheme } from "@mui/system";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   gender: string;
//   completed: boolean;
// }

// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { useTheme } from "@mui/system";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   gender: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedGender, setSelectedGender] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showWarning, setShowWarning] = useState<boolean>(false); // State for showing warning message
//   const isDarkMode = useTheme().palette.mode === "dark";

//   const handleAddTask = () => {
//     if (inputValue.trim() !== "" && selectedGender !== "") {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         gender: selectedGender,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedGender("");
//       setShowWarning(false); // Reset warning message state
//     } else {
//       setShowWarning(true); // Show warning message if gender is not selected
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     setTasks([]);
//   };

//   return (
//     <div className="w-full font-sans text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4"> {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold font-normal leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className={clsx(
//               "text-black font-semibold font-normal leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">Please select a gender before adding a task.</p>
//               <button onClick={() => setShowWarning(false)} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">OK</button>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto"> {/* Scrollable container */}
//           <ul className="bg-blue-500 text-black">
//             {tasks.map((task) => (
//               <li key={task.id} className="flex items-center justify-between">
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.gender}</span> {/* Display selected gender */}
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleCheckboxChange(task.id)}
//                   className="h-4 w-4 mr-16" // Adjust checkbox height and width
//                 />
//                 <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </TabPanel>
//       <div className="flex justify-center mt-56">
//         <button
//           className={clsx(
//             "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           )}
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Activetasks;

// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { useTheme } from "@mui/system";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   gender: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedGender, setSelectedGender] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showGenderWarning, setShowGenderWarning] = useState<boolean>(false); // State for showing gender warning message
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false); // State for showing input warning message
//   const isDarkMode = useTheme().palette.mode === "dark";

//   const handleAddTask = () => {
//     if (inputValue.trim() !== "" && selectedGender !== "") {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         gender: selectedGender,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedGender("");
//       setShowGenderWarning(false); // Reset gender warning message state
//       setShowInputWarning(false); // Reset input warning message state
//     } else {
//       if (inputValue.trim() === "") {
//         setShowInputWarning(true); // Show input warning message if input is empty
//       }
//       if (selectedGender === "") {
//         setShowGenderWarning(true); // Show gender warning message if gender is not selected
//       }
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     setTasks([]);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           {" "}
//           {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input shadow"
//             placeholder="Enter the task..."
//           />
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showGenderWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a gender before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowGenderWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           {" "}
//           {/* Scrollable container */}
//           <ul className="bg-blue-500 text-black">
//             {tasks.map((task) => (
//               <li key={task.id} className="flex items-center justify-between">
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.gender}</span> {/* Display selected gender */}
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleCheckboxChange(task.id)}
//                   className="h-4 w-4 mr-16" // Adjust checkbox height and width
//                 />
//                 <button onClick={() => handleDeleteTask(task.id)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </TabPanel>
//       <div className="flex justify-center mt-56">
//         <button
//           className={clsx(
//             "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           )}
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Activetasks;




// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { useTheme } from "@mui/system";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   gender: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedGender, setSelectedGender] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showGenderWarning, setShowGenderWarning] = useState<boolean>(false); // State for showing gender warning message
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false); // State for showing input warning message
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false); // State for showing delete all confirmation message
//   const isDarkMode = useTheme().palette.mode === "dark";

//   const handleAddTask = () => {
//     if (inputValue.trim() !== "" && selectedGender !== "") {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         gender: selectedGender,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedGender("");
//       setShowGenderWarning(false); // Reset gender warning message state
//       setShowInputWarning(false); // Reset input warning message state
//     } else {
//       if (inputValue.trim() === "") {
//         setShowInputWarning(true); // Show input warning message if input is empty
//       }
//       if (selectedGender === "") {
//         setShowGenderWarning(true); // Show gender warning message if gender is not selected
//       }
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     setShowDeleteAllConfirmation(true);
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           {" "}
//           {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input shadow"
//             placeholder="Enter the task..."
//           />
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showGenderWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a gender before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowGenderWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           {" "}
//           {/* Scrollable container */}
//           <ul className="bg-blue-500 text-black">
//             {tasks.map((task) => (
//               <li key={task.id} className="flex items-center justify-between">
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.gender}</span> {/* Display selected gender */}
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleCheckboxChange(task.id)}
//                   className="h-4 w-4 mr-16" // Adjust checkbox height and width
//                 />
//                 <button onClick={() => handleDeleteTask(task.id)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </TabPanel>
//       <div className="flex justify-center mt-56">
//         <button
//           className={clsx(
//             "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           )}
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Activetasks;



// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { useTheme } from "@mui/system";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   gender: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedGender, setSelectedGender] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showGenderWarning, setShowGenderWarning] = useState<boolean>(false); // State for showing gender warning message
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false); // State for showing input warning message
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false); // State for showing delete all confirmation message
  

//   const handleAddTask = () => {
//     if (inputValue.trim() !== "" && selectedGender !== "") {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         gender: selectedGender,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedGender("");
//       setShowGenderWarning(false); // Reset gender warning message state
//       setShowInputWarning(false); // Reset input warning message state
//       if (tasks.length === 0) {
//         setShowDeleteAllConfirmation(true); // Show delete all confirmation message only if no tasks were present before adding this task
//       }
//     } else {
//       if (inputValue.trim() === "") {
//         setShowInputWarning(true); // Show input warning message if input is empty
//       }
//       if (selectedGender === "") {
//         setShowGenderWarning(true); // Show gender warning message if gender is not selected
//       }
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     setTasks([]);
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           {" "}
//           {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input shadow"
//             placeholder="Enter the task..."
//           />
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showGenderWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a gender before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowGenderWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           {" "}
//           {/* Scrollable container */}
//           <ul className="bg-blue-500 text-black">
//             {tasks.map((task) => (
//               <li key={task.id} className="flex items-center justify-between">
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.gender}</span> {/* Display selected gender */}
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleCheckboxChange(task.id)}
//                   className="h-4 w-4 mr-16" // Adjust checkbox height and width
//                 />
//                 <button onClick={() => handleDeleteTask(task.id)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </TabPanel>
//       <div className="flex justify-center mt-56">
//         <button
//           className={clsx(
//             "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           )}
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Activetasks;


// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { useTheme } from "@mui/system";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   gender: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedGender, setSelectedGender] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showGenderWarning, setShowGenderWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);


//   const handleAddTask = () => {
//     if (inputValue.trim() !== "" && selectedGender !== "") {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         gender: selectedGender,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedGender("");
//       setShowGenderWarning(false);
//       setShowInputWarning(false);
//       setTasksAdded(true);
//     } else {
//       if (inputValue.trim() === "") {
//         setShowInputWarning(true);
//       }
//       if (selectedGender === "") {
//         setShowGenderWarning(true);
//       }
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     if (tasksAdded) {
//       setShowDeleteAllConfirmation(true);
//     } else {
//       setTasks([]);
//     }
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           {" "}
//           {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input shadow"
//             placeholder="Enter the task..."
//           />
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showGenderWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a gender before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowGenderWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           {" "}
//           {/* Scrollable container */}
//           <ul className="bg-blue-500 text-black">
//             {tasks.map((task) => (
//               <li key={task.id} className="flex items-center justify-between">
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.gender}</span>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleCheckboxChange(task.id)}
//                   className="h-4 w-4 mr-16"
//                 />
//                 <button onClick={() => handleDeleteTask(task.id)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </TabPanel>
//       <div className="flex justify-center mt-56">
//         <button
//           className={clsx(
//             "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           )}
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Activetasks;



// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import { useTheme } from "@mui/system";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   gender: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedGender, setSelectedGender] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showGenderWarning, setShowGenderWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() !== "" && selectedGender !== "") {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         gender: selectedGender,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedGender("");
//       setShowGenderWarning(false);
//       setShowInputWarning(false);
//       setTasksAdded(true);
//     } else {
//       if (inputValue.trim() === "") {
//         setShowInputWarning(true);
//       }
//       if (selectedGender === "") {
//         setShowGenderWarning(true);
//         setShowInputWarning(false); // Hide the input warning if gender is selected
//       }
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     if (tasksAdded) {
//       setShowDeleteAllConfirmation(true);
//     } else {
//       setTasks([]);
//     }
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           {" "}
//           {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showGenderWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a gender before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowGenderWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           {" "}
//           {/* Scrollable container */}
//           <ul className="bg-blue-500 text-black">
//             {tasks.map((task) => (
//               <li key={task.id} className="flex items-center justify-between">
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.gender}</span>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleCheckboxChange(task.id)}
//                   className="h-4 w-4 mr-16"
//                 />
//                 <button onClick={() => handleDeleteTask(task.id)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </TabPanel>
//       <div className="flex justify-center mt-56">
//         <button
//           className={clsx(
//             "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           )}
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Activetasks;


// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   gender: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedGender, setSelectedGender] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showGenderWarning, setShowGenderWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowGenderWarning(false); // Hide gender warning
//     } else if (selectedGender === "") {
//       setShowGenderWarning(true);
//       setShowInputWarning(false); // Hide input warning
//     } else {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         gender: selectedGender,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedGender("");
//       setShowGenderWarning(false); // Hide gender warning
//       setShowInputWarning(false); // Hide input warning
//       setTasksAdded(true);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     if (tasksAdded) {
//       setShowDeleteAllConfirmation(true);
//     } else {
//       setTasks([]);
//     }
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           {" "}
//           {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showGenderWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a gender before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowGenderWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           {" "}
//           {/* Scrollable container */}
//           <ul className="bg-blue-500 text-black">
//             {tasks.map((task) => (
//               <li key={task.id} className="flex items-center justify-between">
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.gender}</span>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleCheckboxChange(task.id)}
//                   className="h-4 w-4 mr-16"
//                 />
//                 <button onClick={() => handleDeleteTask(task.id)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </TabPanel>
//       <div className="flex justify-center mt-56">
//         <button
//           className={clsx(
//             "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//           )}
//           onClick={handleDeleteAllTasks}
//         >
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Activetasks;


// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   gender: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedGender, setSelectedGender] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showGenderWarning, setShowGenderWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowGenderWarning(false); // Hide gender warning
//     } else if (selectedGender === "") {
//       setShowGenderWarning(true);
//       setShowInputWarning(false); // Hide input warning
//     } else {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         gender: selectedGender,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedGender("");
//       setShowGenderWarning(false); // Hide gender warning
//       setShowInputWarning(false); // Hide input warning
//       setTasksAdded(true);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     if (tasksAdded) {
//       setShowDeleteAllConfirmation(true);
//     } else {
//       setTasks([]);
//     }
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           {" "}
//           {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showGenderWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a gender before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowGenderWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           {" "}
//           {/* Scrollable container */}
//           <ul className="bg-blue-500 text-black">
//             {tasks.map((task) => (
//               <li key={task.id} className="flex items-center justify-between">
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.gender}</span>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleCheckboxChange(task.id)}
//                   className="h-4 w-4 mr-16"
//                 />
//                 <button onClick={() => handleDeleteTask(task.id)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </TabPanel>
//     </div>
//   );
// }

// export default Activetasks;






// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   gender: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedGender, setSelectedGender] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showGenderWarning, setShowGenderWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowGenderWarning(false); // Hide gender warning
//     } else if (selectedGender === "") {
//       setShowGenderWarning(true);
//       setShowInputWarning(false); // Hide input warning
//     } else {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         gender: selectedGender,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedGender("");
//       setShowGenderWarning(false); // Hide gender warning
//       setShowInputWarning(false); // Hide input warning
//       setTasksAdded(true);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     setShowDeleteAllConfirmation(true);
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           {" "}
//           {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showGenderWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a gender before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowGenderWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           {" "}
//           {/* Scrollable container */}
//           <ul className="bg-blue-500 text-black">
//             {tasks.map((task) => (
//               <li key={task.id} className="flex items-center justify-between">
//                 <div className="flex-grow">{task.content}</div>
//                 <span>{task.gender}</span>
//                 <input
//                   type="checkbox"
//                   checked={task.completed}
//                   onChange={() => handleCheckboxChange(task.id)}
//                   className="h-4 w-4 mr-16"
//                 />
//                 <button onClick={() => handleDeleteTask(task.id)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex justify-center mt-56">
//           <button
//             className={clsx(
//               "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//             )}
//             onClick={handleDeleteAllTasks}
//           >
//             Delete All
//           </button>
//         </div>
//       </TabPanel>
//     </div>
//   );
// }

// export default Activetasks;



// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   gender: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedGender, setSelectedGender] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showGenderWarning, setShowGenderWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowGenderWarning(false); // Hide gender warning
//     } else if (selectedGender === "") {
//       setShowGenderWarning(true);
//       setShowInputWarning(false); // Hide input warning
//     } else {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         gender: selectedGender,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedGender("");
//       setShowGenderWarning(false); // Hide gender warning
//       setShowInputWarning(false); // Hide input warning
//       setTasksAdded(true);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );

//     setTasks(updatedTasks);
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     setShowDeleteAllConfirmation(true);
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           {" "}
//           {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showGenderWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a gender before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowGenderWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div> {/* Fixed height and overflow */}
//             <ul className="bg-blue-500 text-black">
//               {tasks.map((task) => (
//                 <li key={task.id} className="flex items-center justify-between">
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.gender}</span>
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-16"
//                   />
//                   <button onClick={() => handleDeleteTask(task.id)}>
//                     Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className=" fixed bottom-52 ">
//           <button
//             className={clsx(
//               "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//             )}
//             onClick={handleDeleteAllTasks}
//           >
//             Delete All
//           </button>
//         </div>
//       </TabPanel>
//     </div>
//   );
// }

// export default Activetasks;



// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";

// interface Task {
//   id: number;
//   content: string;
//   gender: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedGender, setSelectedGender] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showGenderWarning, setShowGenderWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowGenderWarning(false); // Hide gender warning
//     } else if (selectedGender === "") {
//       setShowGenderWarning(true);
//       setShowInputWarning(false); // Hide input warning
//     } else {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         gender: selectedGender,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedGender("");
//       setShowGenderWarning(false); // Hide gender warning
//       setShowInputWarning(false); // Hide input warning
//       setTasksAdded(true);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );

//     setTasks(updatedTasks);
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     if (tasksAdded) {
//       setShowDeleteAllConfirmation(true);
//     } else {
//       setTasks([]);
//     }
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           {" "}
//           {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showGenderWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a gender before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowGenderWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div> {/* Fixed height and overflow */}
//             <ul className="bg-blue-500 text-black">
//               {tasks.map((task) => (
//                 <li key={task.id} className="flex items-center justify-between">
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.gender}</span>
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-16"
//                   />
//                   <button onClick={() => handleDeleteTask(task.id)}>
//                     Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         {tasksAdded && (
//           <div className=" fixed bottom-52 ">
//             <button
//               className={clsx(
//                 "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//               )}
//               onClick={handleDeleteAllTasks}
//             >
//               Delete All
//             </button>
//           </div>
//         )}
//       </TabPanel>
//     </div>
//   );
// }

// export default Activetasks;


// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   gender: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedGender, setSelectedGender] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showGenderWarning, setShowGenderWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowGenderWarning(false); // Hide gender warning
//     } else if (selectedGender === "") {
//       setShowGenderWarning(true);
//       setShowInputWarning(false); // Hide input warning
//     } else {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         gender: selectedGender,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedGender("");
//       setShowGenderWarning(false); // Hide gender warning
//       setShowInputWarning(false); // Hide input warning
//       setTasksAdded(true);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );

//     setTasks(updatedTasks);
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     if (tasksAdded) {
//       setShowDeleteAllConfirmation(true);
//     } else {
//       setTasks([]);
//     }
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           {" "}
//           {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showGenderWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a gender before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowGenderWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div> {/* Fixed height and overflow */}
//             <ul className="bg-blue-500 text-black">
//               {tasks.map((task) => (
//                 <li key={task.id} className="flex items-center justify-between">
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.gender}</span>
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-16"
//                   />
//                   <IconButton onClick={() => handleDeleteTask(task.id)} aria-label="delete">
//                     <DeleteIcon />
//                   </IconButton>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         {tasksAdded && (
//           <div className=" fixed bottom-52 ">
//             <button
//               className={clsx(
//                 "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//               )}
//               onClick={handleDeleteAllTasks}
//             >
//               Delete All
//             </button>
//           </div>
//         )}
//       </TabPanel>
//     </div>
//   );
// }

// export default Activetasks;




// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedDate, setSelectedDate] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showDateWarning, setShowDateWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowDateWarning(false); // Hide date warning
//     } else if (selectedDate === "") {
//       setShowDateWarning(true);
//       setShowInputWarning(false); // Hide input warning
//     } else {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         date: selectedDate,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedDate("");
//       setShowDateWarning(false); // Hide date warning
//       setShowInputWarning(false); // Hide input warning
//       setTasksAdded(true);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );

//     setTasks(updatedTasks);
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     if (tasksAdded) {
//       setShowDeleteAllConfirmation(true);
//     } else {
//       setTasks([]);
//     }
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showDateWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">Please choose a date before adding a task.</p>
//               <button
//                 onClick={() => setShowDateWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">Please enter a task before adding.</p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">Are you sure you want to delete all tasks?</p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div> {/* Fixed height and overflow */}
//             <ul className="bg-blue-500 text-black">
//               {tasks.map((task) => (
//                 <li key={task.id} className="flex items-center justify-between">
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.date}</span>
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-14"
//                   />
//                   <IconButton onClick={() => handleDeleteTask(task.id)} aria-label="delete">
//                     <DeleteIcon />
//                   </IconButton>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         {tasksAdded && (
//           <div className="fixed bottom-52">
//             <button
//               className={clsx(
//                 "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//               )}
//               onClick={handleDeleteAllTasks}
//             >
//               Delete All
//             </button>
//           </div>
//         )}
//       </TabPanel>
//     </div>
//   );
// }

// export default Activetasks;



// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   date: string; // Changed from 'gender' to 'date'
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedDate, setSelectedDate] = useState<string>(""); // Changed from 'selectedGender' to 'selectedDate'
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showDateWarning, setShowDateWarning] = useState<boolean>(false); // Changed from 'showGenderWarning' to 'showDateWarning'
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowDateWarning(false); // Hide date warning
//     } else if (selectedDate === "") {
//       setShowDateWarning(true);
//       setShowInputWarning(false); // Hide input warning
//     } else {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         date: selectedDate, // Changed from 'gender' to 'date'
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedDate("");
//       setShowDateWarning(false); // Hide date warning
//       setShowInputWarning(false); // Hide input warning
//       setTasksAdded(true);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );

//     setTasks(updatedTasks);
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteAllTasks = () => {
//     if (tasksAdded) {
//       setShowDeleteAllConfirmation(true);
//     } else {
//       setTasks([]);
//     }
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           {" "}
//           {/* Input Field */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <input
//             type="date" // Changed from 'select' to 'date'
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showDateWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a date before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowDateWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div> {/* Fixed height and overflow */}
//             <ul className="bg-blue-500 text-black">
//               {tasks.map((task) => (
//                 <li key={task.id} className="flex items-center justify-between">
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.date}</span> {/* Changed from 'gender' to 'date' */}
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-16"
//                   />
//                   <IconButton onClick={() => handleDeleteTask(task.id)} aria-label="delete">
//                     <DeleteIcon />
//                   </IconButton>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="fixed bottom-52">
//           <button
//             disabled={!tasksAdded} // Disable the button if tasks have not been added
//             className={clsx(
//               "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//             )}
//             onClick={handleDeleteAllTasks}
//           >
//             Delete All
//           </button>
//         </div>
//       </TabPanel>
//     </div>
//   );
// }

// export default Activetasks;



// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedDate, setSelectedDate] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showDateWarning, setShowDateWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowDateWarning(false);
//     } else if (selectedDate === "") {
//       setShowDateWarning(true);
//       setShowInputWarning(false);
//     } else {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         date: selectedDate,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedDate("");
//       setShowDateWarning(false);
//       setShowInputWarning(false);
//       setTasksAdded(true);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );

//     setTasks(updatedTasks);
//   };

//   const handleDeleteTask = (taskId: number) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//     if (updatedTasks.length === 0) {
//       setTasksAdded(false); // No tasks left, disable the button
//     }
//   };

//   const handleDeleteAllTasks = () => {
//     if (tasksAdded) {
//       setShowDeleteAllConfirmation(true);
//     } else {
//       setTasks([]);
//     }
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showDateWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a date before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowDateWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div>
//             <ul className="bg-blue-500 text-black">
//               {tasks.map((task) => (
//                 <li key={task.id} className="flex items-center justify-between">
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.date}</span>
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-16"
//                   />
//                   <IconButton onClick={() => handleDeleteTask(task.id)} aria-label="delete">
//                     <DeleteIcon />
//                   </IconButton>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="fixed bottom-52">
//           <button
//             disabled={!tasksAdded} // Disable the button if no tasks added
//             className={clsx(
//               "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//             )}
//             onClick={handleDeleteAllTasks}
//           >
//             Delete All
//           </button>
//         </div>
//       </TabPanel>
//     </div>
//   );
// }

// export default Activetasks;



// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedDate, setSelectedDate] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showDateWarning, setShowDateWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowDateWarning(false);
//     } else if (selectedDate === "") {
//       setShowDateWarning(true);
//       setShowInputWarning(false);
//     } else {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         date: selectedDate,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedDate("");
//       setShowDateWarning(false);
//       setShowInputWarning(false);
//       setTasksAdded(true);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );

//     setTasks(updatedTasks);
//   };

//   const handleDeleteTask = (taskId: number) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//     if (updatedTasks.length === 0) {
//       setTasksAdded(false); // No tasks left, disable the button
//     }
//   };

//   const handleDeleteAllTasks = () => {
//     if (tasksAdded) {
//       setShowDeleteAllConfirmation(true);
//     } else {
//       setTasks([]);
//     }
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showDateWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a date before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowDateWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div>
//             <ul className="bg-blue-500 text-black">
//               {tasks.map((task) => (
//                 <li key={task.id} className="flex items-center justify-between border-b border-gray-400 py-2 px-4">
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.date}</span>
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-16"
//                   />
//                   <IconButton onClick={() => handleDeleteTask(task.id)} aria-label="delete">
//                     <DeleteIcon />
//                   </IconButton>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="fixed bottom-48">
//           <button
//             disabled={!tasksAdded} // Disable the button if no tasks added
//             className={clsx(
//               "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//             )}
//             onClick={handleDeleteAllTasks}
//           >
//             Delete All
//           </button>
//         </div>
//       </TabPanel>
//     </div>
//   );
// }

// export default Activetasks;









// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function Activetasks() {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedDate, setSelectedDate] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showDateWarning, setShowDateWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowDateWarning(false);
//     } else if (selectedDate === "") {
//       setShowDateWarning(true);
//       setShowInputWarning(false);
//     } else {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         date: selectedDate,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedDate("");
//       setShowDateWarning(false);
//       setShowInputWarning(false);
//       setTasksAdded(true);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );

//     setTasks(updatedTasks);
//   };

//   const handleDeleteTask = (taskId: number) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//     if (updatedTasks.length === 0) {
//       setTasksAdded(false); // No tasks left, disable the button
//     }
//   };

//   const handleDeleteAllTasks = () => {
//     if (tasksAdded) {
//       setShowDeleteAllConfirmation(true);
//     } else {
//       setTasks([]);
//     }
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showDateWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a date before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowDateWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         {tasks.length === 0 && ( // Conditional rendering for displaying no tasks message
//           <div className="absolute top-44 left-1/2 text-gray-500 transform -translate-x-1/2 -translate-y-1/2 text-center">
//             <p>No active tasks</p>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div>
//             <ul className="bg-blue-500 text-black">
//               {tasks.map((task) => (
//                 <li key={task.id} className="flex items-center justify-between border-b border-black py-2 px-4">
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.date}</span>
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-16"
//                   />
//                   <IconButton onClick={() => handleDeleteTask(task.id)} aria-label="delete">
//                     <DeleteIcon />
//                   </IconButton>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="fixed bottom-48">
//           <button
//             disabled={!tasksAdded} // Disable the button if no tasks added
//             className={clsx(
//               "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//             )}
//             onClick={handleDeleteAllTasks}
//           >
//             Delete All
//           </button>
//         </div>
//       </TabPanel>
//     </div>
//   );
// }

// export default Activetasks;

// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// interface Props {
//   onCompletedTask: (task: Task) => void;
// }

// function Activetasks({ onCompletedTask }: Props) {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedDate, setSelectedDate] = useState<string>("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showDateWarning, setShowDateWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);
//   const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState<boolean>(false);
//   const [tasksAdded, setTasksAdded] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowDateWarning(false);
//     } else if (selectedDate === "") {
//       setShowDateWarning(true);
//       setShowInputWarning(false);
//     } else {
//       const newTask: Task = {
//         id: tasks.length + 1,
//         content: inputValue.trim(),
//         date: selectedDate,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setInputValue("");
//       setSelectedDate("");
//       setShowDateWarning(false);
//       setShowInputWarning(false);
//       setTasksAdded(true);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );

//     const completedTask = updatedTasks.find((task) => task.id === taskId);
//     if (completedTask) {
//       onCompletedTask(completedTask);
//     }

//     setTasks(updatedTasks.filter((task) => task.id !== taskId));
//   };

//   const handleDeleteTask = (taskId: number) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//     if (updatedTasks.length === 0) {
//       setTasksAdded(false); // No tasks left, disable the button
//     }
//   };

//   const handleDeleteAllTasks = () => {
//     if (tasksAdded) {
//       setShowDeleteAllConfirmation(true);
//     } else {
//       setTasks([]);
//     }
//   };

//   const confirmDeleteAll = () => {
//     setTasks([]);
//     setShowDeleteAllConfirmation(false);
//     setTasksAdded(false);
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showDateWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a date before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowDateWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showDeleteAllConfirmation && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Are you sure you want to delete all tasks?
//               </p>
//               <div className="flex justify-center">
//                 <button
//                   onClick={confirmDeleteAll}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 mr-2"
//                 >
//                   Yes
//                 </button>
//                 <button
//                   onClick={() => setShowDeleteAllConfirmation(false)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         {tasks.length === 0 && ( // Conditional rendering for displaying no tasks message
//           <div className="absolute top-44 left-1/2 text-gray-500 transform -translate-x-1/2 -translate-y-1/2 text-center">
//             <p>No active tasks</p>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div>
//             <ul className="bg-blue-500 text-black">
//               {tasks.map((task) => (
//                 <li key={task.id} className="flex items-center justify-between border-b border-gray-400 py-2 px-4">
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.date}</span>
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-16"
//                   />
//                   <IconButton onClick={() => handleDeleteTask(task.id)} aria-label="delete">
//                     <DeleteIcon />
//                   </IconButton>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="fixed bottom-48">
//           <button
//             disabled={!tasksAdded} // Disable the button if no tasks added
//             className={clsx(
//               "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//             )}
//             onClick={handleDeleteAllTasks}
//           >
//             Delete All
//           </button>
//         </div>
//       </TabPanel>
//     </div>
//   );
// }

// export default Activetasks;
// ActiveTasks.tsx
// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// interface ActiveTasksProps {
//   activeTasks: Task[];
//   onCompletedTask: (task: Task) => void;
//   handleMoveToActive: (taskId: number) => void;
// }

// const ActiveTasks: React.FC<ActiveTasksProps> = ({
//   activeTasks,
//   onCompletedTask,
//   handleMoveToActive,
// }) => {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedDate, setSelectedDate] = useState<string>("");
//   const [showDateWarning, setShowDateWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowDateWarning(false);
//     } else if (selectedDate === "") {
//       setShowDateWarning(true);
//       setShowInputWarning(false);
//     } else {
//       const newTask: Task = {
//         id: activeTasks.length + 1,
//         content: inputValue.trim(),
//         date: selectedDate,
//         completed: false,
//       };
//       onCompletedTask(newTask);
//       setInputValue("");
//       setSelectedDate("");
//       setShowDateWarning(false);
//       setShowInputWarning(false);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = activeTasks.map((task) =>
//       task.id === taskId ? { ...task, completed: true } : task
//     );

//     const completedTask = updatedTasks.find((task) => task.id === taskId);
//     if (completedTask) {
//       onCompletedTask(completedTask);
//     }
//   };

//   const handleDeleteTask = (taskId: number) => {
//     // Implement delete task logic here
//   };

//   return (
//     <div className="w-full font-semibold text-sm relative">
//       <TabPanel value={1}>
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showDateWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a date before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowDateWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {activeTasks.length === 0 && (
//           <div className="absolute top-44 left-1/2 text-gray-500 transform -translate-x-1/2 -translate-y-1/2 text-center">
//             <p>No active tasks</p>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div>
//             <ul className="bg-blue-500 text-black">
//               {activeTasks.map((task) => (
//                 <li
//                   key={task.id}
//                   className="flex items-center justify-between border-b border-gray-400 py-2 px-4"
//                 >
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.date}</span>
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-16"
//                   />
//                   <IconButton
//                     onClick={() => handleDeleteTask(task.id)}
//                     aria-label="delete"
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </TabPanel>
//     </div>
//   );
// };

// export default ActiveTasks;

// Activetasks.tsx
// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// interface ActiveTasksProps {
//   activeTasks: Task[];
//   onCompletedTask: (task: Task) => void;
//   handleMoveToActive: (taskId: number) => void;
// }

// const ActiveTasks: React.FC<ActiveTasksProps> = ({
//   activeTasks,
//   onCompletedTask,
//   handleMoveToActive,
// }) => {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedDate, setSelectedDate] = useState<string>("");
//   const [showDateWarning, setShowDateWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowDateWarning(false);
//     } else if (selectedDate === "") {
//       setShowDateWarning(true);
//       setShowInputWarning(false);
//     } else {
//       const newTask: Task = {
//         id: activeTasks.length + 1,
//         content: inputValue.trim(),
//         date: selectedDate,
//         completed: false,
//       };
//       onCompletedTask(newTask);
//       setInputValue("");
//       setSelectedDate("");
//       setShowDateWarning(false);
//       setShowInputWarning(false);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = activeTasks.map((task) =>
//       task.id === taskId ? { ...task, completed: true } : task
//     );

//     const completedTask = updatedTasks.find((task) => task.id === taskId);
//     if (completedTask) {
//       onCompletedTask(completedTask);
//     }
//   };

//   const handleDeleteTask = (taskId: number) => {
//     // Implement delete task logic here
//   };

//   return (
//     <TabPanel value={1}>
//       <div className="w-full font-semibold text-sm relative">
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showDateWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a date before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowDateWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {activeTasks.length === 0 && (
//           <div className="absolute top-44 left-1/2 text-gray-500 transform -translate-x-1/2 -translate-y-1/2 text-center">
//             <p>No active tasks</p>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div>
//             <ul className="bg-blue-500 text-black">
//               {activeTasks.map((task) => (
//                 <li
//                   key={task.id}
//                   className="flex items-center justify-between border-b border-gray-400 py-2 px-4"
//                 >
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.date}</span>
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-16"
//                   />
//                   <IconButton
//                     onClick={() => handleDeleteTask(task.id)}
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

// export default ActiveTasks;



// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// interface ActiveTasksProps {
//   activeTasks: Task[];
//   onCompletedTask: (task: Task) => void;
//   handleMoveToActive: (taskId: number) => void;
//   onDeleteAllTasks: () => void; // Add onDeleteAllTasks prop
// }

// const ActiveTasks: React.FC<ActiveTasksProps> = ({
//   activeTasks,
//   onCompletedTask,
//   handleMoveToActive,
//   onDeleteAllTasks, // Receive onDeleteAllTasks prop
// }) => {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedDate, setSelectedDate] = useState<string>("");
//   const [showDateWarning, setShowDateWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowDateWarning(false);
//     } else if (selectedDate === "") {
//       setShowDateWarning(true);
//       setShowInputWarning(false);
//     } else {
//       const newTask: Task = {
//         id: activeTasks.length + 1,
//         content: inputValue.trim(),
//         date: selectedDate,
//         completed: false,
//       };
//       onCompletedTask(newTask);
//       setInputValue("");
//       setSelectedDate("");
//       setShowDateWarning(false);
//       setShowInputWarning(false);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = activeTasks.map((task) =>
//       task.id === taskId ? { ...task, completed: true } : task
//     );

//     const completedTask = updatedTasks.find((task) => task.id === taskId);
//     if (completedTask) {
//       onCompletedTask(completedTask);
//     }
//   };

//   const handleDeleteTask = (taskId: number) => {
//     // Implement delete task logic here
//   };

//   return (
//     <TabPanel value={1}>
//       <div className="w-full font-semibold text-sm relative">
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showDateWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a date before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowDateWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {activeTasks.length === 0 && (
//           <div className="absolute top-44 left-1/2 text-gray-500 transform -translate-x-1/2 -translate-y-1/2 text-center">
//             <p>No active tasks</p>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div>
//             <ul className="bg-blue-500 text-black">
//               {activeTasks.map((task) => (
//                 <li
//                   key={task.id}
//                   className="flex items-center justify-between border-b border-gray-400 py-2 px-4"
//                 >
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.date}</span>
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-16"
//                   />
//                   <IconButton
//                     onClick={() => handleDeleteTask(task.id)}
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
//       <button
//         onClick={onDeleteAllTasks} // Call onDeleteAllTasks function when clicked
//         className="absolute bottom-4 right-4 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-400"
//       >
//         Delete All
//       </button>
//     </TabPanel>
//   );
// };

// export default ActiveTasks;



// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface ActiveTasksProps {
//   activeTasks: Task[];
//   onCompletedTask: (task: Task) => void;
//   handleMoveToActive: (taskId: number) => void;
//   handleDeleteTask: (taskId: number) => void;
// }

// const ActiveTasks: React.FC<ActiveTasksProps> = ({
//   activeTasks,
//   onCompletedTask,
//   handleMoveToActive,
//   handleDeleteTask,
// }) => {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedDate, setSelectedDate] = useState<string>("");
//   const [showDateWarning, setShowDateWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowDateWarning(false);
//     } else if (selectedDate === "") {
//       setShowDateWarning(true);
//       setShowInputWarning(false);
//     } else {
//       const newTask: Task = {
//         id: activeTasks.length + 1,
//         content: inputValue.trim(),
//         date: selectedDate,
//         completed: false,
//       };
//       onCompletedTask(newTask);
//       setInputValue("");
//       setSelectedDate("");
//       setShowDateWarning(false);
//       setShowInputWarning(false);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = activeTasks.map((task) =>
//       task.id === taskId ? { ...task, completed: true } : task
//     );

//     const completedTask = updatedTasks.find((task) => task.id === taskId);
//     if (completedTask) {
//       onCompletedTask(completedTask);
//     }
//   };

//   return (
//     <TabPanel value={1}>
//       <div className="w-full font-semibold text-sm relative">
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//           <button
//             className={clsx(
//               "px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//             )}
//             onClick={() => handleDeleteTask(-1)} // This will delete all tasks
//           >
//             Delete All
//           </button>
//         </div>
//         {showDateWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a date before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowDateWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {activeTasks.length === 0 && (
//           <div className="absolute top-44 left-1/2 text-gray-500 transform -translate-x-1/2 -translate-y-1/2 text-center">
//             <p>No active tasks</p>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div>
//             <ul className="bg-blue-500 text-black">
//               {activeTasks.map((task) => (
//                 <li
//                   key={task.id}
//                   className="flex items-center justify-between border-b border-gray-400 py-2 px-4"
//                 >
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.date}</span>
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-16"
//                   />
//                   <IconButton
//                     onClick={() => handleDeleteTask(task.id)}
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

// export default ActiveTasks;

// Activetasks.tsx
// import React, { useState } from "react";
// import { TabPanel } from "@mui/base/TabPanel";
// import clsx from "clsx";
// import { IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// interface ActiveTasksProps {
//   activeTasks: Task[];
//   onCompletedTask: (task: Task) => void;
//   handleMoveToActive: (taskId: number) => void;
// }

// const ActiveTasks: React.FC<ActiveTasksProps> = ({
//   activeTasks,
//   onCompletedTask,
//   handleMoveToActive,
// }) => {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [selectedDate, setSelectedDate] = useState<string>("");
//   const [showDateWarning, setShowDateWarning] = useState<boolean>(false);
//   const [showInputWarning, setShowInputWarning] = useState<boolean>(false);

//   const handleAddTask = () => {
//     if (inputValue.trim() === "") {
//       setShowInputWarning(true);
//       setShowDateWarning(false);
//     } else if (selectedDate === "") {
//       setShowDateWarning(true);
//       setShowInputWarning(false);
//     } else {
//       const newTask: Task = {
//         id: activeTasks.length + 1,
//         content: inputValue.trim(),
//         date: selectedDate,
//         completed: false,
//       };
//       onCompletedTask(newTask);
//       setInputValue("");
//       setSelectedDate("");
//       setShowDateWarning(false);
//       setShowInputWarning(false);
//     }
//   };

//   const handleCheckboxChange = (taskId: number) => {
//     const updatedTasks = activeTasks.map((task) =>
//       task.id === taskId ? { ...task, completed: true } : task
//     );

//     const completedTask = updatedTasks.find((task) => task.id === taskId);
//     if (completedTask) {
//       onCompletedTask(completedTask);
//     }
//   };

//   const handleDeleteTask = (taskId: number) => {
//     // Implement delete task logic here
//   };

//   return (
//     <TabPanel value={1}>
//       <div className="w-full font-semibold text-sm relative">
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className={clsx(
//               "w-full sm:w-80 text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//             aria-label="Demo input"
//             placeholder="Enter the task..."
//           />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className={clsx(
//               "text-black font-semibold leading-5 px-3 py-2 rounded-lg bg-white outline-none"
//             )}
//           />
//           <button
//             className={clsx(
//               "px-3 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
//             )}
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//         </div>
//         {showDateWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please select a date before adding a task.
//               </p>
//               <button
//                 onClick={() => setShowDateWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {showInputWarning && (
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
//             <div className="bg-white p-4 rounded-md shadow-md">
//               <p className="text-red-500 mb-2">
//                 Please enter a task before adding.
//               </p>
//               <button
//                 onClick={() => setShowInputWarning(false)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}
//         {activeTasks.length === 0 && (
//           <div className="absolute top-44 left-1/2 text-gray-500 transform -translate-x-1/2 -translate-y-1/2 text-center">
//             <p>No active tasks</p>
//           </div>
//         )}
//         <div className="max-h-48 overflow-y-auto">
//           <div>
//             <ul className="bg-blue-500 text-black">
//               {activeTasks.map((task) => (
//                 <li
//                   key={task.id}
//                   className="flex items-center justify-between border-b border-gray-400 py-2 px-4"
//                 >
//                   <div className="flex-grow">{task.content}</div>
//                   <span>{task.date}</span>
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => handleCheckboxChange(task.id)}
//                     className="h-4 w-4 mr-16"
//                   />
//                   <IconButton
//                     onClick={() => handleDeleteTask(task.id)}
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

// export default ActiveTasks;



// ActiveTasks.tsx
// ActiveTasks.tsx
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
    onMoveToCompleted(taskId); // Invoke onMoveToCompleted with taskId
  };

  const handleDeleteTask = (taskId: number) => {
    onDeleteTask(taskId);
  };
  const handleDeleteAllTasks = () => {
  activeTasks.forEach((task) => {
      onDeleteTask(task.id);
    });
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

