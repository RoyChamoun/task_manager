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
  const [activeTab, setActiveTab] = useState<number>(1); 
  const [isLoading, setIsLoading] = useState<boolean>(false); 

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

  const handleTabChange = (newValue: number) => { 
    setIsLoading(true); 
    setTimeout(() => {
      setIsLoading(false); 
      setActiveTab(newValue);
    }, 500); 
  };

  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center backg">
      <div className="container mx-auto bg-white p-4 rounded-xl h-96 w-3/6 shadow-md">
        <Tabs value={activeTab} onChange={(event, newValue) => handleTabChange(newValue as number)}> {/* Cast newValue as number */}
          <TabsList className="mb-4 rounded-2xl bg-blue-500 flex font-sans items-center justify-center content-between min-w-tabs-list shadow-lg">
            <Tab
              value={1}
              className={`font-sans text-${activeTab === 1 ? 'black' : ''} ${activeTab === 1 ? 'bg-white' : 'bg-transparent' } text-blue-300 hover:bg-blue-400 cursor-pointer text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 focus:shadow-outline-blue-light`}
            >
              Active Tasks
            </Tab>
            <Tab
              value={2}
              className={`font-sans text-${activeTab === 2 ? 'black' : ''} ${activeTab === 2 ? 'bg-white' : 'bg-transparent'} text-blue-300 hover:bg-blue-400 cursor-pointer text-sm font-bold w-full p-2 m-1.5 border-0 rounded-md flex justify-center focus:outline-0 focus:shadow-outline-blue-light`}
            >
              Completed Tasks
            </Tab>
          </TabsList>
          {isLoading ? ( 
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
                  onDeleteAllTasks={handleDeleteAllTasks} 
                />
              </div>
              <div hidden={activeTab !== 2}>
                <CompletedTasks
                  completedTasks={completedTasks}
                  onDeleteTask={handleDeleteTasksFromCompleted}
                  onMoveToActive={handleMoveToActive} 
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
