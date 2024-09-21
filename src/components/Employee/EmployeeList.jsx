import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService.js";
import { User } from "../User/User.jsx";
import "./Employee.css";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((usersArray) => {
      setAllUsers(usersArray);
    });
  }, []);
  useEffect(() => {
    const employees = allUsers.filter((user) => user.isStaff === true);
    setFilteredUsers(employees);
  }, [allUsers]);
  return (
    <div className="employees">
      {filteredUsers.map((userObj) => {
        return (
          <div key={userObj.id}>
            <Link to={`/employees/${userObj.id}`}>
              <User user={userObj} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
