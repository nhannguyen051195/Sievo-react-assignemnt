import React, { Component } from 'react';
import {  Col, Form, ControlLabel } from 'react-bootstrap';
import './Sort.css'


class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        this.props.handleSort(this.state.value)
        event.preventDefault(this.state.value);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {

        return (
            <div className='form-group'>
                <Form onSubmit={this.handleSubmit} horizontal>

                    <Col componentClass={ControlLabel} sm={3} >
                        Sort by Project ID:
                    </Col>
                    <Col sm={2}>                      
                    <select value={this.state.value} onChange={this.handleChange} className='form-control'>
                        <option value={1}>Increasing</option>
                        <option value={2}>Decreasing</option>
                    </select>
                    </Col>

                    <Col sm={1}><input type="submit" value="Submit" className='sort' /></Col>
                </Form>

            </div>
        );
    }
}

export default Sort;