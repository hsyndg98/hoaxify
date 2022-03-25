import React from "react";

class UserSignupPage extends React.Component {
  state = {
    username: "",
    displayName: "",
    password: "",
    passwordRepeat: "",
  };

  // bu gösterim daha iyi event target içindeki name ve value değerlerini alıyor
  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //aşağıdaki gösterim kod uzatmak sadece

  //   onChangeUsername = (event) => {
  //     this.setState({ username: event.target.value });
  //   };
  //   onChangeDisplayname = (event) => {
  //     this.setState({ displayName: event.target.value });
  //   };
  //   onChangePassword = (event) => {
  //     this.setState({ password: event.target.value });
  //   };
  //   onChangePasswordRepeat = (event) => {
  //     this.setState({ passwordRepeat: event.target.value });
  //   };
  render() {
    return (
      <form>
        <h1>User Signup Page</h1>

        <div>
          <label>User Name:</label>
          <input type="text" name="username" onChange={this.onChange} />
        </div>

        <div>
          <label>Display Name:</label>
          <input type="text" name="displayName" onChange={this.onChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={this.onChange} />
        </div>

        <div>
          <label>Password Repeat:</label>
          <input
            type="password"
            name="passwordRepeat"
            onChange={this.onChange}
          />
        </div>
      </form>
    );
  }
}

export default UserSignupPage;
