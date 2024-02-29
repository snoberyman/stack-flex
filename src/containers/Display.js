import ToolDisplay from "../components/ToolDisplay";

import { toolOptionsApplication, toolOptionsServer } from "../Data/toolOptions";

function Display() {
  return (
    <>
      {/* the container of the four tool displays  */}
      <div className="container" style={{ width: "100%" }}>
        <div className="row row-cols-1  row-cols-lg-4">
          {/* application tools display */}
          <ToolDisplay
            title={"Application"}
            toolOptions={toolOptionsApplication}
          />
          {/* server tools display */}
          <ToolDisplay title={"Server"} toolOptions={toolOptionsServer} />
          {/* <ToolDisplay title={"Database"} />
          <ToolDisplay title={"DevOps"} /> */}
        </div>
      </div>
    </>
  );
}

export default Display;
