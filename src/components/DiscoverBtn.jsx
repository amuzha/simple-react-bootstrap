import React from 'react';

import { Button } from 'react-bootstrap';

class DiscoverBtn extends React.Component {
  scrollToDestination = () => {
    const { destinationId } = this.props;
    const destinationElement = document.getElementById(destinationId);

    if (destinationElement) {
      destinationElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID '${destinationId}' not found.`);
    }
  };

  render() {
    return (
      <Button variant="primary" onClick={this.scrollToDestination} size="lg">Discover Me</Button>
    );
  }
}

export default DiscoverBtn;
