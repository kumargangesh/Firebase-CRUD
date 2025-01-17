import React, { useState } from 'react';
import "./Style.css";
import { deleteSingleUser, updateSingleUser } from '../FirebaseConnectivity/FirebaseMethods';

export default function IndividualData(props) {

    const [name, changeName] = useState(props.name);
    const [age, changeAge] = useState(props.age);
    const [toUpdate, toggleToUpdate] = useState(true);
    const [message, changeMessage] = useState();
    const currentName = props.name;

    const handleName = (event) => {
        changeName(event.target.value);
    }

    const handleAge = (event) => {
        changeAge(event.target.value);
    }

    const updateUser =() => {
        if(toUpdate === false){
            toggleToUpdate(true);
        }else{
            toggleToUpdate(false);
        }
    }

    const confirmUpdate =async() => {
        if(name === "" && age === ""){
            changeMessage("enter name and age");
        }else if(name === ""){
            changeMessage("enter name");
        }else if(age === ""){
            changeMessage("enter age");
        }else{
            console.log("current name :\t"+currentName);
            updateSingleUser(currentName, name, age);
        }
    }

    const deleteUser = async() => {
        if(window.confirm("Sure to delete user named : "+name) === true){
            await deleteSingleUser(name);
        }
    }

    return (
        <div>

            <div className="singleUser container">
                <div className="icons d-flex justify-content-between">
                    <i class="fa-solid fa-pen" onClick={updateUser}></i>
                    <i class="fa-solid fa-trash" onClick={deleteUser}></i>
                </div>
                <input type="text" value={name} onChange={handleName} readOnly = {toUpdate} />
                <input type="number" value={age} onChange={handleAge} readOnly = {toUpdate} />
                <center><p style={{ color : "red" }}>{message}</p></center>

                {
                    toUpdate === false ?
                        <button className="btn btn-outline-success updateButton" onClick={confirmUpdate}>UPDATE</button>
                    :
                        console.log()   
                }   

            </div>

        </div>
    )
}
