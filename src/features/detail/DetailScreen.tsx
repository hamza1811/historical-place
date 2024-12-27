import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Container, Row, Col } from 'react-bootstrap';
import { DataDisplay } from '../../components/DataDisplay';
import { useToggleVisited } from '../../hooks/useToggleVisited';
import VisitedCheck from '../../components/VisitedCheck';
import { Image } from '../../components/Image';
import './detail.css';
import { ROUTE } from '../../utils/constant';

const DetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toggleHandler } = useToggleVisited();
  const navigate = useNavigate();

  const place = useSelector((state: RootState) =>
    state.places.places.find((p) => p.id === parseInt(id || '0'))
  );

  if (!place) {
    return <p>Place not found. Please go back to the list.</p>;
  }

  const navigateToList = () => {
    navigate(ROUTE.DEFAULT);
  };

  return (
    <Container className="py-4">
      {/* Header Section */}
      <div className="d-flex align-items-center mb-4">
        <i
          className="fa fa-arrow-left me-3 back-icon"
          onClick={navigateToList}
          role="button"
        ></i>
        <h1 className="mb-0">{place.name}</h1>
      </div>

      {/* Two-Column Layout */}
      <Row className="align-items-start">
        {/* Left Column: Information */}
        <Col md={6}>
          <ul className="list-unstyled">
            <DataDisplay
              label="Interesting Fact"
              value={place.interestingFact}
            />
            <DataDisplay label="Location" value={place.location} />
            <DataDisplay label="Established" value={place.established} />
            <DataDisplay label="Entry Fee" value={place.entryFee} />
            <DataDisplay label="Timing" value={place.timing} />
            <DataDisplay label="Closing Day" value={place.closingDay} />

            <div className="d-flex">
              <VisitedCheck
                changeHandler={toggleHandler}
                id={place.id}
                visited={place.visited}
              />
            </div>
          </ul>
        </Col>

        {/* Right Column: Image */}
        <Col md={6} className="text-center">
          <Image alt={place.name} src={place.image} customClass="hero-image" />
        </Col>
      </Row>

      {/* Description Section */}
      <Row className="mt-4">
        <Col>
          <h5 className="mb-3">
            <strong>Description:</strong>
          </h5>
          <p className="overview-info">{place.overview}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailScreen;
