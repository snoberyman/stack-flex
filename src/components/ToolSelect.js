// import { useState } from "react";
import Select from "react-select";
import { useState } from "react";
import { customStyles } from "../Data/toolOptions";

// tool select
function ToolSelect({ updateSlected, options, setOptions }) {
  const [selectedOption, setSelectedOption] = useState(null);

  // function to handle selecting from dropdown
  const handleChange = (selectedOption) => {
    // update state in Display
    updateSlected(selectedOption);
    // empty selected tool
    setSelectedOption(null);
    // remove selected tool from the list
    setOptions(
      options.filter((option) => option.value !== selectedOption.value)
    );
  };

  return (
    <>
      <Select
        styles={customStyles}
        placeholder={"Search.."}
        className="basic-single"
        classNamePrefix="select"
        // defaultValue={colourOptions[0]}
        // isDisabled={isDisabled}
        // isLoading={isLoading}
        // isClearable="true"
        // isRtl={isRtl}
        isSearchable="true"
        name="Tool"
        key={options.length} // Force re-render when options change
        value={selectedOption}
        options={options}
        onChange={handleChange}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "#FF751533",
            primary: "#CCCCCC77",
            primary50: "#FF751533",
            primary75: "#FF751533",
          },
        })}
      />
    </>
  );
}

export default ToolSelect;
