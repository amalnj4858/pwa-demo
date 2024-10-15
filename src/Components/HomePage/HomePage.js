import React, { useEffect, useState } from "react";
import "./HomePage.css";

export default function HomePage(){
    const [users, setUsers] = useState(null);
    
    useEffect(()=>
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => setUsers(users));
    }, []);


    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users ? 
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )) 
                        : (<tr><td colSpan="3">NO USERS</td></tr>)
                    }
                </tbody>
            </table>
        </>
    );
}