import React, { useEffect } from 'react';
import FilterOffice from '../FilterOffice/FilterOffice';
import Vacancies from '../Vacancies/Vacancies';

export const Careers = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = 'Brain School | Расписание';
  }, []);

  return (
    <section className="careers">
      <h2 className="careers__title">careers</h2>

      <FilterOffice />
      <Vacancies />

      <h2 className="careers__applications">open applications</h2>
      <div className="careers__open-open">
        <div className="careers__inner">
          <p className="careers__open-open-text">
            Nothing that matches your skill set? We have awesome jobs for
            awesome people. Tell us about yourself and your trade and we may
            dream up your digital dream job just like that. Seriously, we’re
            open to open applications.
          </p>
        </div>
        <div className="careers__inner">
          <a
            href="https://apply.workable.com/mediamonks/j/0D7CC8F360/apply/"
            target="blank"
            className="careers__button"
          >
            apply for a job
          </a>
        </div>
      </div>
    </section>
  );
}
