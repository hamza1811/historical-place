import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Place } from '../utils/types';
import VisitedCheck from './VisitedCheck';
import { Image } from './Image';
import { ROUTE } from '../utils/constant';

type Props = {
  place: Place;
  handleToggleVisited: (value: number) => void;
};

const PlaceCard = ({ place, handleToggleVisited }: Props) => {
  const detailRoute = ROUTE.DETAIL.replace(':id', place.id.toString());

  return (
    <Card className="h-100 d-flex flex-column">
      <Link to={detailRoute}>
        <Image
          alt={place.name}
          src={place.image}
          customClass="card-img-top place-img"
        />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-3">{place.name}</Card.Title>
        <Card.Text>{place.description}</Card.Text>
        <Card.Text className="d-flex">
          <VisitedCheck
            changeHandler={handleToggleVisited}
            id={place.id}
            visited={place.visited}
          />
        </Card.Text>
      </Card.Body>
      <Card.Footer className="mt-auto">
        <Link to={detailRoute} className="btn btn-primary w-100">
          Check Details
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default PlaceCard;
