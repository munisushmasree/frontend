function TaskRow({task,index,roles,updateTask,deleteTask,}) {
    const selectedRole = roles.find((role) => role.id === task.roleId);
    const cost = selectedRole && task.hours > 0 ? selectedRole.rate * Number(task.hours): 0 ;
    return (
        <div className="task-row">
            <div>{index +1}</div>
            <div>
                <input type="text" placeholder="Enter task name" value={task.name} onChange={(e) => updateTask(task.id,"name", e.target.value)}/>
            </div>
            <div>
                <select value={task.roles} onChange={(e) => updateTask(task.id,"roleId",e.target.value)}>
                    <option value=""> Select role </option>
                    {roles.map((role)=>(
                        <option kay={role.id} value={role.id}>{role.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <input type="text" inputMode="numeric" placeholder="Hours"  value={task.hours} onChange={(e)=>{
                    const value = e.target.value;
                    if(/^\d*$/.test(value)){
                        updateTask(task.id,"hours",value === "" ? 0 : Number(value));
                    }
                }}/>
            </div>
            <div>
                {cost > 0 ? `₹${cost.toLocaleString("en-IN")}`:"-"}
            </div>
            <div>
                <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </div>
    );
}
export default TaskRow;