// import { useState } from "react";
import Select from "react-select";
import { toolOptions, customStyles } from "../Data/toolOptions";

// tool select
function ToolSelect() {
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
        isClearable="true"
        // isRtl={isRtl}
        isSearchable="true"
        name="Tool"
        options={toolOptions}
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
