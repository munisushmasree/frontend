import { useState } from "react";
import roles from "../data/roles";
import TaskRow from "./TaskRow";
import EstimateSummary from "./EstimateSummary";
function Estimate (){
    const [tasks, setTasks] = useState([]);
    const addTask = () =>{
        const newTask = {
            id: crypto.randomUUID(),
            name:"",
            roleId: "",
            hours:0
        };
        setTasks([...tasks ,newTask]);
    }
    const updateTask = (id, field, value)=>{
        setTasks(
            tasks.map((task)=>
            task.id === id? {...task, [field]: value}: task)
        );
    }
    const deleteTask =(id) => {
        setTasks(
            tasks.filter((task)=> task.id !== id)
        );
    };
    const totalTasks = tasks.length;
    const totalHours = tasks.reduce(
        (total, task) =>
            total + Number(task.hours || 0),0
    )
    const totalCost =tasks.reduce(
        (total, task)=>{
            const selectedRole = roles.find(
                (role) => role.id === task.roleId
            );
            const cost = selectedRole && task.hours > 0 ? selectedRole.rate * Number(task.hours):0;
        return total + cost
        },0
    )

    return  (
    <div className="estimate">
        <div className="estimate-header">
            <h1>Estimation</h1>
        </div>
        <div className="add-task-section">
            <button className="add-task-button" onClick={addTask}>+ Add Task</button>
        </div>
        {tasks.length === 0 ? (
            <div className="empty-state">
                <div className="empty-icon">
                    &empty;
                </div>
                <h2>No tasks added yet</h2>
                <p>Click "Add Task" to start building your estimate.</p>
                <button className="add-task-button" onClick={addTask}>+ Add Task</button>
            </div>
            ) : (
            <>
            <div className="task-table">
                <div className="task-header">
                    <div>No</div>
                    <div>Task Name</div>
                    <div>Role</div>
                    <div>Hours</div>
                    <div>Cost</div>
                    <div>Action</div>
                </div>
                {tasks.map((task, index)=>(
                    <TaskRow key={task.id} task={task} index={index} roles={roles} updateTask={updateTask} deleteTask={deleteTask} />
                ))}
            </div>
            <EstimateSummary totalTasks={totalTasks} totalHours={totalHours} totalCost={totalCost} />
        </>
        )}
    </div>
    );
}
export default Estimate;