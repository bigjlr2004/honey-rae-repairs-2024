export const getAllUsers = async () => {
  return await fetch(`http://localhost:8088/users`).then((res) => res.json());
};
