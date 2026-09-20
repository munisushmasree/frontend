import React, { Component } from 'react';
import './app.css'
class App extends React.Component{
    constructor(){
        super();
        this.state ={
            projects: [
                {
                    id:1,
                    name: 'Website Development',
                    client: 'ABC Technologies',
                    status: 'In Progress',
                    owner: 'Sushma',
                    startDate: '2026-09-01',
                    endDate: '2026-09-30',
                    totalHours: 120,
                    finalCost: 453456
                },
                {
                    id:2,
                    name: 'React',
                    client: 'XYZ Corp',
                    status: 'Completed',
                    owner: 'Nikhitha',
                    startDate: '2025-09-01',
                    endDate: '2026-03-27',
                    totalHours: 250,
                    finalCost: 568900
                },
                {
                    id:3,
                    name: 'UI/UX Design',
                    client: 'Design Studio',
                    status: 'Planned',
                    owner: 'Phani',
                    startDate: '2026-09-20',
                    endDate: '2026-10-05',
                    totalHours: 80,
                    finalCost: 0
                }
            ]
        };
    }
    render(){
        return(
            <div className='app'>
                <ProjectTittle />
                <div className='project-list'>
                    {this.state.projects.map((item)=>(
                        <ProjectCard 
                        key={item.id}
                        data={item}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
class ProjectTittle extends React.Component {
    render(){
        return(
            <div className='project-title'>
                <h1>Projects</h1>
            </div>
        );
    }
}
class ProjectCard extends React.Component {
    formateDate(dateString){
        const date = new Date(dateString)
        return date.toLocaleDateString('en-GB',{
            day:'2-digit',
            month:'short',
            year:'numeric'
        });
    }
    formatCurrency(amount){
        return`Rs c${amount.toLocaleString('en-IN')}`;
    }
    render(){
        const project = this.props.data;
        let FinalCost;
        if(
            project.finalCost === 0 ||
            project.finalCost === null ||
            project.finalCost === undefined
        ){
            FinalCost = 'Not estimated';
        }else{
            FinalCost = this.formatCurrency(project.finalCost);
        }
        return(
            <div className="project-card">
                <h2>{project.name}</h2>
                <LabelValue label='Client' value={project.client}/>
                <LabelValue label='Status' value={<StatusBadge status = {project.status}/>}/>
                <LabelValue label='Owner' value={project.owner}/>
                <LabelValue label='Date' value={this.formateDate(project.startDate)+'-'+this.formateDate(project.endDate)}/>
                <LabelValue label='Total Hours' value={project.totalHours}/>
                <LabelValue label='Final Cost' value={FinalCost}/>
                
            </div>
        )
    }
}
class LabelValue extends React.Component{
    render(){
        return(
            <div className="label-value">
                <span className="label">
                    {this.props.label}
                </span>
                <span className="value">
                    {this.props.value}
                </span>
            </div>
        );
    }
}
class StatusBadge extends React.Component {
    render() {
        const status = this.props.status;
        return (
            <span className={`status-badge ${status.toLowerCase().replace(" ", "-")}`}>
                {status}
            </span>
        );
    }
}
export default App;

/*
utils lo only formatdate logics currency logic
data lo project.js only the data
 */