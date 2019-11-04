import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <header>
    <h1>Dev Wallet</h1>
    <NavLink to="/" exact={true} activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/Create" activeClassName="is-active">
      Create
    </NavLink>
    <NavLink to="/Edit" activeClassName="is-active">
      Edit
    </NavLink>
    <NavLink to="/Help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);
