import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import {Trash,  ArrowClockwise  } from 'react-bootstrap-icons';
import {getProjectTable,updateProjectTable} from '../js/database'

async function handleRestoreClick(dataRow, projectList, setProjectList) {
    //dataRow is the selected project which the user wants to restore 
    // projectList is the state variable which is array of all trashed projectList
    // setProjectList is the updator method of projectList

    console.log(`Previous object\n ${JSON.stringify(dataRow)}`);

    // user restores the trashed project
    dataRow.IsArchived = false;
    console.log(`Updated object\n ${JSON.stringify(dataRow)}`);

    await updateProjectTable(dataRow);

    //remove the untrashed record from display
    const list = projectList.filter(item => item.id !== dataRow.id);
    setProjectList(list);
}



export default function ArchiveProjectTable() {
  
  const [projectList, setProjectList] = useState([]);
  const [archivedProjectList, setArchivedProjectList] = useState([]);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedProjects = await getProjectTable();
        setProjectList(fetchedProjects);
      } catch (error) {
        console.error("Error in fetching projectList:", error);
      }
    };

    fetchData();
  }, []); 


  
  useEffect(() => {
    // executes when projectList state changes 

    console.log(`projectList ${projectList}`);

    if (projectList.length > 0) {
      // projectList fetched completely
      const filteredProjects = projectList.filter((item) => item.IsArchived);
      setArchivedProjectList(filteredProjects);     
    }
  }, [projectList]);


  useEffect(() => {
    // Executes when archivedProjectList is updated
    console.log(`filterData ${archivedProjectList}`);

    if (archivedProjectList.length === 0) {
      // fetch not complete
      console.log("Waiting for data...");
    }
  }, [archivedProjectList]);

  
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
          {archivedProjectList.map((row) => (
            <tr key={row.id}>
              <td><a href="#">{row.ProjName}</a></td>
              <td>{row.DateModified}</td>
              <td>
                  
                <ArrowClockwise
                    onClick={() => handleRestoreClick(row,archivedProjectList,setArchivedProjectList)}
                    className="text-warning"
                    style={{ cursor: 'pointer' }}
                />  
                 <Trash
                  onClick={() => handleTrashClick(row,archivedProjectList,setArchivedProjectList)}
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



