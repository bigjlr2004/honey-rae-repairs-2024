import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService.js";
import { User } from "../User/User.jsx";
import "./Employee.css";

export const EmployeeList = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((usersArray) => {
      setAllUsers(usersArray);
    });
  }, [allUsers]);
  useEffect(() => {
    const employees = allUsers.filter((user) => user.isStaff === true);
    setFilteredUsers(employees);
  }, [allUsers]);
  return (
    <div className="employees">
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
