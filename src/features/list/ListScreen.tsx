import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { selectFilteredPlaces } from '../../redux/placesSlice';
import { Container, Row, Col } from 'react-bootstrap';
import ListHeader from '../../components/ListHeader';
import PlaceCard from '../../components/PlaceCard';
import NoDataFound from '../../components/NoDataFound';
import { useToggleVisited } from '../../hooks/useToggleVisited';
import './list.css';

const ListScreen = () => {
  const { toggleHandler } = useToggleVisited();
  const filteredPlaces = useSelector((state: RootState) =>
    selectFilteredPlaces(state.places)
  );
  const placeCount = useMemo(() => filteredPlaces.length, [filteredPlaces]);

  return (
    <Container>
      <Row className="g-4 my-4">
        <ListHeader placesCount={placeCount} />
      </Row>
      {placeCount ? (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 my-4">
          {filteredPlaces.map((place) => (
            <Col key={place.id}>
              <PlaceCard handleToggleVisited={toggleHandler} place={place} />
            </Col>
          ))}
        </Row>
      ) : (
        <Container className="d-flex flex-column align-items-center justify-content-center text-center vh-100">
          <NoDataFound label="place" />
        </Container>
      )}
    </Container>
  );
};

export default ListScreen;
