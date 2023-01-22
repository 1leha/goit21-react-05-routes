import PropTypes from "prop-types";
export const UsersList = ({
  users,
  onDelete,
  changeUserJobStatus,
  openModal,
}) => {
  return (
    <ul>
      {users.map(({ id, name, email, hasJob, avatar }) => {
        return (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>
              Has Job:
              <span onClick={() => changeUserJobStatus(id)}>
                {hasJob.toString()}
              </span>
            </p>
            <button onClick={() => openModal({ src: avatar, alt: name })}>
              Show photo
            </button>

            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      hasJob: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  changeUserJobStatus: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
