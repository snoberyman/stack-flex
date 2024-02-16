import Card from "react-bootstrap/Card";
import ToolSelect from "../components/ToolSelect";

import "./ToolDisplay.css";

// tool display box and select use
function ToolDisplay({ title }) {
  return (
    <div className="col-12 col-md-3 mb-4">
      <h4 className="tool-display-title">{title}</h4>
      <Card.Body className="tool-display-card">
        {/* tool display tools listed */}
      </Card.Body>
      <div className="tool-select-container">
        <ToolSelect />
      </div>
    </div>
  );
}

export default ToolDisplay;
