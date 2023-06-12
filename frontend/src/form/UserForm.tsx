import React, { useState } from 'react';
import './UserForm.css';

function UserForm() {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        console.log('Submitted user:', { name, email, password });

        setName('');
        setEmail('');
        setPassword('');
        setStep(1);
    };

    return (
        <div className="form-container">
            <h2>Add User</h2>
            {step === 1 && (
                <form className="form" onSubmit={handleNextStep}>
                    <label className="form-label">
                        Name:
                        <input className="form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <br />
                    <label className="form-label">
                        Email:
                        <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <button className="form-button" type="submit">Next</button>
                </form>
            )}
            {step === 2 && (
                <form className="form" onSubmit={handleSubmit}>
                    <label className="form-label">
                        Password:
                        <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <br />
                    <button className="form-button" type="button" onClick={handlePrevStep}>Previous</button>
                    <button className="form-button" type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default UserForm;
