import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Card, Stack, Heading, Page, Select, Tabs} from '@shopify/polaris';

import '@shopify/polaris/styles.css';

const SOLUTIONS = {
  'component': require('./solutions/component').default,
  'events-state': require('./solutions/events-state').default,
  'lifecycle-mount': require('./solutions/lifecycle-mount').default,
  'lifecycle-unmount': require('./solutions/lifecycle-unmount').default,
  'lifting-state-up': require('./solutions/lifting-state-up').default,
  'lists': require('./solutions/lists').default,
};

export default class WorkshopBoilerplate extends Component {
  state = {
    routeIndex: 0,
    selectedTab: 0,
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
