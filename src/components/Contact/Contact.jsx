import React, { useEffect } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { contacts } from '../../data/data';

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = 'MediaMonksClone | Contact';
  });

  return (
    <section className="contact">
      <h2 className="contact__title">contact</h2>
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          name={contact.name}
          description={contact.description}
          address={contact.address}
          mail={contact.mail}
          tel={contact.tel}
          dataInfo={contact.dataInfo}
        />
      ))}
    </section>
  );
}

export default Contact;
