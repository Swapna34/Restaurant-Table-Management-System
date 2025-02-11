import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="btn btn-primary position-fixed top-0 start-0 m-3"
    >
      ← Back
    </button>
  );
};

export default BackButton;
