import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

export const App = () => (
  <div className="App">
    <section className="Person">
      <Person name="Misha" age={37} partner="wife" />
    </section>

    <section className="Person">
      <Person name="Olya" partner="husband" />
    </section>

    <section className="Person">
      <Person name="Alex" age={25} partner="" />
    </section>
  </div>
);
