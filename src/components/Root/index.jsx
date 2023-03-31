import React from 'react';
import Footer from '../Footer';
import Table from '../Table/Table';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import "./Root.css";

function Root() {
  return (
    <div className="page__content">
      <Header />
      <Outlet />
      <Table />
      <Footer />
    </div>
  );
}

export default Root;
