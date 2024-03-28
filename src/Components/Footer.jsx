import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        {/* <p>Powered by</p> */}
        <img src="/public/images/DH.png" alt="DH-logo" />
        <div>
          <img
            className="image-1"
            src="/public/images/ico-facebook.png"
            alt="DH-logo2"
          />
          <img
            className="image-1"
            src="/public/images/ico-instagram.png"
            alt="DH-logo3"
          />
          <img
            className="image-1"
            src="/public/images/ico-tiktok.png"
            alt="DH-logo4"
          />
          <img
            className="image-1"
            src="/public/images/ico-whatsapp.png"
            alt="DH-logo5"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
