import React, {useState} from 'react';

import "./Form.css"

const Form = ({getFiltred}) => {

    const [form,setForm] = useState({name: '', username: '', email: ''});

    const onSubmit = (e) => {

        e.preventDefault();

        getFiltred(form);

    }


    const formCheaker = (e) => {

        setForm({...form, [e.target.name]: e.target.value});

    }

    return (

        <div className={'Form'}>
            <form onSubmit={onSubmit}>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={formCheaker} /></label>
                <label>Username: <input type="text" name={'username'} value={form.username} onChange={formCheaker} /></label>
                <label>Email: <input type="text" name={'email'} value={form.email} onChange={formCheaker}/></label>
                <button>Filter</button>
            </form>
        </div>
    );
};

export default Form;