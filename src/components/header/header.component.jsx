import { dataFilterAction } from '../../store/actions/actions.js';
import { useDispatch, useSelector } from 'react-redux';
import './header.styles.scss';

export default function Header() {

    const dispatch = useDispatch();
    const filterValue = useSelector((state) => state.dataFilter)

    const getFilterString = (e) => {
        dispatch(dataFilterAction(e.target.value))
    }

    return (
        <div className="filter-container">
            <h1>My Shoe Collection</h1>
            <input className="filter" onChange={(e) => {getFilterString(e)}} type="text" placeholder="Company Name Filter" value={filterValue} />
        </div>
    );
}