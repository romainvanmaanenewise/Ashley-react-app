import React, { useState } from 'react';
import './CreateUser.scss'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const handleSubmit = (e) => {
    e.preventDefault();
    const object = {
        name: e.target[0].value
    }
    fetch('http://localhost:3000/api/client/createclient' ,{
        method: "POST",
        headers: { "Content-Type" : "application/json", "Access-Control-Request-Headers" : "*"},
        body: JSON.stringify(object)
    }).then(res => res.json()
    .then(result => {
        //
    }));
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

export default CreateUser
