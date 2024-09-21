import { Routes, Route, Outlet } from "react-router-dom";
import { TicketList } from "./components/tickets/TicketList";
import { NavBar } from "./components/Nav/NavBar.jsx";
import { CustomerList } from "./components/User/CustomerList.jsx";
import { EmployeeList } from "./components/Employee/EmployeeList.jsx";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="employees" element={<EmployeeList />} />
      </Route>
    </Routes>
  );
};
