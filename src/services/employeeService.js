export const getAllEmployees = () => {
  return fetch(`http://localhost:8088/employees`).then((res) => res.json());
};
export const getEmployeeById = (userId) => {
  return fetch(
    `http://localhost:8088/employees/?userId=${userId}&_expand=user&_embed=employeeTickets`
  ).then((res) => res.json());
};
