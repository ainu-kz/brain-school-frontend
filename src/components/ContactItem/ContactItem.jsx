import React from 'react';

function ContactItem(props) {
  return (
    <div className="contact-item">
      <h3 className="contact-item__name">{props.name}</h3>
      <div className="contact-item__data">
        <p className="contact-item__description">{props.description}</p>
        <p className="contact-item__address">{props.address}</p>
        <a
          href={`mailto: ${props.mail}`}
          className="contact-item__contact-data"
        >
          {props.mail}
        </a>
        <a href={`tel: ${props.tel}`} className="contact-item__contact-data">
          {props.tel}
        </a>
        <h4 className="contact-item__subtitle">contact</h4>
        <a
          href={`mailto: ${props.dataInfo.mail}`}
          className="contact-item__data-info"
        >
          {props.dataInfo.mail}
        </a>
        <a
          href={`tel: ${props.dataInfo.tel}`}
          className="contact-item__data-info"
        >
          {props.dataInfo.tel}
        </a>
      </div>
    </div>
  );
}

export default ContactItem;
