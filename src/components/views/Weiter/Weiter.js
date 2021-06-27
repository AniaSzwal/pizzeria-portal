import React from 'react';
import styles from './Weiter.module.scss';
import {Link} from "react-router-dom";

const Weiter = () => (
  <div className={styles.component}>
    <h2>Weiter view</h2>
    <Link to={`${process.env.PUBLIC_URL}/weiter/order/new`} activeClassName='active'>New order</Link>
    <Link to={`${process.env.PUBLIC_URL}/weiter/order/123abc`} activeClassName='active'>Orders</Link>
  </div>
);

export default Weiter;
