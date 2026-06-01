import React,{useState} from 'react'
import { createContext } from 'react'

export const contextProvider = createContext();


const RefContext = ({children}) => {

const token = localStorage.getItem("token");
// const [login,setLogin]= useState(token);
// const [active,setActive] = useState(localStorage.getItem("token") || "dashboard");


const [login,setLogin]= useState(true);
// const [open,setOpen] = useState(false);
 const [active,setActive] = useState("");
const [showedit,setShowedit] = useState(false);
const [addtask,setAddtask] = useState(false);
const [info,setInfo] = useState(false);
const [vitalView,setVitalView] =useState(false);
const [invite,setInvite] = useState(false);
const [addpriority,setAddpriority] = useState(false);
const [editpriority,setEditpriority] = useState(false);
const [editstatus,setEditstatus] = useState(false);


const [dashboard,setDashboard] = useState(false);

const [mytask,setMytask] = useState(false);
const [taskCategory,setTaskCategory] = useState(false);




  return (
    <div>
     < contextProvider.Provider value={{ editstatus,setEditstatus,editpriority,setEditpriority,addpriority,setAddpriority,invite,setInvite,showedit,setShowedit,active,setActive,setAddtask,addtask,login,setLogin,info,setInfo ,dashboard,setDashboard,vitalView,setVitalView,mytask,setMytask,taskCategory,setTaskCategory}} >
         {children}
     </contextProvider.Provider>

    </div>
  )
}

export default RefContext
