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
    confirmPassword: '',
    error: '',
    errorpass: '',
    errorEmpty:'',
    errorMatch:'',
    reg: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    re : /[0-9]/
  }
  getValue = (data) => {

    console.log('data', data)
    if (data.field === 'name') {
      this.setState({
        name: data.e,
      })
    }
    else if (data.field === 'email') {
      if (this.state.reg.test(data.e) === false) {
        this.setState({
        email: data.e,
          error:'invalid email'
        })
      } else{
      this.setState({
        email: data.e,
        error:''
      })
    }}
    else if (data.field === 'password') {
      this.setState({
        password: data.e,
        errorpass:''
      })
    }
    else if (data.field === 'confirmPassword') {
      this.setState({
        confirmPassword: data.e,
      })
    }
  }
  registerUser = () => {
    this.enterAll()
    this.validateEmail(this.state.email)
    this.validatePassword(this.state.password)
    this.props.registeration({
      email: this.state.email, 
      password: this.state.password,
       name: this.state.name,
      confirmPassword: this.state.confirmPassword
    })
    console.log('data', this.props.users) 
    this.props.users.map(user => 
      {
        if(user.email === this.state.email){
          console.log('user already exist')
        }
        else{
          console.log('enter email')
          return true
        }
      })    
    if (this.state.password === this.state.confirmPassword) {
      return true
    }
    else {
      this.setState({
        errorMatch:''
      })
      console.log('password not match')
    }
  }
  validateEmail = (email) => {
    console.log('validate')
    if (this.state.reg.test(email) === false) {
      this.setState({
        error:'invalid email'
      })
      // alert('Invalid Email Address');
      return false
    }
    else{
      return true
    }
}
  validatePassword = (pass) => {
    if (this.state.re.test(pass) === false) {
      this.setState({
        errorpass:'password must have atleast 1 numeric alphabet'
      })
      // alert('Invalid Email Address');
      return false
    }
    else{
      return true
    }
}
enterAll = () =>{
  console.log('ww')

  if( this.state.email === '' || this.state.password === '' || this.state.name === '' || 
  this.state.confirmPassword === ''){
  console.log('some')   
    this.setState({
      errorEmpty:'enter All Fields'
    })   
  }
}
check=(x)=>{
  console.log(x.target.className)
}
  render() {
    return (
      <div className="backColor">
      <p className="sss" value='vallfoughjk' id="hi" onClick={this.check}>
        data
      </p>
        <Col lg="12" className="pl-5 mt-4 " style={{ color: 'black', }}>
          <Row>
            <h1 className="loginText d-flex align-self-center">SIGN UP</h1>
          </Row>
          <Row className="mt-3">
            <label  style={{ color: 'black', fontWeight: '500', fontSize: '20px' }}>Name:</label>
            <input value={this.state.name} onChange={(e) => this.getValue({ e: e.target.value, field: "name" })} placeholder="Name"
               className="form-control"
            />
            {/* {console.log(this.props.state)} */}
          </Row>
          <Row className="mt-3">
            <label  style={{ color: 'black', fontWeight: '500', fontSize: '20px' }}>Email:</label>
            <input type="text" value={this.state.email} onChange={(e) => this.getValue({ e: e.target.value, field: "email" })} placeholder="Email"
               className="form-control"
            /> <span className='errorStyle' > {this.state.error}</span> 
            {/* {console.log(this.props.state)} */}
          </Row>
          <Row className="mt-3">
            <label  style={{ color: 'black', fontWeight: '500', fontSize: '20px' }}>Password:</label>
            <input type="Password" value={this.state.password} onChange={(e) => this.getValue({ e: e.target.value, field: "password" })} placeholder="Password"
               className="form-control"
            />
            <span className='errorStyle' > {this.state.errorpass}</span> 
            {/* {console.log(this.props.state)} */}
          </Row>
          <Row className="mt-3">
            <label  style={{ color: 'black', fontWeight: '500', fontSize: '20px' }}>Confirm Password:</label>
            <input type="Password" value={this.state.confirmPassword}
              onChange={(e) => this.getValue({ e: e.target.value, field: "confirmPassword" })}
              placeholder="Confirm Password"
               className="form-control"
            />
            {/* {console.log(this.props.state)} */}
          </Row>

          <Row style={{ border: '' }}>
            <button className="mt-3 btnColor4 p-2" onClick={this.registerUser}
              style={{ width: '350px', backgroundColor: 'blue', color: 'white' }} >Sign Up</button>
            <span className='errorStyle' > {this.state.errorEmpty}</span> 

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