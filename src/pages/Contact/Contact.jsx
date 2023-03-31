import React, { useEffect } from 'react';
import { ContactItem } from '../../components/ContactItem/ContactItem';
import { contacts } from '../../data/data';

export const Contacts = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = 'Brain School | Контакты';
  });

  return (
    <section className="contact">
      <h2 className="contact__title">Контакты</h2>
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          { ...contact }
        />
      ))}
    </section>
  );
}
