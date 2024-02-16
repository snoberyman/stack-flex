import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className=" py-1">
        <div className="container my-5  header-container">
          <div className="row align-items-center ">
            <div className="col-lg-12 text-center">
              {/* main header title */}
              <h1 className="hero-h1">
                Organize, Visualize and Display Your Tech Stack{" "}
              </h1>
              {/* main header subtitle */}
              <p className="hero-p pb-2">
                Explore Tools, Streamline and Showcase Your Toolsets Efficiently
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
