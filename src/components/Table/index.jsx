import React from 'react';
import './styles.scss';

function Table() {
  return (
    <div className="page__section page__table table">
      <div className="table__row table__row_title">
        <div className="table__title table__title_time">дата</div>
        <div className="table__title table__title_open">курс</div>
        <div className="table__title table__title_address">адрес</div>
        <div className="table__title table__title_contact">контакты</div>
      </div>
      <div className="table__row">
        <div className="table__time">01.09</div>
        <div className="table__open">Нейробика</div>
        <div className="table__contact">
          <div className="table__contact_address">
            <span>address</span>
            <p className="table__contact_address-info">
              Желтоксан 9
            </p>
            <p className="table__contact_address-info">Астана</p>
            <p className="table__contact_address-info">Казахстан</p>
          </div>
          <div className="table__contact_contact">
            <span>contact</span>
            <a
              href="mailto: astana@brainschool.kz"
              className="table__contact_link"
            >
              astana@brainschool.kz
            </a>
            <a href="tel: +7 707 128 51 54" className="table__contact_link">
              +7 707 128 51 54
            </a>
          </div>
        </div>
      </div>
      <div className="table__row">
        <div className="table__time">01.09</div>
        <div className="table__open">Логика</div>
        <div className="table__contact">
          <div className="table__contact_address">
            <span>address</span>
            <p className="table__contact_address-info">
              Желтоксан 9
            </p>
            <p className="table__contact_address-info">Астана</p>
            <p className="table__contact_address-info">Казахстан</p>
          </div>
          <div className="table__contact_contact">
            <span>contact</span>
            <a
              href="mailto: astana@brainschool.kz"
              className="table__contact_link"
            >
              astana@brainschool.kz
            </a>
            <a href="tel: +7 707 128 51 54" className="table__contact_link">
              +7 707 128 51 54
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
