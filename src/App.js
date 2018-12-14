/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Products from './Components/Products';
import './App.css';
import Search from './Components/Search';
import Sort from './Components/Sort';
import Header from './Components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchVal: '',
      orderBy: null,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }
  componentDidMount() {
    function convertDate(inputFormat) {
      function pad(s) { return (s < 10) ? `0${s}` : s; }
      const d = new Date(inputFormat);
      return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('.');
    }
    axios.get('https://sievo-react-assignment.azurewebsites.net/api/data')
      .then(response => response.data.map(data => ({
        Projects: data.project,
        Description: data.description,
        'Start day': convertDate(data['start date']),
        Category: data.category,
        Responsible: data.responsible,
        Currency: data.currency,
        Complexity: data.complexity,
        'Savings amount': data['savings amount'],
      }))).then((data) => {
        this.setState({ data });
      });
  }
  handleSearch(value) {
    this.setState({
      searchVal: value,
    });
  }
  handleSort(value) {
    this.setState({
      orderBy: value,
    });
  }
  render() {
    const { data } = this.state;
    const { orderBy, searchVal } = this.state;
    let display = [];
    if (orderBy == 1) {
      display = data.sort((a, b) => a.Projects - b.Projects);
    }
    if (orderBy == 2) {
      display = data.sort((a, b) => b.Projects - a.Projects);
    }
    if (orderBy == 3) {
      display = data.sort((a, b) => {
        const textA = a.Description.toUpperCase();
        const textB = b.Description.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    }
    if (orderBy == 4) {
      display = data.sort((a, b) => {
        const textA = a.Description.toUpperCase();
        const textB = b.Description.toUpperCase();
        return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
      });
    }
    if (searchVal.length > 0) {
      display = _.filter(data, item => _.includes(
        item.Description.toLowerCase(), searchVal.toLowerCase(),
      ));
    } else { display = data; }
    return (
      <div className="container">
        <Header /
        >
        <Search handleSearch={this.handleSearch} />
        <Sort orderBy={orderBy} handleSort={this.handleSort} />
        <Products products={display} />
      </div>
    );
  }
}
export default App;
