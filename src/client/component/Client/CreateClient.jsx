import React, { useState } from 'react';
import './CreateClient.scss'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const handleSubmit = async (e) => {
    e.preventDefault();
    let clientName = e.target[0].value
    const resultOfRequestCreateClient = await requestCreationOfClient(clientName);
    directClientToPageAfterCreat(resultOfRequestCreateClient, clientName);
}

const CreateClient = () => {
    const [clientName, setClientName] = useState('');
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
                            value={clientName}
                            placeholder="name"
                            onChange={(e) => setClientName(e.target.value)}
                        />
                        <button className="btn btn-primary btn-client-name"><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </form>
        </div>
    )
}

async function requestCreationOfClient(name){
    const object = {
        name: name
    }
    const sendRequestCreationOfClient = await fetch('http://localhost:3000/api/client/createclient' ,{
        method: "POST",
        headers: { "Content-Type" : "application/json", "Access-Control-Request-Headers" : "*"},
        body: JSON.stringify(object)
    });
    return sendRequestCreationOfClient.json();
}

function directClientToPageAfterCreat(resultOfRequestCreateClient, clientName){
    createLocalStorageClientObject(resultOfRequestCreateClient['clientId'], clientName);
}

function createLocalStorageClientObject(clientId, clientName){
    localStorage.setItem('clientId', clientId);
    localStorage.setItem('clientName', clientName);
}

export default CreateClient
