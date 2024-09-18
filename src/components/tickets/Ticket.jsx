import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService";
import { getAllUsers } from "../../services/userService";
import { getEmployeeTickets } from "../../services/employeeTicketService";

export const Ticket = ({ ticket }) => {
  const [employees, setEmployees] = useState([]); // List of employees
  const [allUsers, setAllUsers] = useState([]); // List of all users
  const [employeeTickets, setEmployeeTickets] = useState([]); // List of employee tickets
  const [assignedEmployee, setAssignedEmployee] = useState(null); // User details of the assigned employee

  useEffect(() => {
    const fetchData = async () => {
      const employeesArray = await getAllEmployees();
      setEmployees(employeesArray); // Store employees in state

      const usersArray = await getAllUsers();
      setAllUsers(usersArray); // Store users in state

      const ticketArray = await getEmployeeTickets();
      setEmployeeTickets(ticketArray); // Store tickets in state
    };

    fetchData(); // Call the fetch function
  }, []);

  useEffect(() => {
    if (employeeTickets.length > 0 && ticket) {
      // Find the employee ticket associated with the current service ticket
      const employeeTicket = employeeTickets.find(
        (eTicket) => eTicket.serviceTicketId === parseInt(ticket.id)
      );
      if (employeeTicket) {
        // Find the corresponding employee
        const employee = employees.find(
          (emp) => parseInt(emp.id) === parseInt(employeeTicket.employeeId)
        );
        if (employee) {
          // Find the corresponding user for that employee
          const user = allUsers.find(
            (user) => parseInt(user.id) === employee.userId
          );
          if (user) {
            setAssignedEmployee(user); // Set assigned employee's user details
          }
        }
      }
    }
  }, [employeeTickets, ticket, employees, allUsers]); // Dependencies

  return (
    <section className="ticket">
      <header className="ticket-info">{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">Emergency:</div>
          <div>{ticket.emergency ? "Yes" : "No"}</div>
        </div>
        {assignedEmployee ? (
          <div>
            <div className="ticket-info">Assigned Employee:</div>
            <div>{assignedEmployee.fullName}</div>
          </div>
        ) : (
          <div>No employee assigned for this ticket.</div>
        )}
      </footer>
    </section>
  );
};
