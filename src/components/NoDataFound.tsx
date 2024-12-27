type Props = {
  label: string;
};

const NoDataFound = ({ label }: Props) => {
  return (
    <>
      <h1 className="text-muted mb-3">No {label} found</h1>
      <p className="text-secondary mb-4">
        It seems like there is no {label} available at the moment. Please try
        again later.
      </p>
    </>
  );
};

export default NoDataFound;
