import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { ROUTE } from '../utils/constant';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center py-5">
      <h1 className="display-4 text-danger">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="mb-4">
        Oops! The page you're looking for doesn't exist. It might have been
        moved or deleted.
      </p>
      <Button variant="primary" onClick={() => navigate(ROUTE.DEFAULT)}>
        Go Back to Home
      </Button>
    </Container>
  );
};

export default Error404;
