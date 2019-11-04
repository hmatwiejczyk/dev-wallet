import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <header>
    <h1>Dev Wallet</h1>
    <NavLink to="/" exact={true} activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);
