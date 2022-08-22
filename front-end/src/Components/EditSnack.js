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
        .then((response) => setSnack(response.data.payload),
        (error) => navigate(`/not-found`)
        )
        
    }, [id, navigate])

    const handleSubmit = (event) => {
        event.preventDefault()
        updateSnack(snack, id)
    }


  return (
    <div className="Edit">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <br/>
            <input 
            id="name" 
            value={snack.name} 
            type="text" 
            onChange={handleTextChange}
            placeholder="Name"
            required
            />
            <br/>
            <label htmlFor="image">Image:</label>
            <br/>
            <input 
            id="image" 
            value={snack.image} 
            type="text" 
            onChange={handleTextChange}
            placeholder="http://"
            required
            />
            <br/>
            <label htmlFor="fiber">Fiber:</label>
            <br/>
            <input 
            id="fiber" 
            value={snack.fiber} 
            type="number" 
            onChange={handleTextChange}
            // placeholder="http://"
            // required
            />
            <br/>
            <label htmlFor="protein">Protein:</label>
            <br/>
            <input 
            id="protein" 
            value={snack.protein} 
            type="number" 
            onChange={handleTextChange}
            // placeholder="http://"
            // required
            />
            <br/>
            <label htmlFor="added_sugar">Added Sugar:</label>
            <br/>
            <input 
            id="added_sugar" 
            value={snack.added_sugar} 
            type="number" 
            onChange={handleTextChange}
            // placeholder="http://"
            // required
            />
            <br/>
            <br/>
            <input type="submit"/>

        </form>
    </div>
  )
}

export default EditSnack