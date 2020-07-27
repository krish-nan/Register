import React from "react";
import "./styles.css";

export default class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };
  }

  handleChange = event => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields
    });
  }

  submitRegistration = event => {
    event.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["firstname"] = "";
      fields["lastname"] = "";
      fields["emailid"] = "";
      fields["mobileno"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  };

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "*Please enter your first name.";
    }
    if (typeof fields["firstname"] !== "undefined") {
      if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstname"] = "*Please enter alphabet characters only.";
      }
    }


    if (!fields["lastname"]) {
      formIsValid = false;
      errors["lastname"] = "*Please enter your last name.";
    }
    if (typeof fields["lastname"] !== "undefined") {
      if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastname"] = "*Please enter alphabet characters only.";
      }
    }


    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }
    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter valid mobile no.";
    }
}


    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }
    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
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
          <h1>Registration page</h1>
          <form className="App" onSubmit={this.submitRegistration}>
            <div>
              <input
                type="text"
                name="firstname"
                placeholder = "First Name"
                value={this.state.fields.username}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.firstname}</div>
            </div>
            <br />
            <div>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={this.state.fields.username}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.lastname} </div>
            </div>
            <br />
            <div>
              <input
                type="text"
                name="mobileno"
                placeholder="Mobile Number"
                value={this.state.fields.mobileno}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.mobileno}</div>
              <br />
            </div>
            <div>
              <input
                type="text"
                name="emailid"
                placeholder="Email"
                value={this.state.fields.emailid}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.emailid}</div>
            </div>
            <br />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}
