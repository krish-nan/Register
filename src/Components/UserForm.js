import React from "react";
import "./styles.css";

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fields: {},
        errors: {}
      };
  }

  handleField = event => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields
    });
  }

  submitUser = event => {
    event.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["password"] = "";
      fields["confirmPassword"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  };

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;



    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }
    if (typeof fields["username"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["username"])) {
        formIsValid = false;
        errors["username"] = "*Please enter valid username.";
      }
    }


    if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Please enter your password.";
      }
      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }




  
      if (!fields["confirmPassword"]) {
        formIsValid = false;
        errors["confirmPassword"] = "Please enter your confirm password.";
      }
      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }
  

      if (typeof fields["password"] !== "undefined" && typeof fields["confirmPassword"] !== "undefined") {
          
        if (fields["password"] != fields["confirmPassword"]) {
            formIsValid = false;
          fields["password"] = "Passwords don't match.";
        }
      } 


    this.setState({
      errors: errors
    });
    return formIsValid;
  }


  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form className="App" onSubmit = {this.submitUser } >
            <h1>User Form</h1>
            <div>
              <input
                type="text"
                placeholder="User Name"
                name="username"
                value={this.state.fields.username}                
                onChange={this.handleField}
              />
              <div className="errorMsg">{this.state.errors.username}</div>
            </div>
            <br />

            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleField}
                value={this.state.fields.password}
              />
              <div className="errorMsg">{this.state.errors.password}</div>
            </div>
            <br />

            <div>
              <input
                type="password"
                placeholder="Confirm Password "
                name="confirmPassword"
                onChange={this.handleField}
                value={this.state.fields.confirmPassword}
              />
              <div className="errorMsg">{this.state.errors.confirmPassword}</div>
            </div>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}
