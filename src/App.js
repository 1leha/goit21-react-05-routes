import { Component } from "react";
import "./App.css";
import { UsersList } from "./components/UsersList";
import { Button } from "./components/Button";
import { AddUserForm } from "./components/AddUserForm";
import { data } from "./data/user";
import { nanoid } from "nanoid";
import { Modal } from "./components/Modal/Modal";

class App extends Component {
  state = {
    users: data,
    isFormShown: false,
    currentAvatar: null,
  };

  openModal = (avatar) => {
    this.setState({ currentAvatar: avatar });
  };

  closeModal = (avatar) => {
    this.setState({ currentAvatar: null });
  };

  openForm = () => {
    this.setState({ isFormShown: true });
  };

  deleteUser = (userId) => {
    this.setState((prevState) => ({
      users: prevState.users.filter(({ id }) => id !== userId),
    }));
  };

  addUser = (userData) => {
    const id = nanoid();
    const newUser = { id, hasJob: false, ...userData };
    this.setState((prevState) => ({
      users: [...prevState.users, newUser],
      isFormShown: false,
    }));
  };

  toggleJobStatus = (userId) => {
    this.setState((prevState) => ({
      users: prevState.users.map((user) => {
        if (user.id === userId) {
          return { ...user, hasJob: !user.hasJob };
        }
        return user;
      }),
    }));
  };

  render() {
    const { users, isFormShown, currentAvatar } = this.state;

    return (
      <>
        {currentAvatar && (
          <Modal avatar={currentAvatar} onClose={this.closeModal} />
        )}
        <UsersList
          users={users}
          onDelete={this.deleteUser}
          changeUserJobStatus={this.toggleJobStatus}
          openModal={this.openModal}
        />

        {isFormShown ? (
          <AddUserForm addUser={this.addUser} />
        ) : (
          <Button text="Add User" clickHandler={this.openForm} />
        )}
      </>
    );
  }
}

export default App;
