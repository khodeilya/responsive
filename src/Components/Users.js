import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading/LoadingSkeleton";
import UsersItem from "./UsersItem";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetch() {
      const users = await axios.get("https://reqres.in/api/users");
      setTimeout(() => {
        console.log(users);
        setUsers(users.data.data);
        setIsLoading(false);
      }, 2000);
    }

    fetch();
  }, []);

  const handleUpdate = async (user) => {
    console.log(user);
    const data = await axios.put("https://reqres.in/api/users", user);
  };

  return (
    <>
      <div className="container">
        {" "}
        <button className="create" onClick={handleCreate}>
          Create
        </button>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="users-grid">
            {users.map((user) => {
              return (
                <UsersItem
                  user={user}
                  key={user.id}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
  async function handleDelete(user) {
    const data = await axios.delete(`https://reqres.in/api/users`, user);
    const newdata = users.filter((u) => u.id !== user.id);
    setUsers(newdata);
  }
  async function handleCreate() {
    const newUser = {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyQ4fc4bsUWwQQZoZkxTT0ZoofNczMuqCRUyqi9Gksw&s",
      first_name: "New",
      last_name: "User",
      email: "email.example@gmail.com",
    };
    const data = await axios.post("https://reqres.in/api/users", newUser);
    setUsers([...users, newUser]);
  }
};

export default Users;
