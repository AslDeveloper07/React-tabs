import React, { useState } from "react";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="tabs-block">
        <div
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        >
          Tab1
        </div>
        <div
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        >
          Tab2
        </div>
        <div
          onClick={() => toggleTab(3)}
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        >
          Tab3
        </div>
      </div>

      <div className="tabs-content">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <h2>
            content1
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              rem. Assumenda placeat aut, ad corrupti obcaecati rem magnam vitae
              consectetur accusamus quam nisi omnis perspiciatis officiis
              dignissimos in, officia ea tempore facilis quasi impedit beatae
              quisquam inventore modi maxime!
            </p>
          </h2>
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>
            content2
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              rem. Assumenda placeat aut, ad corrupti obcaecati rem magnam vitae
              consectetur accusamus quam nisi omnis perspiciatis officiis
              dignissimos in, officia ea tempore facilis quasi impedit beatae
              quisquam inventore modi maxime!
            </p>
          </h2>
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <h2>
            content3
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              rem. Assumenda placeat aut, ad corrupti obcaecati rem magnam vitae
              consectetur accusamus quam nisi omnis perspiciatis officiis
              dignissimos in, officia ea tempore facilis quasi impedit beatae
              quisquam inventore modi maxime!
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
