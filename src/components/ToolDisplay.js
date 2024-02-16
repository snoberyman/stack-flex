import Card from "react-bootstrap/Card";
import "./ToolDisplay.css";

function ToolDisplay({ title }) {
  return (
    <div className="col-12 col-md-3 mb-4">
      <h4 className="tool-display-title">{title}</h4>
      <Card.Body className="tool-display-card">
        {/* tool display tools listed */}
      </Card.Body>
    </div>
  );
}

export default ToolDisplay;
