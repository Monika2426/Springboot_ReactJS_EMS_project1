import React, { useEffect, useState } from "react";
import { createDepartment, getDepartmentById, updateDepartment } from "../services/DepartmentService.js";
import { useNavigate, useParams } from "react-router-dom";

const DepartmentComponent = () => {
    const [departmentName,setDepartmentName]=useState('');
    const [departmentDescription,setDepartmentDescription]=useState('')

    const navigator=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        if(id){
            getDepartmentById(id).then((response)=>{
                setDepartmentName(response.data.departmentName),
                setDepartmentDescription(response.data.departmentDescription)
            }).catch(error=>{
                console.error(error);
            })
        }
    },[id]);


function saveOrUpdateDepartment(e){
    e.preventDefault();
    const department={departmentName,departmentDescription};
    if(id){
        updateDepartment(id,department).then((response)=>{
            console.log(response.data);
            navigator('/departments');
        }).catch(error=>{
            console.error(error);
        });

    } else{
        createDepartment(department).then((response)=>{
            console.log(response.data);
            navigator('/departments');
        }).catch(error=>{
            console.error(error);
        });
    }    
}

function pageTitle(){
    if(id){
        return <h2 className='text-center'>Update Department</h2>
    } else{
        return <h2 className='text-center'>Update Department</h2>
    }
}

    return (
        <div className='container'>
            <br></br>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Department Name:</label>
                                <input className='form-control' type='text' name='departmentName' placeholder='Enter department name' value={departmentName} onChange={(e)=>setDepartmentName(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Department Description:</label>
                                <input className='form-control' type='text' name='departmentDescription' placeholder='Enter department description' value={departmentDescription} onChange={(e)=>setDepartmentDescription(e.target.value)}></input>
                            </div>
                            <button className='btn btn-success mb-2' onClick={(e)=>saveOrUpdateDepartment(e)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DepartmentComponent;