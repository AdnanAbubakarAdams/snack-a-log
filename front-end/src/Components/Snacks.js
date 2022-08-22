import React,{ useState, useEffect } from 'react';
import axios from "axios";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

const Snacks = () => {
    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        axios.get(`${API}/snacks`)
        .then((response) => setSnacks(response.data.payload))
        .catch((c) => console.warn("catch", c));
    }, []);


  return (
    <div className='Snacks'>
    <ul className='items'>
        {snacks.map((snack) => {
            return (
                <li>
                    <Snack key={snack.id} snack={snack} />
                </li>
            )
        })}
    </ul>
    </div>
  )
}

export default Snacks;