import React, { Component } from 'react';
import Products from './Components/Products'
import './App.css';
import axios from 'axios';
import Search from './Components/Search';
import Sort from './Components/Sort';
import _ from 'lodash';
import Header from './Components/Header'
class App extends Component {
  state = {
    data: [],
    searchVal: '',
    orderBy: null
  }
  componentDidMount() {
    function convertDate(inputFormat) {
      function pad(s) { return (s < 10) ? '0' + s : s; }
      var d = new Date(inputFormat);
      return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('.');
    }
    axios.get('https://sievo-react-assignment.azurewebsites.net/api/data')
      .then(response =>

        response.data.map(data => ({
          Projects: data.project,
          Description: data.description,
          "Start day": convertDate(data['start date']),
          Category: data.category,
          Responsible: data.responsible,
          Currency: data.currency,
          Complexity: data.complexity,
          "Savings amount": data['savings amount'],
        }))

      ).then(data => {
        this.setState({ data: data })
      });
  }

  handleSearch = (value) => {
    this.setState({
      searchVal: value
    })
  }
  handleSort = (value) => {
    this.setState({
      orderBy: value
    })
  }
  render() {
    let { data } = this.state;
    const { orderBy, searchVal } = this.state;
    let display = [];
    if (orderBy == 1) {
      display = data.sort((a, b) => {
        return a.Projects - b.Projects
      })    }
    if (orderBy == 2) {
      display = data.sort((a, b) => {
        return b.Projects - a.Projects
      })
    }
    if (orderBy == 3) {
      display = data.sort((a, b) => {
        var textA = a.Description.toUpperCase();
        var textB = b.Description.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      })
    }
    if (orderBy == 4) {
      display = data.sort((a, b) => {
        var textA = a.Description.toUpperCase();
        var textB = b.Description.toUpperCase();
    return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
      })
    }
    if (orderBy == 5) {
      display = data.sort((a, b) => {
        var c = new Date(a["Start day"]);
        var d = new Date(b["Start day"]);
        return c-d;    
       })
    }
    if (orderBy == 6) {
      display = data.sort((a, b) => {
        return new Date(b["Start day"]) - new Date(a["Start day"]);

       })
    }

    if (searchVal.length > 0) {
      display = _.filter(data, (item) => {
        return _.includes(item.Description.toLowerCase(), searchVal.toLowerCase())
      })
    }
    else { display = data }


    return (
      <div className='container'>
        <Header/>
        <Search handleSearch={this.handleSearch} />
        <Sort orderBy={orderBy} handleSort={this.handleSort} />
        <Products products={display} />
      </div>
    );
  }
}

export default App;
