import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


const EditSnack = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const [snack, setSnack] = useState({
        name: "",
        image: "",
        fiber: 0,
        protein: 0,
        added_sugar: 0,
        // is_healthy: false,

    })

    const updateSnack = (updatedSnack) => {
        axios.put(`${API}/snacks/${id}`, updatedSnack)
        .then(() => {
            navigate(`/snacks/${id}`)
        },
        (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c))
    }

    const handleTextChange = (event) => {
        setSnack({...snack, [event.target.id] : event.target.value })
    }

    useEffect(() => {
        axios.get(`${API}/snacks/${id}`)
        .then((response) => setSnack(response.data),
        (error) => navigate(`/not-found`)
        )
        
    }, [id, navigate])

    const handleSubmit = (event) => {
        event.preventDefault()
        updateSnack(snack, id)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <labe htmlFor="name">Name:</labe>
            <input 
            id="name" 
            value={snack.name} 
            type="text" 
            onChange={handleTextChange}
            placeholder="Name"
            required
            />
            <labe htmlFor="image">Image:</labe>
            <input 
            id="image" 
            value={snack.image} 
            type="text" 
            onChange={handleTextChange}
            placeholder="http://"
            required
            />
            <labe htmlFor="fiber">Fiber:</labe>
            <input 
            id="fiber" 
            value={snack.fiber} 
            type="number" 
            onChange={handleTextChange}
            // placeholder="http://"
            // required
            />
            <labe htmlFor="protein">Protein:</labe>
            <input 
            id="protein" 
            value={snack.protein} 
            type="number" 
            onChange={handleTextChange}
            // placeholder="http://"
            // required
            />
            <labe htmlFor="added_sugar">Added Sugar:</labe>
            <input 
            id="added_sugar" 
            value={snack.added_sugar} 
            type="number" 
            onChange={handleTextChange}
            // placeholder="http://"
            // required
            />
            <br/>
            <input type="submit"/>

        </form>
    </div>
  )
}

export default EditSnack