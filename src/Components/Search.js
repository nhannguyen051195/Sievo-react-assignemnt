import React, { Component } from 'react';
import { Button, ControlLabel, Form, Col } from 'react-bootstrap';
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

                        <Col componentClass={ControlLabel} sm={1}>Search </Col>
                        <Col sm={4}>
                            <input onChange={this.handleChange} value={this.state.strSearch} type='text' className='form-control' placeholder='Search by description...' />
                            <Button onClick={this.handleSearch} className='btn btn-success' type='button'><i class="fas fa-search"></i> Search</Button>
                            <Button onClick={this.handleClear} className='btn btn-warning' type='button'> <i class="fas fa-undo-alt"></i> Undo</Button>
                        </Col>
                    </Form>

                </div>

            </div>
        );
    }
}

export default Search;