export const getAllCustomers = async () => {
  const res = await fetch("http://localhost:8088/users");
  return await res.json();
};
