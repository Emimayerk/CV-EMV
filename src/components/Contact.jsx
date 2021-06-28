import React from "react";

import "../css/Contact.css";

import QRCode from "qrcode.react";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="block-contact">
        <div className="title-contact">
          <h2>CONTACTO</h2>
        </div>
        <div className="box-qr">
          <div className="description-qr">
            <h5>GMAIL</h5>
            <QRCode
              className="qr-img"
              value="mailto: emilianomayerviegas@gmail.com"
              size="85"
              bgColor="#272727"
              fgColor="#fff"
            />
          </div>
          <div className="description-qr">
            <h5> TELÉFONO </h5>

            <QRCode
              className="qr-img"
              value="tel:+543465405225"
              size="85"
              bgColor="#272727"
              fgColor="#fff"
            />
          </div>
          <div className="description-qr">
            <h5>WHATSAPP</h5>

            <QRCode
              className="qr-img"
              value="https://api.whatsapp.com/send?phone=+543465405225"
              size="85"
              bgColor="#272727"
              fgColor="#fff"
            />
          </div>
          <div className="description-qr">
            <h5>LINKEDIN</h5>

            <QRCode
              className="qr-img"
              value="https://www.linkedin.com/in/emiliano-mayer-viegas-03a0a41b2/"
              size="85"
              bgColor="#272727"
              fgColor="#fff"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <h6>
          DEVELOPED BY <strong id="emi">EMILIANO MAYER VIEGAS</strong>
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Contact;
