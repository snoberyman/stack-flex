import Card from "react-bootstrap/Card";
import ToolSelect from "../components/ToolSelect";
import { useState } from "react";

import "./ToolDisplay.css";
// tool display box and select options of tools
function ToolDisplay({ title, toolOptions }) {
  // state of dropdonw options. updated based on select and unselect
  const [options, setOptions] = useState(toolOptions);
  // state of selected tools for Application display
  const [selected, setSelected] = useState([]);

  // funcion to update tools selected for Application display
  const handleUpdateSlected = (selectedOption) => {
    if (selected) {
      setSelected([...selected, selectedOption]);
    } else {
      setSelected(selectedOption);
    }
  };

  return (
    <div className="col-12 col-md-3 mb-4">
      <h4 className="tool-display-title">{title}</h4>
      <Card.Body className="tool-display-card">
        {/* selected tools are listed to view */}
        <div>
          {selected.map((tool) => {
            return tool.value;
          })}
        </div>
      </Card.Body>
      <div className="tool-select-container">
        <ToolSelect
          selected={setSelected}
          updateSlected={handleUpdateSlected}
          options={options}
          setOptions={setOptions}
        />
      </div>
    </div>
  );
}

export default ToolDisplay;
