import React, { useState } from "react";

export default function AddContact(props) {

    const defaultInput = { id: "", name: "", age: "", manager: "", start_date: "" }
    const [input, setInput] = useState({ ...defaultInput })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
            //computed propterty names
        })
    }
    const submitForm = (e) => {
        //alert(JSON.stringify(input));
        props.onAddContact(input);

        // Clearing the form after submission.
        setInput({ ...defaultInput });
    }

    return (
        <form>
            <label htmlFor="id">ID</label>
            <input
                type="text"
                name="id"
                value={input.id}
                onChange={handleChange} />

            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange} />
            <label htmlFor="age">Age</label>
            <input
                type="text"
                name="age"
                value={input.age}
                onChange={handleChange} />
            <label htmlFor="manager">Is Manager</label>
            <input
                type="text"
                name="manager"
                value={input.manager}
                onChange={handleChange} />
            <label htmlFor="start_date">Start Date</label>
            <input
                type="text"
                name="start_date"
                value={input.start_date}
                onChange={handleChange} />

            <input type="button" className="btn-submit" value="Add to the list" onClick={submitForm} />
        </form>
    );
}