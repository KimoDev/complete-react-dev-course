import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''}); // reset fields of form
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({[name]: value}); // update state property with appropriate form value.
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
            <FormInput type="text" name="email" label="email" value={this.state.email} handleChange={this.handleChange} required/>
            <FormInput type="password" name="password" label="password" value={this.state.password} handleChange={this.handleChange} required/>

          <input type="submit" value="submit Form"/>
        </form>
      </div>
    )
  }
}

export default SignIn;