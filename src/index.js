import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Card, Stack, Heading, Page, Select, Tabs} from '@shopify/polaris';

import '@shopify/polaris/styles.css';

import Components from './solutions/component';
import EventsState from './solutions/events-state';
import LifecycleMount from './solutions/lifecycle-mount';
import LifecycleUnmount from './solutions/lifecycle-unmount';
import LiftingStateUp from './solutions/lifting-state-up';
import Lists from './solutions/lists';
import Refs from './solutions/refs';

const SOLUTIONS = {
  'component': Components,
  'events-state': EventsState,
  'lifecycle-mount': LifecycleMount,
  'lifecycle-unmount': LifecycleUnmount,
  'lifting-state-up': LiftingStateUp,
  'lists': Lists,
  'refs': Refs,
};

export default class WorkshopBoilerplate extends Component {
  state = {
    routeIndex: 0,
    selectedTab: 0,
  };

  componentDidMount() {
    document.addEventListener('click', (event) => {
      if (event.target instanceof HTMLButtonElement) {
        event.target.blur();
      }
    });
  }

  handleTabSelect = (tab) => {
    this.setState({
      selectedTab: tab,
    })
  }

  render() {
    const {routes} = this.props;
    const {routeIndex, selectedTab} = this.state;
    const {component: Route, showSolution, id} = routes[routeIndex];

    return (
      <div>
        <div className="select-wrapper">
          <Stack alignment="center">
            <Heading>Lecture:</Heading>
            <Select
              value={routeIndex}
              options={routes.map(({label}, index) => ({label, value: index}))}
              placeholder="Select"
              onChange={(index) => this.setState({routeIndex: index})}
            />
          </Stack>
        </div>
        <Page>
          <Card>
            <Card.Section>
              {!showSolution
                ? <Route />
                : (
                  <Tabs
                    onSelect={this.handleTabSelect}
                    selected={selectedTab}
                    tabs={[
                      {
                        id: 'exercise',
                        title: 'Exercise'
                      },
                      {
                        id: 'solution',
                        title: 'Solution'
                      },
                    ]}
                  >
                    <div className="tab-content">
                      {selectedTab === 0
                        ? <Route />
                        : React.createElement(SOLUTIONS[id])
                      }
                    </div>
                  </Tabs>
                )
              }
            </Card.Section>
          </Card>
        </Page>
      </div>
    );
  }
}
