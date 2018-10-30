import React, { Component } from 'react';
import { Row, Col, } from "mdbreact";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { name, registeration } from '../../action';
import './signUp.css'
class SignUp extends Component {
  state = {
    email: '',
    name: '',
    password: '',
  }
  getValue = (data) => {
    console.log('data', data)
    if (data.field === 'name') {
      this.setState({
        name: data.e,
      })
    }
    else if (data.field === 'email') {
      this.setState({
        email: data.e,
      })
    }
    else if (data.field === 'password') {
      this.setState({
        password: data.e,
      })
    }
  }
  registerUser = () => {
    this.props.registeration({ email: this.state.email, password: this.state.password, name: this.state.name })
    console.log('data', this.props.users)
  }
  render() {
    return (
      <div className="backColor">
        <Col lg="12" className="pl-5 mt-4 " style={{ color: 'black', }}>
          <Row>
            <h1 className="loginText d-flex align-self-center">SIGN UP</h1>
          </Row>
          <Row className="mt-3">
            <label for="exampleForm2" style={{ color: 'black', fontWeight: '500', fontSize: '20px' }}>Name:</label>
            <input value={this.state.name} onChange={(e) => this.getValue({ e: e.target.value, field: "name" })} placeholder="Name"
              id="exampleForm2" className="form-control"
            />
            {/* {console.log(this.props.state)} */}
          </Row>
          <Row className="mt-3">
            <label for="exampleForm2" style={{ color: 'black', fontWeight: '500', fontSize: '20px' }}>Email:</label>
            <input type="text" value={this.state.email} onChange={(e) => this.getValue({ e: e.target.value, field: "email" })} placeholder="Email"
              id="exampleForm2" className="form-control"
            />
            {/* {console.log(this.props.state)} */}
          </Row>
          <Row className="mt-3">
            <label for="exampleForm2" style={{ color: 'black', fontWeight: '500', fontSize: '20px' }}>Password:</label>
            <input type="Password" value={this.state.password} onChange={(e) => this.getValue({ e: e.target.value, field: "password" })} placeholder="Password"
              id="exampleForm2" className="form-control"
            />
            {/* {console.log(this.props.state)} */}
          </Row>
          <Row className="mt-3">
            <label for="exampleForm2" style={{ color: 'black', fontWeight: '500', fontSize: '20px' }}>Confirm Password:</label>
            <input type="Password" placeholder="Confirm Password"
              id="exampleForm2" className="form-control"
            />
            {/* {console.log(this.props.state)} */}
          </Row>
          <Row style={{ border: '' }}>
            <button className="mt-3 btnColor4 p-2" onClick={this.registerUser} 
            style={{ width: '350px', backgroundColor: 'blue', color: 'white' }} >Sign Up</button>
          </Row>
          <Row className="pt-3 " style={{ marginLeft: '30px' }}>
            Already have an account?<span style={{ color: '#72c02c' }}>
              <Link to='/login' style={{ color: 'blue', fontWeight: '400', marginLeft: '10px' }}> Login</Link>
            </span>

          </Row>
        </Col>
      </div>
    );
  }
}
const stateMapToProps = (state) => {
  return {
    firstName: state.userReducer.nme,
    users: state.userReducer.users
  }
}
const stateDispatchToProps = (dispatch) => {
  { console.log('dispatch', dispatch) }
  return {
    getName: (fname) => dispatch(name(fname)),
    registeration: (data) => dispatch(registeration(data))
  }
}

export default connect(stateMapToProps, stateDispatchToProps)(SignUp)