import { useEffect, useState } from "react";
import "./UserList.css";
import { User } from "./User.jsx";
import { getAllUsers } from "../../services/userService.js";

export const CustomerList = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const doFetch = () => {
      getAllUsers().then((customersArray) => {
        setAllUsers(customersArray);
      });
    };
    doFetch();
  }, []); //ONLY runs on initial render.

  useEffect(() => {
    const customers = allUsers.filter((user) => user.isStaff === false);
    setFilteredUsers(customers);
  }, [allUsers]);

  return (
    <div className="customers">
      {filteredUsers.map((userObj) => {
        return (
          <div key={userObj.id}>
            <User user={userObj} />
          </div>
        );
      })}
    </div>
  );
};
