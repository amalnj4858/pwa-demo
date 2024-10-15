import React, { useEffect, useState } from "react";
import "./PushNotif.css";

export default function PushNotif(){

    const [permissionGranted,setPermissionGranted] = useState(false);

    useEffect(()=>{
        Notification.requestPermission().then((permission)=>{
            setPermissionGranted(permission);
        });
    },[]);


    const sendNotification = () => {
        if(permissionGranted === 'granted')
        {
            new Notification("Welcome to our app");
        }
        else{
            alert("allow permission to read notification");
        }
    }


    return <button onClick={sendNotification}>PUSH</button>
}