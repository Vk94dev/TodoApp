import React from 'react'
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const TaskStats = () => {
  return (
    <div className="flex gap-10 justify-center">
      <div className="w-32 mt-2">
        <CircularProgressbar value={84} text="84%" styles={buildStyles({
            pathColor: "#16a34a",     // green circle
            textColor: "#16a34a",     // green text
            trailColor: "#d4d4d4",    // gray background circle
          })} />
        <p className="text-center mt-3  font-semibold text-sm">
        <span className=' text-green-600'>●</span><span>In Complete</span> 
        
        </p>
      </div>

      <div className="w-32 mt-2">
        <CircularProgressbar value={46} text="46%"   styles={buildStyles({
            pathColor: "#2563eb",     // blue circle
            textColor: "#2563eb",
            trailColor: "#d4d4d4",
          })} />
        <p className="text-center mt-3 font-semibold text-sm">
          <span className='mr-1 text-blue-700'>●</span><span>In Progress</span> 
        </p>
      </div>

      <div className="w-32 mt-2">
        <CircularProgressbar value={13} text="13%"    styles={buildStyles({
            pathColor: "#dc2626",     // red circle
            textColor: "#dc2626",
            trailColor: "#d4d4d4",
          })} />
        <p className="text-center mt-3 font-semibold text-sm">
         <span className='mr-1 text-red-600'>●</span><span>Not Started</span> 
        </p>
      </div>
    </div>
  );
}

export default TaskStats
