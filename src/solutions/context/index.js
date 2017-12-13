// -------------------------------------------------------------------------- //
// Using context to transparently pass data down to deeply nested components
// -------------------------------------------------------------------------- //

import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  static childContextTypes = {
    currency: PropTypes.string,
    locale: PropTypes.string,
  };

  getChildContext() {
    return {
      currency: 'CAD',
      locale: 'en-CA',
    };
  }

  render() {
    return (
      <ul>
        <li><Price value={20} /></li>
        <li><Price value={15} /></li>
      </ul>
    );
  }
}

class Price extends React.Component {
  static propTypes = {
    value: PropTypes.number,
  };

  static contextTypes = {
    currency: PropTypes.string,
    locale: PropTypes.string,
  };

  render() {
    const {value} = this.props;
    const {locale, currency} = this.context;
    const localizedPrice = value.toLocaleString(locale, {
      style: 'currency',
      currency,
    })

    return (
      <span>
        {localizedPrice}
      </span>
    );
  }
}
