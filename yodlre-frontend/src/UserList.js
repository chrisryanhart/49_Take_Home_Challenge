import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import YodlrApi from "./api";
import UserStatusCard from "./UserStatusCard";



function UserList(){

    const [allUsers, setAllUsers] = useState([]);

    useEffect(()=>{
        async function fetchUsers(){
            let res = await YodlrApi.getAllUsers();
            setAllUsers(res);
        }
        fetchUsers();
        // setAllUsers(userList);
    },[]);

    const deleteUser = (userDeleteId) => {
        const updatedUserList = allUsers.filter(user => userDeleteId !== user.id);
        setAllUsers(updatedUserList);
    }

    const usersList = allUsers.map(user => {
        return (
            <UserStatusCard deleteUser={deleteUser} allUsers={allUsers} userDetails={user}/>
        );
    });




    // call cards\

    // add buttons where you can delete


    return (
        <div>
            <div style={{marginTop:'10px', display:"flex",justifyContent:"center", width:'80%' }}>
                <h3>Yodlr Users:</h3>
            </div>
            {usersList}
        </div>
    );

}

export default UserList;