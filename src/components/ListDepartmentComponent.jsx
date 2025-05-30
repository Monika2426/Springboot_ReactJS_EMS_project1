import React, { useEffect, useState } from "react";
import { deleteDepartment, getAllDepartments } from "../services/DepartmentService.js";
import { useNavigate } from "react-router-dom";

const ListDepartmentComponent = () => {

    const [departments, setDepartments] = useState([]);
    const navigator=useNavigate();

    useEffect(() => {
        listOfDepartments();   
    }, []);

    function listOfDepartments(){
        getAllDepartments().then((response) => {
            setDepartments(response.data);
        }).catch(error => {
            console.error(error);
        })

    }

    function addDepartment(){
        navigator('/add-department');
    }

    function updateDepartment(id){
        navigator(`/edit-department/${id}`);
    }

    function removeDepartment(id){
        deleteDepartment(id).then((response)=>{
            console.log(response.data);
            listOfDepartments();
        }).catch(error=>{
            console.error(error);
        })
    }


    return (
        <div className='container'>
            <h2 className='text-center'>List Of Departments</h2>
            <button className='btn btn-primary mb-2' onClick={addDepartment}>Add Department</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Department Id</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map(department =>
                            <tr key={department.id}>
                                <td>{department.id}</td>
                                <td>{department.departmentName}</td>
                                <td>{department.departmentDescription}</td>
                                <td>
                                    <button className='btn btn-info' onClick={()=>updateDepartment(department.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={()=>removeDepartment(department.id)} style={{marginLeft:'10px'}}>Delete</button>
                                </td>
    
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>


    )
}

export default ListDepartmentComponent;