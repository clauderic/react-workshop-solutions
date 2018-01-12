import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Card, Stack, Heading, Page, Select, Tabs} from '@shopify/polaris';
import SOLUTIONS from './solutions';

import '@shopify/polaris/styles.css';

export default class WorkshopBoilerplate extends Component {
  state = {
    routeIndex: parseInt(localStorage.getItem('currentRouteIndex'), 0) || 0,
    selectedTab: 0,
  };

  componentDidMount() {
    document.addEventListener('click', (event) => {
      if (event.target instanceof HTMLButtonElement) {
        event.target.blur();
      }
    });
  }

  handleTabSelect = (tabIndex) => {
    this.setState({
      selectedTab: tabIndex,
    });
  }

  handleRouteChange = (index) => {
    this.setState({
      selectedTab: 0,
      routeIndex: index,
    });

    localStorage.setItem('currentRouteIndex', index);
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
              onChange={this.handleRouteChange}
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
                        content: 'Exercise'
                      },
                      {
                        id: 'solution',
                        content: 'Solution'
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
