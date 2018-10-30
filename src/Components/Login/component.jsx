import React, { Component } from 'react';
import { Row, Col, } from "mdbreact";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { username, password } from '../../action';
import './login.css'
class Login extends Component {
  state = {
    username: '',
    password: '',
  }
  getEmail = (data) => {  
    if (data.field === 'email') {
      this.setState({
        username: data.e,
      }) 
    }
    else {
      this.setState({
        username: data.e,
      }) 
    }
  }
  isLogin = () =>{
    const loged = false
    this.props.users.map(user => {
      if( user.email === this.state.username && user.password === this.state.password ){
         loged = true
      }
      else{
        loged = false
      }
      if(loged){
        return alert('fkjdgfldkhfkldhkldfshgklshlk')
      }
    })
  }
  render() {
    return (
      <div className="backColor">
        <Row className="container d-flex justify-content-center ml-5 mt-5  align-self-center ">
          <Col lg="12" className="pl-5" >
            <Row>
              <h1 className="loginText d-flex align-self-center">LOGIN</h1>
            </Row>
            <Row>
              <label for="exampleForm2" style={{ color: 'black', fontWeight: '500', fontSize: '20px' }}>Email:</label>
              <input type="text" id="exampleForm2" className="form-control" value={this.state.username}
                onChange={(e) => this.getEmail({ e: e.target.value, field: "email" })}
                //  value={this.props.mail} onChange={this.props.getUsername}
                placeholder="Email" />
              {console.log(this.props.users)}
              {/* {console.log('state=',this.state)} */}
            </Row>
            <Row className="mt-3">
              <label for="exampleForm2" style={{ color: 'black', fontWeight: '500', fontSize: '20px' }} >Password:</label>
              <input type="Password" value={this.props.pass} onChange={this.props.getPassword} placeholder="Password" id="exampleForm2" className="form-control " />
            </Row>
            <Row className="mt-3" style={{ fontSize: '14px' }}>
              <Col lg="12" className="pl-4">
                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" style={{ color: 'white' }} />
                <label className="custom-control-label" for="defaultLoginFormRemember" style={{ color: 'black', fontWeight: '400', fontSize: '15px' }} >
                  keep me login</label>
              </Col>
              <Col lg="12" className="" style={{ color: 'red' }}>
                Forget Password?
          </Col>
            </Row>
            <Row style={{ border: 'white' }}>
              <button className="mt-3 btnColor4 p-2" style={{ width: '350px', backgroundColor: 'blue', color: 'white' }}
                onClick={this.getEmail} >LOGIN</button>
            </Row>
            <Row className="pt-3 " style={{ marginLeft: '30px' }}>
              Not have accout?<span style={{ color: '#72c02c' }}>
                <Link to='/signUp' style={{ color: 'blue', fontWeight: '400', marginLeft: '10px' }}> Register</Link>
              </span>
            </Row>
          </Col>
        </Row>

      </div>
    );
  }
}
const stateMapToProps = (state) => {
  return {
    users: state.userReducer.users,
    mail: state.userReducer.usern,
    pass: state.userReducer.pasw
  }
}
const dispatchMapToProps = (dispatch) => {
  return {
    getUsername: (dtdt) => dispatch(username(dtdt)),
    getPassword: (dtdt) => dispatch(password(dtdt)),
  }
}
export default connect(stateMapToProps, dispatchMapToProps)(Login);
