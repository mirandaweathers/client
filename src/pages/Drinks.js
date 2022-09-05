import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "../css/Global.css";

const initialState = {
    customer: "",
    drinkName: ""
}

const Drinks = () => {

    const [data, setData] = useState([]);

    const [state, setState] = useState(initialState);

    const {customer, drinkName} = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        const drink = e.target.parentNode.parentNode.key;
        axios.post("http://localhost:4028/orders/new",
            body = {
                drink: e.target.parentNode.parentNode.key
            })
        .catch((err) => toast.error(err.response.data));
    }

    const handleInputChange = (e) => {
        const { customer, value } = e.target;
        setState({ ...state, [customer]: value });
    }

    const getData = async () => {
        const { data } = await axios.get(`http://localhost:4028/drinks/`);
        setData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {/* {JSON.stringify(data)} */}
            <h2>Drink Menu</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>I want one!</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return(
                            <tr key={item.drinkname}>
                                <td>{item.drinkname}</td>
                                <td>{item.drinkdesc}</td>
                                <td>{item.price}</td>
                                <td>
                                    {/* <Link to="/placeOrder">
                                        <button>Order {item.drinkname}</button>
                                    </Link> */}
                                    {/* <form onSubmit={handleSubmit}>
                                        <input type="submit" value="Order" />
                                    </form> */}
                                    <input type="button" value="Order" onClick={handleSubmit} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Drinks;
