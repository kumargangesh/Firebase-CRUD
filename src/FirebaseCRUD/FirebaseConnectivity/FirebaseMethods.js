import { database } from "./FirebaseInstance";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';

export const getAllUser = async () => {
    const data = collection(database, "users");
    const users_List = await getDocs(data);

    let users = [];
    users_List.docs.map(doc => {
        let object = {};
        object.userName = doc.data().userName;
        object.userAge = doc.data().userAge;
        users = [...users, object];
    });

    return users;
}

export const addDataToFirebase = async (userName, userAge) => {
    const value = collection(database, "users");

    let status = false;

    const usersList = await getAllUser();

    usersList.map((user) => {
        if (user.userName === userName)
            status = true;
    })

    if (status === false) {
        await addDoc(value, {
            userName: userName,
            userAge: userAge
        });
        console.log("new user added successfully");
    } else
        alert("user with name : \t" + userName + " already exists");
}

export const deleteSingleUser = async (userName) => {
    const value = collection(database, "users");

    const usersList = await getDocs(value);

    let userToDelete = "";

    usersList.docs.map((name) => {
        if (name.data().userName === userName) {
            userToDelete = name.id;
        }
    });

    const deleteVal = doc(database, "users", userToDelete);
    await deleteDoc(deleteVal);
    alert("User deleted successfully");

}


export const updateSingleUser = async (currentName, updatedUserName, UpdatedUserAge) => {
    const value = collection(database, "users");

    const usersList = await getDocs(value);

    let userToUpdate = "";

    usersList.docs.map((name) => {
        if (name.data().userName === currentName) {
            userToUpdate = name.id;
        }
    });

    const userUpdateRefrence = doc(database, "users", userToUpdate);

    await updateDoc(userUpdateRefrence, {
        userName : updatedUserName,
        userAge : UpdatedUserAge
    });

    alert("User updated successfully");
}


