import React from 'react';
import Search from './Search';
import { Container } from 'react-bootstrap';

type Props = {
  placesCount: number;
};

const ListHeader = ({ placesCount }: Props) => {

  return (
    <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      {/* Title and Total Places */}
      <h3 className="mb-3 mb-md-0">Total Places: {placesCount}</h3>

      {/* Search Input and Random Place Button */}
      <div className="d-flex align-items-center gap-3">
        <Search />
      </div>
    </Container>
  );
};

export default React.memo(ListHeader);
