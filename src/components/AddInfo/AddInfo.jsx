import { Link } from 'react-router-dom';
import { AddInfoBox } from './AddInfo.styled';

const AddInfo = () => {
  return (
    <AddInfoBox>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </AddInfoBox>
  );
};

export default AddInfo;
