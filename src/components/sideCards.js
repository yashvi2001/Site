import React from "react";
import Data from "../data/info.js";
import "./sideCards.css";
function SideCard() {
  return (
    <>
      <div class="item2">
        <div className="sideCard">
          <div className="sideCard-header">
            <h3>
              <a
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                href="mailto:yashvimahapatra201@gmail.com"
              >
                Contact Me
              </a>
            </h3>
          </div>
        </div>
        {Data.map((data, index) => {
          return (
            <div className="card">
              <div className="container">
                <p>
                  <strong>{data.type}</strong>
                </p>
                {data.content.map((content) => {
                  return (
                    <p>
                      {content.object}
                      <br />
                      <a style={{ color: "grey", fontSize: "13px" }}>
                        <i>{content.title}</i>
                      </a>

                      {content.date ? (
                        <a
                          style={{
                            color: "grey",
                            fontSize: "11px",
                            float: "right",
                          }}
                        >
                          {content.date}
                        </a>
                      ) : (
                        <button style={{ float: "right" }}>
                          {" "}
                          <a
                            style={{
                              color: "grey",
                              fontSize: "13px",
                              textDecoration: "none",
                            }}
                            target="_blank"
                            href={content.link}
                          >
                            View
                          </a>
                        </button>
                      )}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SideCard;
