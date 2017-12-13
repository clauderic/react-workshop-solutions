import React, {Component} from 'react';
import {render} from 'react-dom';

import WorkshopBoilerplate from '../../src';
import '../../styles.css';

const DummyComponent = () => <div>Hello World</div>;

const ROUTES = [
  {id: 'context', label: 'Context', component: DummyComponent, showSolution: true},
  {id: 'lifting-state-up', label: 'Lifting State Up', component: DummyComponent, showSolution: true},
  {id: 'lists', label: 'Rendering Lists', component: DummyComponent, showSolution: true},
  {id: 'lifecycle-unmount', label: 'Lifecycle Methods - Unmount', component: DummyComponent, showSolution: true},
  {id: 'forms', label: 'Forms', component: DummyComponent, showSolution: true},
  {id: 'refs', label: 'Using Refs', component: DummyComponent, showSolution: true},
  {id: 'forms', label: 'Forms', component: DummyComponent, showSolution: true},
];

render(<WorkshopBoilerplate routes={ROUTES} />, document.querySelector('#demo'));
