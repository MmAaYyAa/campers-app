import { useSelector } from 'react-redux';
import CamperCard from '../CamperCard/CamperCard';
import { selectCampers } from '../../redux/catalog/catalogSelectors';

export default function CamperList() {
  const campers = useSelector(selectCampers);
  return (
    <>
      <ul>
        {campers.map((camper,index) => (
          <li key={index}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
    </>
  );
}