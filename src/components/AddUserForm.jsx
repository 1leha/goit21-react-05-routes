import { Component } from "react";

export class AddUserForm extends Component {
  state = {
    name: "",
    email: "",
  };

  changeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    const { addUser } = this.props;

    e.preventDefault();
    addUser({ ...this.state });
    this.setState({
      name: "",
      email: "",
    });
  };

  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.changeHandler}
            autoComplete="off"
          />
        </label>

        <label>
          E-mail:
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.changeHandler}
            autoComplete="off"
          />
        </label>

        <button type="submit">Add user</button>
      </form>
    );
  }
}
