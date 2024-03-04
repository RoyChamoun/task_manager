// import React from "react";
// import { Tabs } from "@mui/base/Tabs";
// import { TabsList } from "@mui/base/TabsList";
// import Activetasks from "./tabs/Activetasks"; 
// import Completedtasks from "./tabs/Completedtasks";
// import { Tab } from "@mui/base/Tab";
// import './App.css'

// function App() {
//   return (
//     <div className="bg-cover bg-center h-screen backg">
//     <div className="container  mx-auto  bg-black bg-opacity-20 rounded-xl h-96 w-3/6 shadow-md" >
//     <Tabs defaultValue={1}>
//       <TabsList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
//         <Tab
//           slotProps={{
//             root: ({ selected, disabled }) => ({
//               className: `font-sans ${
//                 selected
//                   ? "text-blue-500 bg-white"
//                   : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//               } ${
//                 disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//               } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//             }),
//           }}
//           value={1}
//         >
//           Active Tasks
//         </Tab>
//         <Tab
//           slotProps={{
//             root: ({ selected, disabled }) => ({
//               className: `font-sans ${
//                 selected
//                   ? "text-blue-500 bg-white"
//                   : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//               } ${
//                 disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//               } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//             }),
//           }}
//           value={2}
//         >
//           Completed Tasks
//         </Tab>
//       </TabsList>
//       <Activetasks />
//       <Completedtasks />
//     </Tabs>
//     </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { Tabs } from "@mui/base/Tabs";
// import { TabsList } from "@mui/base/TabsList";
// import Activetasks from "./tabs/Activetasks"; 
// import Completedtasks from "./tabs/Completedtasks";
// import { Tab } from "@mui/base/Tab";
// import './App.css'

// function App() {
//   return (
//     <div className="bg-cover bg-center h-screen flex items-center justify-center backg">
//       <div className="container mx-auto bg-white p-4 rounded-xl h-96 w-3/6 shadow-md">
//         <Tabs defaultValue={1}>
//           <TabsList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={1}
//             >
//               Active Tasks
//             </Tab>
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={2}
//             >
//               Completed Tasks
//             </Tab>
//           </TabsList>
//           <Activetasks />
//           <Completedtasks />
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { Tabs } from "@mui/base/Tabs";
// import { TabsList } from "@mui/base/TabsList";
// import Activetasks from "./tabs/Activetasks"; 
// import Completedtasks from "./tabs/Completedtasks";
// import { Tab } from "@mui/base/Tab";
// import './App.css'

// // Define the Task interface
// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function App() {
//   const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

//   const handleCompletedTasks = (task: Task) => {
//     setCompletedTasks([...completedTasks, task]);
//   };

//   return (
//     <div className="bg-cover bg-center h-screen flex items-center justify-center backg">
//       <div className="container mx-auto bg-white p-4 rounded-xl h-96 w-3/6 shadow-md">
//         <Tabs defaultValue={1}>
//           <TabsList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={1}
//             >
//               Active Tasks
//             </Tab>
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={2}
//             >
//               Completed Tasks
//             </Tab>
//           </TabsList>
//           <Activetasks onCompletedTask={handleCompletedTasks} />
//           <Completedtasks completedTasks={completedTasks} />
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { Tabs } from "@mui/base/Tabs";
// import { TabsList } from "@mui/base/TabsList";
// import Activetasks from "./tabs/Activetasks"; 
// import Completedtasks from "./tabs/Completedtasks";
// import { Tab } from "@mui/base/Tab";
// import './App.css'

// // Define the Task interface
// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function App() {
//   const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

//   const handleCompletedTasks = (task: Task) => {
//     setCompletedTasks([...completedTasks, task]);
//   };

//   const handleDeleteCompletedTask = (taskId: number) => {
//     // Filter out the task with the given taskId
//     const updatedTasks = completedTasks.filter((task) => task.id !== taskId);
//     setCompletedTasks(updatedTasks);
//   };

//   return (
//     <div className="bg-cover bg-center h-screen flex items-center justify-center backg">
//       <div className="container mx-auto bg-white p-4 rounded-xl h-96 w-3/6 shadow-md">
//         <Tabs defaultValue={1}>
//           <TabsList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={1}
//             >
//               Active Tasks
//             </Tab>
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={2}
//             >
//               Completed Tasks
//             </Tab>
//           </TabsList>
//           <Activetasks onCompletedTask={handleCompletedTasks} />
//           <Completedtasks
//             completedTasks={completedTasks}
//             onDeleteTask={handleDeleteCompletedTask} // Pass the onDeleteTask function
//           />
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import { Tabs } from "@mui/base/Tabs";
// import { TabsList } from "@mui/base/TabsList";
// import Activetasks from "./tabs/Activetasks"; 
// import Completedtasks from "./tabs/Completedtasks";
// import { Tab } from "@mui/base/Tab";
// import './App.css'

