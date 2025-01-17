import React, { useEffect, useState } from 'react';
import "./Style.css";
import { addDataToFirebase, getAllUser } from '../FirebaseConnectivity/FirebaseMethods';
import IndividualData from './IndividualData';

export default function FrontPage() {

    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const users = await getAllUser();
        setUsers(users);
        // console.log("\nUsers in the list are :\n");
        // users.map((user) => {
        //     console.log(user.userName+" "+user.userAge);
        // });
    }

    useEffect(() => {
        loadUsers();
    }, [users]);

    const [name, changeName] = useState("");
    const [age, changeAge] = useState("");
    const [message, changeMessage] = useState("");

    const handleName = (event) => {
        changeName(event.target.value);
    }

    const handleAge = (event) => {
        changeAge(event.target.value);
    }

    const clearData = () => {
        changeName("");
        changeAge("");
    }

    const submitData = async () => {
        if (name === "" && age === "") {
            changeMessage("Enter name and age");
        } else if (name === "") {
            changeMessage("Enter name");
        } else if (age === "") {
            changeMessage("Enter age");
        } else {
            changeMessage("");
            console.log("name : " + name + " and age : " + age);
            addDataToFirebase(name, age);
            await loadUsers();
            clearData();
        }
    }

    return (
        <div>

            <div className="newUser">
                <input type="text" placeholder="Name" value={name} onChange={handleName} />
                <input type="number" placeholder="Age" value={age} onChange={handleAge} />
                <center><p style={{ color: "red" }}>{message}</p></center>
                <div className="buttons d-flex justify-content-between">
                    <button className="btn btn-outline-success" onClick={clearData}>CLEAR</button>
                    <button className="btn btn-outline-success" onClick={submitData}>SUBMIT</button>
                </div>
            </div>

            <div className="container mainDiv">
                <div className="row">
                    {
                        users.map((user) => {
                            return (
                                <div className="col-md-4" key={user.userName}>
                                    <IndividualData name={user.userName} age={user.userAge} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
