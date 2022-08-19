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
      setSnack(response.data);
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
      <article>
        <span>
          {snack.is_healthy ? (
            <img src={heartSolid} alt="" />
          ) : (
            <img src={heartRegular} alt="" />
          )}
          <h4>{snack.name}</h4>
          <img src={snack.image} alt={snack.name} />
        </span>
        <h5>Protein: {snack.protein}</h5>
        <h5>Fiber: {snack.fiber}</h5>
        <h5>Added Sugar: {snack.added_sugar}</h5>
      </article>
      <div>
        <div>
          <Link to="/snacks">
            <button>BACK</button>
          </Link>
        </div>
        <div>
          <Link to={`/snacks/${id}/edit`}>
            <button>EDIT</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default SnackDetails;
