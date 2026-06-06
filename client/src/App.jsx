import React, { useContext, useState } from 'react'
import Authentication from './pages/Authentication'
import Dashboard from './pages/Dashboard';
import MyTask from './pages/MyTask';
import VitalTask from './pages/VitalTask';
import AccountInfo from './pages/AccountInfo';
import Navbar from './components/Navbar'
import MainPart from './components/MainPart'
import Avatar from "./utils/images/avatar.avif"
import ChangePassword from './pages/ChangePassword';
import ViewTask from './pages/ViewTask';
import AddTask from './components/AddTask';
import TaskCategories from './pages/TaskCategories';
import AddTaskPriority from './components/AddTaskPriority';
import EditTaskPriority from './components/EditTaskPriority';
import EditTaskStatus from './components/EditTaskStatus';
import CreateCategories from './pages/CreateCategories';
import EditTask from './components/EditTask';
import UpdateInfo from './pages/UpdataInfo';
import AddMember from './components/AddMember';
import { contextProvider } from './context/RefContext';
import {Route,Routes} from "react-router-dom"
import Setting from './pages/Setting';
import Help from './pages/Help';

const App = () => {

// const [login,setLogin]= useState(true);
// const [task,setTask] = useState(false);

const {login,task} = useContext(contextProvider);


// const [dashboard,setDashboard] = useState(false);
// const [vital,setVital] =useState(false);
// const [mytask,setMytask] = useState(false);
// const [taskCategory,setTaskCategory] = useState(false);
// const [acoutinfo,setAcoutinfo] = useState(false);


  return (
    <div className='h-screen w-full'>
     {!login?(<Authentication />):( <div className='bg-[#fbfbfb] h-screen'>
      <Navbar />

       <div className='h-[90%] w-full flex flex-row '>
      
       <MainPart  />
      
         {/* <TaskCategories /> */}
          {/* < AddTaskPriority /> */}
         {/* <EditTaskPriority /> */}
         {/* < EditTaskStatus /> */}
       {/* < CreateCategories /> */}
        {/* < EditTask /> */}
           {/* <AddMember /> */}
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/vital' element={<VitalTask />} />
          <Route path='/mytask' element={<MyTask />} />
          <Route path='/category' element={<TaskCategories />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/help' element={<Help />} />
          <Route path="/profile" element={<AccountInfo />} />
          <Route path="/updateInfo" element={<UpdateInfo />} />
          <Route path="/changepwd" element={<ChangePassword />} />
          <Route path="/viewtask" element={<ViewTask />} />
          <Route path="/addcategory" element={<CreateCategories />} />
        </Routes>

       </div>

    </div>)}
    </div>
  )
}

export default App

