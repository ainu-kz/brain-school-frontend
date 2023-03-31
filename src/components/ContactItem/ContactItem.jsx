import React from 'react';

export const ContactItem = (
  {
    name,
    description,
    address,
    dataInfo
  }
) => {
  return (
    <div className="contact-item">
      <h3 className="contact-item__name">{name}</h3>
      <div className="contact-item__data">
        <p className="contact-item__description">{description}</p>
        <p className="contact-item__address">{address}</p>

        <h4 className="contact-item__subtitle">Информация для связи</h4>
        <a
          href={`mailto: ${dataInfo.mail}`}
          className="contact-item__data-info"
        >
          {dataInfo.mail}
        </a>
        <a
          href={`tel: ${dataInfo.tel}`}
          className="contact-item__data-info"
        >
          {dataInfo.tel}
        </a>
      </div>
    </div>
  );
}
