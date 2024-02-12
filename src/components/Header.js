import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className=" py-1">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-12 text-center">
              <h1 className="hero-h1">
                Organize, Visualize and Display Your Tech Stack!{" "}
              </h1>
              <p className="hero-p pb-2">
                Explore Tools, Streamline and Showcase Your Toolset
                Effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
