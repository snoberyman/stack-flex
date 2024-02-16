import Card from "react-bootstrap/Card";
import "./ToolDisplay.css";

function ToolDisplay() {
  return (
    <div className="col-12 col-md-3 mb-4">
      <Card.Body className="tool-display-card">
        {/* tool display tools listed */}
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </div>
  );
}

export default ToolDisplay;
