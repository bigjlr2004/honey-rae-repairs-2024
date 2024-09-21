import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Employee.css";
import { getEmployeeById } from "../../services/employeeService.js";

export const EmployeeDetails = () => {
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    getEmployeeById(userId).then((data) => {
      const employeeObj = data[0];
      setSelectedEmployee(employeeObj);
    });
  }, [userId]);

  return (
    <div className="employees">
      <section className="employee">
        <header className="employee-header">
          {selectedEmployee.user?.fullName}
        </header>
        <div>
          <span className="employee-info">Email: </span>
          {selectedEmployee.user?.email}
        </div>
        <div>
          <span className="employee-info">Specialty:</span>
          {selectedEmployee.specialty}
        </div>
        <div>
          <span className="employee-info">Hourly Rate: </span>$
          {selectedEmployee.rate}
        </div>
        <div>
          <span className="employee-info">Employee tickets </span>
          {selectedEmployee.employeeTickets?.length === 1
            ? `${selectedEmployee.user?.fullName.split(" ")[0]} is working on ${
                selectedEmployee.employeeTickets?.length
              }
          ticket.`
            : `${selectedEmployee.user?.fullName.split(" ")[0]} is working on ${
                selectedEmployee.employeeTickets?.length
              }
          tickets.`}
        </div>
      </section>
    </div>
  );
};
