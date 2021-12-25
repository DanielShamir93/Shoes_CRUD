import { useEffect } from 'react';
import Api from './../../../api.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../../../store/actions/actions.js';
import Shoe from '../../../components/shoe/shoe.component';
import Header from '../../../components/header/header.component';

export default function Shoes() {

    const dispatch = useDispatch();
    const shoesData = useSelector((state) => state.getData);
    const filterState = useSelector((state) => state.dataFilter);
    
    useEffect(() => {
        const getDataFromApi = (async () => {
            try {
                const axiosInstance = axios.create({ baseURL: Api });
                const { data } = await axiosInstance.get('shoes');
                dispatch(getDataAction(data));
            } catch(err) {
                console.log(err);
            }
        })
        getDataFromApi()
    }, []);

    const renderItems = () => {
        const shoes = shoesData.filter((shoe) => {return shoe.company.toLowerCase().includes(filterState.toLowerCase())});
        return shoes.map((shoe) => {
            return <Shoe key={shoe.id} id={shoe.id} />
        })
    }

    return (
        <div>
            <Header />
            {renderItems()}
        </div>
    );

}