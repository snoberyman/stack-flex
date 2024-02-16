import ToolDisplay from "../components/ToolDisplay";

function Display() {
  return (
    <>
      {/* main section of four tool displays container */}
      <div className="container" style={{ width: "100%" }}>
        <div className="row row-cols-1  row-cols-lg-4">
          <ToolDisplay />
          <ToolDisplay />
          <ToolDisplay />
          <ToolDisplay />
        </div>
      </div>
    </>
  );
}

export default Display;
