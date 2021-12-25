import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Api from '../../api.js';
import './shoe.styles.scss';

export default function Shoe({ id }) {

    const [shoeDeleted, setShoeDeleted] = useState(false);
    const shoesArray = useSelector((state) => state.getData);
    const [shoe, setShoe] = useState([]);

    useEffect(() => {
        setShoe(shoesArray.find((shoe) => shoe.id === id));
    }, [shoeDeleted]);

    const deleteDataFromApi = async () => {
        try {
            const axiosInstance = axios.create({ baseURL: Api });
            await axiosInstance.delete(`shoes/${id}`);
            shoesArray.splice(shoesArray.find((shoe) => shoe.id === id), 1)
            setShoeDeleted(true);
        } catch(err) {
            console.log(err);
        }
    }

    const renderShoe = () => {
        return (
            <div className="shoe">
                <div className="shoe-content">
                    <img className="shoe-image" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1556226/nike-sneaker-clipart-md.png" alt="image" />
                    <Link to={`edit/${shoe.id}`} style={{textDecoration:"none"}}>
                        <div className="shoe-details">
                            <p>{`Company: ${shoe.company}`}</p>
                            <p>{`Type: ${shoe.type}`}</p>
                            <p>{`Size: ${shoe.size}`}</p>
                            <p>{`Price: ${shoe.price}$`}</p>
                        </div>
                    </Link>
                </div>
                <button className="ui button red delete-shoe" onClick={deleteDataFromApi}>Delete</button>
            </div>
        );
    }

    return (
        <div  className="shoe-container">
            {!shoeDeleted && renderShoe()}
        </div>
    );

}