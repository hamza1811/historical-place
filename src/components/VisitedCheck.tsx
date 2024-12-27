import { Form } from 'react-bootstrap';

type Props = {
  id: number;
  visited: boolean;
  changeHandler: (id: number) => void;
};

const VisitedCheck = ({ changeHandler, id, visited }: Props) => {
  return (
    <>
      <strong>Have you visited ? </strong>
      <Form.Check
        className="mb-0 mx-2 visited-checkbox"
        type="checkbox"
        id={`visited-checkbox-${id}`}
        label={visited ? 'Yes' : 'No'}
        checked={visited}
        onChange={() => changeHandler(id)}
      />
    </>
  );
};

export default VisitedCheck;
