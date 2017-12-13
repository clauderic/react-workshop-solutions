import React, {Component} from 'react';
import {render} from 'react-dom';

import WorkshopBoilerplate from '../../src';
import '../../styles.css';

const DummyComponent = () => <div>Hello World</div>;

const ROUTES = [
  {id: 'refs', label: 'Using Refs', component: DummyComponent, showSolution: true},
  {id: 'component', label: 'Components', component: DummyComponent, showSolution: true},
  {id: 'events-state', label: 'Events & State', component: DummyComponent, showSolution: true},
];

render(<WorkshopBoilerplate routes={ROUTES} />, document.querySelector('#demo'));
