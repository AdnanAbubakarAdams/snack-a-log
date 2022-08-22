import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartRegular from "../assets/heart-regular.png";

const SnackDetails = () => {
  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((response) => {
      setSnack(response.data.payload);
    });
  }, [id, navigate, API]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteSnack();
  };
  return (
    <div>
      <article className="details">
        <aside>
          {snack.is_healthy ? (
            <img src={heartSolid} alt="healthy food" />
          ) : (
            <img src={heartRegular} alt="unhealthy food" />
          )}
          <h4>{snack.name}</h4>
          </aside>
          <div>
          <img src={snack.image} alt={snack.name} />
        
        <h5>Protein: {snack.protein}</h5>
        <h5>Fiber: {snack.fiber}</h5>
        <h5>Added Sugar: {snack.added_sugar}</h5>
        </div>
      </article>
      <div className="btn">
        <div>
          <Link to="/snacks">
            <button className="btn1">Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/snacks/${id}/edit`}>
            <button className="btn2">Edit</button>
          </Link>
        </div>
        <div>
          <button className="btn3" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SnackDetails;
