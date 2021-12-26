import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Api from '../../../api.js';
import './editShoe.styles.scss';

export default function EditShoe() {

    const id = useParams().id;
    const [shoe, setShoe] = useState({
        id: 0,
        company: '',
        type: '',
        size: '',
        price: '',
    });
    const [shoeUpdated, setShoeUpdated] = useState(0);
    const shoesArray = useSelector((state) => {
        return state.getData;
    });

    useEffect(() => {
        if (shoesArray.length > 0) {
            const currentShoe = shoesArray.find((shoe) => shoe.id === id);
            setShoe(currentShoe);
        }
    }, [shoeUpdated, id]);

    const setValue = (e) => {
        const shoeDetails = shoe;
        shoeDetails[e.target.id] = e.target.value;
        setShoe(shoeDetails);
        setShoeUpdated(shoeUpdated + 1);
    }

    const editDataOnApi = (async () => {
        try {
            const axiosInstance = axios.create({ baseURL: Api });
            await axiosInstance.put(`shoes/${id}`, shoe);
        } catch(err) {
            console.log(err);
        }
    })

    const renderEditShoe = () => {
        return (
            <div className="edit-shoe">
                <div className="edit-shoe-details">
                    <div>
                        <label htmlFor="company">Company: </label>
                        <input id="company" onChange={(e) => {setValue(e)}} value={shoe.company} />
                    </div>
                    <div>
                        <label htmlFor="type">Type: </label>
                        <input id="type" onChange={(e) => {setValue(e)}} value={shoe.type} />
                    </div>
                    <div>
                        <label htmlFor="size">Size: </label>
                        <input type="number" id="size" onChange={(e) => {setValue(e)}} value={shoe.size} />
                    </div>
                    <div>
                        <label htmlFor="price">Price: </label>
                        <input type="number" id="price" onChange={(e) => {setValue(e)}} value={shoe.price} />
                    </div>
                </div>
                <Link to="/">
                    <button className="ui button secondary">Back</button>
                    <button className="ui button primary" onClick={editDataOnApi}>Save</button>
                </Link>
            </div>
        );
    }

    return (
        <div>
            {renderEditShoe()}
        </div>
    );

}