import React, { useState } from 'react';
import './CreateUser.scss'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const handleSubmit = async (e) => {
    e.preventDefault();
    let clientName = e.target[0].value
    const resultOfRequestCreateClient = await requestCreationClient(clientName);
    console.log(resultOfRequestCreateClient);
}

const CreateUser = () => {
    const [userName, setUserName] = useState('');
    return (
        <div className="col-12">
            <h1>Hello woud you be so kind to tell me your name?</h1>
            <form onSubmit={handleSubmit} className="form-group">
                <div className="d-flex justify-content-center">
                        <input 
                            type="text"
                            maxLength="50"
                            required
                            className="form-control user-name-input p-2"
                            value={userName}
                            placeholder="name"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <button className="btn btn-primary btn-user-name"><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </form>
        </div>
    )
}

async function requestCreationClient(name){
    const object = {
        name: name
    }
    const sendRequestCreationClient = await fetch('http://localhost:3000/api/client/createclient' ,{
        method: "POST",
        headers: { "Content-Type" : "application/json", "Access-Control-Request-Headers" : "*"},
        body: JSON.stringify(object)
    });
    return sendRequestCreationClient.text();
}

export default CreateUser
