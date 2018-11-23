import React, { Component } from 'react';
import {  ControlLabel, Form, Col } from 'react-bootstrap';
import {Button} from "reactstrap"
import './Search.css'

class Search extends Component {
    state = {
        strSearch: ''
    }

    handleSearch = () => {
        this.props.handleSearch(this.state.strSearch)

    }
    handleClear = () => {
        this.setState({ strSearch: '' });
        this.props.handleSearch('')

    }
    handleChange = (event) => {
        this.setState({ strSearch: event.target.value })
    }
    render() {
        return (
            <div>
                <div className='form-group'>
                    <Form horizontal>

                        <Col componentClass={ControlLabel} sm={1}> Search </Col>
                        <Col sm={4}>
                        <div className="input-group">

                        <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
                            <input onChange={this.handleChange} value={this.state.strSearch} type='text' 
                            className='form-control' placeholder='Search by description...'/>
                            </div>
                            <Button onClick={this.handleSearch} className="btn btn-primary" type='button'><i className="fas fa-search"></i> Search</Button>
                            <Button onClick={this.handleClear} className='btn btn-warning' type='button'> <i className="fas fa-undo-alt"></i> Undo</Button>
                        </Col>
                    </Form>

                </div>

            </div>
        );
    }
}

export default Search;