import { Button } from '@material-ui/core';

import React, { Component } from 'react';

export default class CommonButton extends Component {
  render() {
    const { buttonInnerText, ...attr } = this.props;
    return (
      <Button
        style={{ backgroundColor: '#222222', color: '#FFFFFF' }}
        {...attr}
      >
        {buttonInnerText}
      </Button>
    );
  }
}
