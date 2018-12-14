import React, { Component } from 'react';
import './Product.css';

class product extends Component {
  render() {
    const list = Object.keys(this.props.result).map((igKey) => {
      if (this.props.result[igKey] !== 'NULL') {
        return (
          <div className="flexbox" key={igKey}>
            <li>
              <span className="key">{igKey}</span>
              :
              {' '}
              <span className="value">{this.props.result[igKey]}</span>
            </li>
          </div>);
      }
      return '';
    });
    return (
      <div>
        <ul className="list">
          {list}
        </ul>
      </div>
    );
  }
}
export default product;