// // Define the Task interface
// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function App() {
//   const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
//   const [tasksDeletedFromCompleted, setTasksDeletedFromCompleted] = useState<boolean>(false);

//   const handleCompletedTasks = (task: Task) => {
//     setCompletedTasks([...completedTasks, task]);
//   };

//   const handleDeleteTasksFromCompleted = () => {
//     setTasksDeletedFromCompleted(true);
//   };

//   return (
//     <div className="bg-cover bg-center h-screen flex items-center justify-center backg">
//       <div className="container mx-auto bg-white p-4 rounded-xl h-96 w-3/6 shadow-md">
//         <Tabs defaultValue={1}>
//           <TabsList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={1}
//             >
//               Active Tasks
//             </Tab>
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={2}
//             >
//               Completed Tasks
//             </Tab>
//           </TabsList>
//           <Activetasks
//             onCompletedTask={handleCompletedTasks}
//             tasksDeletedFromCompleted={tasksDeletedFromCompleted}
//           />
//           <Completedtasks
//             completedTasks={completedTasks}
//             onDeleteTasksFromCompleted={handleDeleteTasksFromCompleted}
//           />
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default App;



// App.tsx



// import React, { useState } from "react";
// import { Tabs, Tab, TabsList } from "@mui/base/Tabs";
// import ActiveTasks from "./tabs/Activetasks"; 
// import CompletedTasks from "./tabs/Completedtasks";
// import './App.css';

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function App() {
//   const [activeTasks, setActiveTasks] = useState<Task[]>([]);
//   const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

//   const handleCompletedTasks = (task: Task) => {
//     setCompletedTasks([...completedTasks, task]);
//   };

//   const handleDeleteTasksFromCompleted = (taskId: number) => {
//     setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
//   };

//   const handleMoveToActive = (taskId: number) => {
//     const taskToMove = completedTasks.find(task => task.id === taskId);
//     if (taskToMove) {
//       setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
//       setActiveTasks([...activeTasks, {...taskToMove, completed: false}]);
//     }
//   };

//   return (
//     <div className="bg-cover bg-center h-screen flex items-center justify-center backg">
//       <div className="container mx-auto bg-white p-4 rounded-xl h-96 w-3/6 shadow-md">
//         <Tabs defaultValue={1}>
//           <TabsList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={1}
//             >
//               Active Tasks
//             </Tab>
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={2}
//             >
//               Completed Tasks
//             </Tab>
//           </TabsList>
//           <ActiveTasks
//             activeTasks={activeTasks}
//             onCompletedTask={handleCompletedTasks}
//             handleMoveToActive={handleMoveToActive}
//           />
//           <CompletedTasks
//             completedTasks={completedTasks}
//             onDeleteTask={handleDeleteTasksFromCompleted}
//             handleMoveToActive={handleMoveToActive}
//           />
//         </Tabs>
//       </div>
//     </div>
//   );
// }




// App.tsx
// import React, { useState } from "react";
// import { Tabs, Tab, TabsList } from "@mui/base/Tabs";
// import ActiveTasks from "./tabs/Activetasks";
// import CompletedTasks from "./tabs/Completedtasks";
// import "./App.css";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function App() {
//   const [activeTasks, setActiveTasks] = useState<Task[]>([]);
//   const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

//   const handleCompletedTasks = (task: Task) => {
//     setCompletedTasks([...completedTasks, task]);
//   };

//   const handleDeleteTasksFromCompleted = (taskId: number) => {
//     setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
//   };

//   const handleMoveToActive = (taskId: number) => {
//     const taskToMove = completedTasks.find((task) => task.id === taskId);
//     if (taskToMove) {
//       setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
//       setActiveTasks([...activeTasks, { ...taskToMove, completed: false }]);
//     }
//   };

//   return (
//     <div className="bg-cover bg-center h-screen flex items-center justify-center backg">
//       <div className="container mx-auto bg-white p-4 rounded-xl h-96 w-3/6 shadow-md">
//         <Tabs defaultValue={1}>
//           <TabsList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled
//                       ? "cursor-not-allowed opacity-50"
//                       : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={1}
//             >
//               Active Tasks
//             </Tab>
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled
//                       ? "cursor-not-allowed opacity-50"
//                       : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={2}
//             >
//               Completed Tasks
//             </Tab>
//           </TabsList>
//           <ActiveTasks
//             activeTasks={activeTasks}
//             onCompletedTask={handleCompletedTasks}
//             handleMoveToActive={handleMoveToActive}
//           />
//           <CompletedTasks
//             completedTasks={completedTasks}
//             onDeleteTask={handleDeleteTasksFromCompleted}
//             handleMoveToActive={handleMoveToActive}
//           />
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { Tabs } from "@mui/base/Tabs";
// import { TabsList } from "@mui/base/TabsList";
// import Activetasks from "./tabs/Activetasks"; 
// import Completedtasks from "./tabs/Completedtasks";
// import { Tab } from "@mui/base/Tab";
// import './App.css';

// // Define the Task interface
// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function App() {
//   const [activeTasks, setActiveTasks] = useState<Task[]>([]);
//   const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

//   const handleCompletedTasks = (task: Task) => {
//     setCompletedTasks([...completedTasks, task]);
//   };

//   const handleMoveToActive = (taskId: number) => {
//     const taskToMove = completedTasks.find(task => task.id === taskId);
//     if (taskToMove) {
//       setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
//       setActiveTasks([...activeTasks, {...taskToMove, completed: false}]);
//     }
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
//   };

//   return (
//     <div className="bg-cover bg-center h-screen flex items-center justify-center backg">
//       <div className="container mx-auto bg-white p-4 rounded-xl h-96 w-3/6 shadow-md">
//         <Tabs defaultValue={1}>
//           <TabsList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={1}
//             >
//               Active Tasks
//             </Tab>
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={2}
//             >
//               Completed Tasks
//             </Tab>
//           </TabsList>
//           <Activetasks 
//             activeTasks={activeTasks}
//             onCompletedTask={handleCompletedTasks}
//             handleMoveToActive={handleMoveToActive}
//           />
//           <Completedtasks 
//             completedTasks={completedTasks}
//             onDeleteTask={handleDeleteTask}
//             handleMoveToActive={handleMoveToActive}
//           />
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { Tabs } from "@mui/base/Tabs";
// import { TabsList } from "@mui/base/TabsList";
// import ActiveTasks from "./tabs/ActiveTasks";
// import CompletedTasks from "./tabs/CompletedTasks";
// import { Tab } from "@mui/base/Tab";
// import './App.css';

// // Define the Task interface
// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function App() {
//   const [activeTasks, setActiveTasks] = useState<Task[]>([]);
//   const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

//   const handleCompletedTasks = (task: Task) => {
//     setCompletedTasks([...completedTasks, task]);
//   };

//   const handleMoveToActive = (taskId: number) => {
//     const taskToMove = completedTasks.find(task => task.id === taskId);
//     if (taskToMove) {
//       setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
//       setActiveTasks([...activeTasks, {...taskToMove, completed: false}]);
//     }
//   };

//   const handleDeleteTask = (taskId: number) => {
//     setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
//   };

//   return (
//     <div className="bg-cover bg-center h-screen flex items-center justify-center backg">
//       <div className="container mx-auto bg-white p-4 rounded-xl h-96 w-3/6 shadow-md">
//         <Tabs defaultValue={1}>
//           <TabsList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={1}
//             >
//               Active Tasks
//             </Tab>
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={2}
//             >
//               Completed Tasks
//             </Tab>
//           </TabsList>
//           <ActiveTasks 
//             activeTasks={activeTasks}
//             onCompletedTask={handleCompletedTasks}
//             handleMoveToActive={handleMoveToActive}
//             handleDeleteTask={handleDeleteTask}
//           />
//           <CompletedTasks 
//             completedTasks={completedTasks}
//             onDeleteTask={handleDeleteTask}
//             handleMoveToActive={handleMoveToActive}
//           />
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default App;
// App.tsx
// import React, { useState } from "react";
// import { Tabs, Tab, TabsList } from "@mui/base/Tabs";
// import ActiveTasks from "./tabs/Activetasks";
// import CompletedTasks from "./tabs/Completedtasks";
// import "./App.css";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function App() {
//   const [activeTasks, setActiveTasks] = useState<Task[]>([]);
//   const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

//   const handleCompletedTasks = (task: Task) => {
//     setCompletedTasks([...completedTasks, task]);
//   };

//   const handleDeleteTasksFromCompleted = (taskId: number) => {
//     setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
//   };

//   const handleMoveToActive = (taskId: number) => {
//     const taskToMove = completedTasks.find((task) => task.id === taskId);
//     if (taskToMove) {
//       setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
//       setActiveTasks([...activeTasks, { ...taskToMove, completed: false }]);
//     }
//   };

//   return (
//     <div className="bg-cover bg-center h-screen flex items-center justify-center backg">
//       <div className="container mx-auto bg-white p-4 rounded-xl h-96 w-3/6 shadow-md">
//         <Tabs defaultValue={1}>
//           <TabsList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled
//                       ? "cursor-not-allowed opacity-50"
//                       : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={1}
//             >
//               Active Tasks
//             </Tab>
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled
//                       ? "cursor-not-allowed opacity-50"
//                       : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={2}
//             >
//               Completed Tasks
//             </Tab>
//           </TabsList>
//           <ActiveTasks
//             activeTasks={activeTasks}
//             onCompletedTask={handleCompletedTasks}
//             handleMoveToActive={handleMoveToActive}
//           />
//           <CompletedTasks
//             completedTasks={completedTasks}
//             onDeleteTask={handleDeleteTasksFromCompleted}
//             handleMoveToActive={handleMoveToActive}
//           />
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import { Tabs, Tab } from "@mui/material";
// import { TabList } from "@mui/material"; 
// import ActiveTasks from "./tabs/Activetasks";
// import CompletedTasks from "./tabs/Completedtasks";
// import "./App.css";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function App() {
//   const [activeTasks, setActiveTasks] = useState<Task[]>([]);
//   const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

//   const handleCompletedTasks = (task: Task) => {
//     setCompletedTasks([...completedTasks, task]);
//   };

//   const handleDeleteTasksFromCompleted = (taskId: number) => {
//     setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
//   };

//   const handleMoveToActive = (taskId: number) => {
//     const taskToMove = completedTasks.find((task) => task.id === taskId);
//     if (taskToMove) {
//       setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
//       setActiveTasks([...activeTasks, { ...taskToMove, completed: false }]);
//     }
//   };

//   return (
//     <div className="bg-cover bg-center h-screen flex items-center justify-center backg">
//       <div className="container mx-auto bg-white p-4 rounded-xl h-96 w-3/6 shadow-md">
//         <Tabs defaultValue={1}>
//           <TabsList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }: { selected: boolean; disabled: boolean }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled
//                       ? "cursor-not-allowed opacity-50"
//                       : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={1}
//             >
//               Active Tasks
//             </Tab>
//             <Tab
//               slotProps={{
//                 root: ({ selected, disabled }: { selected: boolean; disabled: boolean }) => ({
//                   className: `font-sans ${
//                     selected
//                       ? "text-blue-500 bg-white"
//                       : "text-white bg-transparent focus:text-white hover:bg-blue-400"
//                   } ${
//                     disabled
//                       ? "cursor-not-allowed opacity-50"
//                       : "cursor-pointer"
//                   } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-blue-light`,
//                 }),
//               }}
//               value={2}
//             >
//               Completed Tasks
//             </Tab>
//           </TabsList>
//           <ActiveTasks
//             activeTasks={activeTasks}
//             onCompletedTask={handleCompletedTasks}
//             handleMoveToActive={handleMoveToActive}
//           />
//           <CompletedTasks
//             completedTasks={completedTasks}
//             onDeleteTask={handleDeleteTasksFromCompleted}
//             handleMoveToActive={handleMoveToActive}
//           />
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import { Tabs, Tab} from "@mui/material";
// import {TabList} from "@mui/material"
// import ActiveTasks from "./tabs/Activetasks";
// import CompletedTasks from "./tabs/Completedtasks";
// import "./App.css";

// interface Task {
//   id: number;
//   content: string;
//   date: string;
//   completed: boolean;
// }

// function App() {
//   const [activeTasks, setActiveTasks] = useState<Task[]>([]);
//   const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

//   const handleCompletedTasks = (task: Task) => {
//     setCompletedTasks([...completedTasks, task]);
//   };

//   const handleDeleteTasksFromCompleted = (taskId: number) => {
//     setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
//   };

//   const handleMoveToActive = (taskId: number) => {
//     const taskToMove = completedTasks.find((task) => task.id === taskId);
//     if (taskToMove) {
//       setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
//       setActiveTasks([...activeTasks, { ...taskToMove, completed: false }]);
//     }
//   };

//   return (
//     <div className="bg-cover bg-center h-screen flex items-center justify-center backg">
//       <div className="container mx-auto bg-white p-4 rounded-xl h-96 w-3/6 shadow-md">
//         <Tabs defaultValue={1}>
//           <TabList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
//             <Tab value={1} label="Active Tasks" />
//             <Tab value={2} label="Completed Tasks" />
//           </TabList>
//           <ActiveTasks
//             activeTasks={activeTasks}
//             onCompletedTask={handleCompletedTasks}
//             handleMoveToActive={handleMoveToActive}
//           />
//           <CompletedTasks
//             completedTasks={completedTasks}
//             onDeleteTask={handleDeleteTasksFromCompleted}
//             handleMoveToActive={handleMoveToActive}
//           />
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default App;

// App.tsx
// App.tsx
// App.tsx
import React, { useState } from "react";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import ActiveTasks from "./tabs/Activetasks";
import CompletedTasks from "./tabs/Completedtasks";
import { Tab } from "@mui/base/Tab";
import "./App.css";

interface Task {
  id: number;
  content: string;
  date: string;
  completed: boolean;
}

function App() {
  const [activeTasks, setActiveTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [activeTab, setActiveTab] = useState<number>(1); // Changed type to number
  const [isLoading, setIsLoading] = useState<boolean>(false); // New state for loading indicator

  const handleAddTask = (task: Task) => {
    setActiveTasks([...activeTasks, task]);
  };

  const handleDeleteTask = (taskId: number) => {
    setActiveTasks(activeTasks.filter((task) => task.id !== taskId));
    setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
  };

  const handleMoveToCompleted = (taskId: number) => {
    const taskToMove = activeTasks.find((task) => task.id === taskId);
    if (taskToMove) {
      setCompletedTasks([...completedTasks, { ...taskToMove, completed: true }]);
      setActiveTasks(activeTasks.filter((task) => task.id !== taskId));
    }
  };

  const handleMoveToActive = (taskId: number) => {
    const taskToMove = completedTasks.find((task) => task.id === taskId);
    if (taskToMove) {
      setActiveTasks([...activeTasks, { ...taskToMove, completed: false }]);
      setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
    }
  };

  const handleDeleteTasksFromCompleted = (taskId: number) => {
    setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
  };

  const handleDeleteAllTasks = () => {
    setActiveTasks([]);
    setCompletedTasks([]);
  };

  const handleTabChange = (newValue: number) => { // Adjusted the type to number
    setIsLoading(true); // Set loading to true when tab changes
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after a short delay (simulate loading time)
      setActiveTab(newValue);
    }, 500); // Adjust the delay time as needed
  };

  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center backg">
      <div className="container mx-auto bg-white p-4 rounded-xl h-96 w-3/6 shadow-md">
        <Tabs value={activeTab} onChange={(event, newValue) => handleTabChange(newValue as number)}> {/* Cast newValue as number */}
          <TabsList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
            <Tab
              value={1}
              className="font-sans text-white bg-transparent focus:text-white hover:bg-blue-400 cursor-pointer text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-blue-light"
            >
              Active Tasks
            </Tab>
            <Tab
              value={2}
              className="font-sans text-white bg-transparent focus:text-white hover:bg-blue-400 cursor-pointer text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-blue-light"
            >
              Completed Tasks
            </Tab>
          </TabsList>
          {isLoading ? ( // Conditionally render loading message
            <div className="flex justify-center items-center h-48">
              <p>Loading...</p>
            </div>
          ) : (
            <>
              <div hidden={activeTab !== 1}>
                <ActiveTasks
                  activeTasks={activeTasks}
                  onAddTask={handleAddTask}
                  onDeleteTask={handleDeleteTask}
                  onMoveToCompleted={handleMoveToCompleted}
                  onDeleteAllTasks={handleDeleteAllTasks} // Added prop
                />
              </div>
              <div hidden={activeTab !== 2}>
                <CompletedTasks
                  completedTasks={completedTasks}
                  onDeleteTask={handleDeleteTasksFromCompleted}
                  onMoveToActive={handleMoveToActive} // Pass the handler to CompletedTasks
                />
              </div>
            </>
          )}
        </Tabs>
      </div>
    </div>
  );
}

export default App;
