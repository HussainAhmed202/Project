import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { ArrowClockwise } from 'react-bootstrap-icons';
import { Link } from "react-router-dom"
import {updateTrashStatus} from '../js/database';


export default function TrashProjectTable() {

  let [userProject, setuserProjects] = useState([]);
  
  useEffect(() => { 
    const getProject = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/trash-projects", {
      method: 'POST',
       headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({"token":localStorage.getItem("token"),"username":localStorage.getItem("username")}),
    }
    );
    if (response.ok) {
      let projects = await response.json();
      setuserProjects(projects);
      console.log(projects);
    
      if (projects.length !== 0) {
        projects.forEach(project => {
          console.log(project);
        });      
      } 
    }
    else {
      console.log("Failed to fetch project");
    }
  }
    getProject();
  }, []);
  
  
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Title</td>
            <td>Date Modified</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {userProject.map((row) => (
            <tr key={row.id}>
               <td><Link to={`/project/${row.ProjectContent}`}>{row.projName}</Link></td>
             <td>{row.dateModified}</td>
              <td>
                <ArrowClockwise
                  onClick={() => updateTrashStatus(row.id)}
                  className="text-danger"
                  style={{ cursor: 'pointer' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};




