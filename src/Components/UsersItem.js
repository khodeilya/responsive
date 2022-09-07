const UsersItem = ({ user, handleDelete, handleUpdate }) => {
  return (
    <>
      <div className="user">
        <img src={user.avatar} />
        <div className="content">
          <h1>
            {user.first_name} {user.last_name}
          </h1>
          <a href="#">{user.email}</a>
          <div className="btn">
            <button
              className="delete"
              onClick={() => {
                Delete(user);
              }}
            >
              Delete
            </button>
            <button
              className="update"
              onClick={() => {
                Update(user);
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
  function Delete(user) {
    handleDelete(user);
  }
  function Update(user) {
    handleUpdate(user);
  }
};

export default UsersItem;
