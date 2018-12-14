import React, { Component } from 'react';
import { ControlLabel, Form, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { strSearch: '' };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch() {
    this.props.handleSearch(this.state.strSearch);
  }

  handleClear() {
    this.setState({ strSearch: '' });
    this.props.handleSearch('');
  }

  handleChange(event) {
    this.setState({ strSearch: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <Form horizontal>

            <Col componentClass={ControlLabel} sm={1}> Search </Col>
            <Col sm={4}>
              <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-search" /></span>
                <input
                  onChange={this.handleChange}
                  value={this.state.strSearch}
                  type="text"
                  className="form-control"
                  placeholder="Search by description..."
                />
              </div>
              <Button onClick={this.handleSearch} className="btn btn-primary" type="button">
                <i className="fas fa-search" />
                {' '}
Search
              </Button>
              <Button onClick={this.handleClear} className="btn btn-warning" type="button">
                {' '}
                <i className="fas fa-undo-alt" />
                {' '} Undo
              </Button>
            </Col>
          </Form>

        </div>

      </div>
    );
  }
}

export default Search;
