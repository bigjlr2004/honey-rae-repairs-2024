import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerByUserId } from "../../services/userByIdService.jsx.js";

export const CustomerDetails = () => {
  // /customer/3
  // path"/customers/:customerId"
  const [selectedCustomer, setSelectedCustomer] = useState([]);
  const { customerId } = useParams(); //{customerId:}
  useEffect(() => {
    getCustomerByUserId(customerId).then((data) => {
      const userObj = data[0];
      setSelectedCustomer(userObj);
    });
  }, [customerId]);

  return (
    <div className="customers">
      <section className="customer">
        <header className="customer-header">
          {selectedCustomer.user?.fullName}
        </header>
        <div>
          <span className="customer-info">Email: </span>
          {selectedCustomer.user?.email}
        </div>
        <div>
          <span className="customer-info">Address:</span>
          {selectedCustomer.address}
        </div>
        <div>
          <span className="customer-info">Phone: </span>
          {selectedCustomer.phoneNumber}
        </div>
      </section>
    </div>
  );
};
