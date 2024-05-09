import React from 'react';

class Alert extends React.Component {
  capitalize = (msg) => {
    const lower = msg.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  render() {
    const { alert } = this.props;

    return (
      <div style={{ height: '50px' }}>
        {alert && (
          <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>{this.capitalize(alert.type)} </strong>: {alert.msg}
          </div>
        )}
      </div>
    );
  }
}

export default Alert;
