import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
    customer: "",
    drinkName: ""
}

const AddOrder = () => {
    const [state, setState] = useState(initialState);

    const {customer, drinkName} = state;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        const { customer, value } = e.target;
        setState({ ...state, [customer]: value });
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="customer">Your Name</label>
                <input
                    type="text"
                    id="customer"
                    name="customer"
                    value={customer}
                    onChange={handleInputChange}
                ></input>
                <input type="submit" value="Order" />
                <Link to="/drinks">
                    <input type="button" value="Cancel" />
                </Link>
            </form>
        </>
    )
}

export default AddOrder;