/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="footer-row">
            <div className="item">
              <div className="copy-right">
                <p>
                Copyright © 2023, Franklin Uka.
                </p>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
