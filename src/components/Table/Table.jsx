import React from 'react';

function Table() {
  return (
    <div className="page__section page__table table">
      <div className="table__row table__row_title">
        <div className="table__title table__title_time">время</div>
        <div className="table__title table__title_open">курс</div>
        <div className="table__title table__title_address">адрес</div>
        <div className="table__title table__title_contact">контакты</div>
      </div>
      <div className="table__row">
        <div className="table__time _closed">23:05</div>
        <div className="table__open _closed">Логика</div>
        <div className="table__contact">
          <div className="table__contact_address">
            <span>address</span>
            <p className="table__contact_address-info">
              Oude Amersfoortseweg 125
            </p>
            <p className="table__contact_address-info">1212AA Hilversum</p>
            <p className="table__contact_address-info">The Netherlands</p>
          </div>
          <div className="table__contact_contact">
            <span>contact</span>
            <a
              href="mailto: hilversum@mediamonks.com"
              className="table__contact_link"
            >
              hilversum@mediamonks.com
            </a>
            <a href="tel: +31 35 621 21 50" className="table__contact_link">
              +31 35 621 21 50
            </a>
          </div>
        </div>
      </div>
      <div className="table__row">
        <div className="table__time _closed">10:00</div>
        <div className="table__open _closed">Речь</div>
        <div className="table__contact">
          <div className="table__contact_address">
            <span>address</span>
            <p className="table__contact_address-info">010000</p>
            <p className="table__contact_address-info">Nur-Sultan city</p>
            <p className="table__contact_address-info">Saryarka Avenue 6</p>
            <p className="table__contact_address-info">Room 1</p>
            <p className="table__contact_address-info">Office 1310</p>
            <p className="table__contact_address-info">Kazakhstan</p>
          </div>
          <div className="table__contact_contact">
            <span>contact</span>
            <a
              href="mailto: nursultan@mediamonks.com"
              className="table__contact_link"
            >
              nursultan@mediamonks.com
            </a>
            <a href="tel: +7 (7172) 790389" className="table__contact_link">
              +7 (7172) 790389
            </a>
          </div>
        </div>
      </div>
      <div className="table__row">
        <div className="table__time">23:05</div>
        <div className="table__open">Мнемотехника</div>
        <div className="table__contact">
          <div className="table__contact_address">
            <span>address</span>
            <p className="table__contact_address-info">Danzigerbocht 41C</p>
            <p className="table__contact_address-info">1013 AM Amsterdam</p>
            <p className="table__contact_address-info">The Netherlands</p>
          </div>
          <div className="table__contact_contact">
            <span>contact</span>
            <a
              href="mailto: amsterdam@mediamonks.com"
              className="table__contact_link"
            >
              amsterdam@mediamonks.com
            </a>
            <a href="tel: +31 20 820 24 25" className="table__contact_link">
              +31 20 820 24 25
            </a>
          </div>
        </div>
      </div>
      <div className="table__row">
        <div className="table__time">7:00</div>
        <div className="table__open">Нейробика</div>
        <div className="table__contact">
          <div className="table__contact_address">
            <span>address</span>
            <p className="table__contact_address-info">109012</p>
            <p className="table__contact_address-info">
              per. Malyy Cherkasskiy, 2
            </p>
            <p className="table__contact_address-info">Cabinet Lounge</p>
            <p className="table__contact_address-info">Moscow</p>
            <p className="table__contact_address-info">Russia</p>
          </div>
          <div className="table__contact_contact">
            <span>contact</span>
            <a
              href="mailto: moscow@mediamonks.com"
              className="table__contact_link"
            >
              moscow@mediamonks.com
            </a>
            <a href="tel: +7 499 110 44 75" className="table__contact_link">
              +7 499 110 44 75
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
