import React from "react";
import "../../../App.scss";
import image1 from "./Assets/image1.svg";
import image2 from "./Assets/image2.svg";
import image3 from "./Assets/image3.svg";
import image4 from "./Assets/image4.svg";


export class LandingFooter extends React.Component {
  render() {
    return (
      <>
        <div className=" landing__footer">

          <div className="row">
            <div className="col-1-of-4">
              <p className="bold_font u-padding-min">DesignHeaven</p>
              <p className="u-padding-min">About Us</p>
              <p className="u-padding-min">Testimonals</p>
              <p className="u-padding-min">FAQS</p>
              <p className="u-padding-min">Contact</p>
            </div>
            <div className="col-1-of-4">
              <p className="bold_font u-padding-min">Competition </p>
              <p className="u-padding-min">Start Competition</p>
              <p className="u-padding-min">Current Competitions</p>
              <p className="u-padding-min">Previous Competition </p>
              <p className="u-padding-min">How it works?</p>
            </div>
            <div className="col-1-of-4">
              <p className="bold_font u-padding-min">Designer </p>
              <p className="u-padding-min">Apply</p>
              <p className="u-padding-min">Contact Us</p>
              <p className="u-padding-min">&nbsp;</p>
              <p className="u-padding-min">&nbsp;</p>
            </div>
            <div className="col-1-of-4">
              <p className="bold_font u-padding-min">Report</p>
              <p className="u-padding-min">File a complaint</p>
              <p className="u-padding-min">&nbsp;</p>
              <p className="u-padding-min">&nbsp;</p>
              <p className="u-padding-min">&nbsp;</p>
            </div>
          </div>

          <hr className="line1" />

          <div className="social_media">
            {/* <p className="gray-filter" style={{ fontSize: "1px" }}>
              <larger>© DesignHeaven</larger> &nbsp; &nbsp;
            </p> */}
            <div className="social_media_div">
              <img
                src={image2}
                className="gray-filter social_media_img"
                alt=""
              />
              <img
                src={image1}
                className="gray-filter social_media_img"
                alt=""
              />
              <img
                src={image3}
                className="gray-filter social_media_img"
                alt=""
              />
              <img
                src={image4}
                className="gray-filter social_media_img"
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
