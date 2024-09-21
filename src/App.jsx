import { Routes, Route, Outlet } from "react-router-dom";
import { TicketList } from "./components/tickets/TicketList";
import { NavBar } from "./components/Nav/NavBar.jsx";

import { EmployeeList } from "./components/Employee/EmployeeList.jsx";
import { Welcome } from "./components/Welcome/Welcome.jsx";
import { CustomerList } from "./components/User/CustomerList.jsx";
import { CustomerDetails } from "./components/Customer/CustomerDetails.jsx";
import { EmployeeDetails } from "./components/Employee/EmployeeDetails.jsx";

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
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
        <Route path="/employees">
          <Route index element={<EmployeeList />} />
          <Route path=":userId" element={<EmployeeDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
