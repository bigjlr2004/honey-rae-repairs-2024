export const getEmployeeTickets = () => {
  return fetch(`http://localhost:8088/employeeTickets`).then((res) =>
    res.json()
  );
};
