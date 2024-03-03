import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
    zipCode: "",
    country: "",
  });

  const [shippingData, setShippingData] = useState({
    shippingDifferentAddress: false,
    shippingFullName: "",
    shippingAddress: "",
    shippingPhoneNumber: "",
    shippingZipCode: "",
    shippingCountry: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
    zipCode: "",
    country: "",
  });

  const [shippingErrors, setShippingErrors] = useState({
    shippingFullName: "",
    shippingAddress: "",
    shippingPhoneNumber: "",
    shippingZipCode: "",
    shippingCountry: "",
  });

  const [orderNote, setOrderNote] = useState("");

  // Define your order details
  const orderDetails = [
    { productName: "chair", quantity: 1, price: 100 },
    { productName: "bed", quantity: 1, price: 200 },
    { productName: "", quantity: 3, price: 150 },
    { productName: "mirror", quantity: 2, price: 300 },
    { productName: "Tabale", quantity: 10, price: 100 },
    { productName: "desk", quantity: 1, price: 2000 },
    
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    // Clear the error message when the user starts typing
    setFormErrors({
      ...formErrors,
      [e.target.id]: "",
    });
  };

  const handleChangeInShipping = (e) => {
    setShippingData({
      ...shippingData,
      [e.target.id]: e.target.value,
    });
    // Clear the error message when the user starts typing
    setShippingErrors({
      ...shippingErrors,
      [e.target.id]: "",
    });
  };

  const handleCheckboxChange = (e) => {
    setShippingData({
      ...shippingData,
      shippingDifferentAddress: e.target.checked,
    });
    if (!e.target.checked) {
      // Reset shipping details if checkbox is unchecked
      setShippingData({
        ...shippingData,
        shippingDifferentAddress: false,
        shippingFullName: "",
        shippingAddress: "",
        shippingPhoneNumber: "",
        shippingZipCode: "",
        shippingCountry: "",
      });
      // Clear the error messages for shipping details
      setShippingErrors({
        shippingFullName: "",
        shippingAddress: "",
        shippingPhoneNumber: "",
        shippingZipCode: "",
        shippingCountry: "",
      });
    }
  };

  const handleOrderNoteChange = (e) => {
    setOrderNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const errors = {};
    // Check if all fields are filled
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = "This field is required.";
        isValid = false;
      }
    }
    const shippingError = {};
    for (const key in shippingData) {
      if (shippingData.shippingDifferentAddress && !shippingData[key]) {
        shippingError[key] = "This field is required.";
        isValid = false;
      }
    }

    if (isValid) {
      // If shipping to same address, clear shipping details
      setFormData({
        ...formData,
        fullName: "",
        email: "",
        address: "",
        phoneNumber: "",
        zipCode: "",
        country: "",
      });
      // Clear the error messages for shipping details
      setShippingData({
        shippingDifferentAddress: false,
        shippingFullName: "",
        shippingAddress: "",
        shippingPhoneNumber: "",
        shippingZipCode: "",
        shippingCountry: "",
      });
    }
    if (isValid) {
      // Perform payment processing or redirect to payment gateway
      alert("Payment successful!");
    } else {
      // Update state to show error messages
      setFormErrors(errors);
      setShippingErrors(shippingError);
    }
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Billing Details</h5>
              <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label
                    htmlFor="fullName"
                    style={{ paddingTop: "15px", paddingBottom: "15px" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                  <small className="text-danger">{formErrors.fullName}</small>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="email"
                    style={{ paddingTop: "15px", paddingBottom: "15px" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  <small className="text-danger">{formErrors.email}</small>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="address"
                    style={{ paddingTop: "15px", paddingBottom: "15px" }}
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                  />
                  <small className="text-danger">{formErrors.address}</small>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="phoneNumber"
                    style={{ paddingTop: "15px", paddingBottom: "15px" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                  <small className="text-danger">
                    {formErrors.phoneNumber}
                  </small>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="zipCode"
                    style={{ paddingTop: "15px", paddingBottom: "15px" }}
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Enter your zip code"
                  />
                  <small className="text-danger">{formErrors.zipCode}</small>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="country"
                    style={{ paddingTop: "15px", paddingBottom: "15px" }}
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Enter your country"
                  />
                  <small className="text-danger">{formErrors.country}</small>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="orderNote"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    Order Note
                  </label>
                  <textarea
                    className="form-control"
                    id="orderNote"
                    value={orderNote}
                    onChange={handleOrderNoteChange}
                    placeholder="Enter any additional notes for your order"
                  ></textarea>
                </div>
                {/* Checkbox for different shipping address */}
                <div
                  style={{
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    display: "flex",
                  }}
                  className="form-group form-check"
                >
                  <label
                    style={{ paddingRight: "30px" }}
                    className="form-check-label"
                    htmlFor="shippingDifferentAddress"
                  >
                    <b>Ship to different address?</b>
                  </label>
                  <input
                    style={{ border: "2px solid" }}
                    type="checkbox"
                    className="form-check-input"
                    id="shippingDifferentAddress"
                    checked={shippingData.shippingDifferentAddress}
                    onChange={handleCheckboxChange}
                  />
                </div>

                {shippingData.shippingDifferentAddress && (
                  <div>
                    <h5 className="mt-4 mb-3">Shipping Details</h5>
                    <div className="form-group">
                      <label
                        htmlFor="shippingFullName"
                        style={{ paddingTop: "15px", paddingBottom: "15px" }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="shippingFullName"
                        value={shippingData.shippingFullName}
                        onChange={handleChangeInShipping}
                        placeholder="Enter your full name"
                      />
                      <small className="text-danger">
                        {shippingErrors.shippingFullName}
                      </small>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="shippingAddress"
                        style={{ paddingTop: "15px", paddingBottom: "15px" }}
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="shippingAddress"
                        value={shippingData.shippingAddress}
                        onChange={handleChangeInShipping}
                        placeholder="Enter your address"
                      />
                      <small className="text-danger">
                        {shippingErrors.shippingAddress}
                      </small>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="shippingPhoneNumber"
                        style={{ paddingTop: "15px", paddingBottom: "15px" }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="shippingPhoneNumber"
                        value={shippingData.shippingPhoneNumber}
                        onChange={handleChangeInShipping}
                        placeholder="Enter your phone number"
                      />
                      <small className="text-danger">
                        {shippingErrors.shippingPhoneNumber}
                      </small>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="shippingZipCode"
                        style={{ paddingTop: "15px", paddingBottom: "15px" }}
                      >
                        Zip Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="shippingZipCode"
                        value={shippingData.shippingZipCode}
                        onChange={handleChangeInShipping}
                        placeholder="Enter your zip code"
                      />
                      <small className="text-danger">
                        {shippingErrors.shippingZipCode}
                      </small>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="shippingCountry"
                        style={{ paddingTop: "15px", paddingBottom: "15px" }}
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="shippingCountry"
                        value={shippingData.shippingCountry}
                        onChange={handleChangeInShipping}
                        placeholder="Enter your country"
                      />
                      <small className="text-danger">
                        {shippingErrors.shippingCountry}
                      </small>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        {/* Order details section */}
        <div className="col-md-6">
          <div
            className="card border-0"
            style={{
              backgroundColor: "#fe9e0d",
              borderRadius: "0",
              border: "none",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Order Details</h5>
              <ul className="list-group">
                {/* Dynamically render order details */}
                {orderDetails.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item.productName} x {item.quantity}
                    <span className="badge badge-primary badge-pill text-dark">
                      ${item.price}
                    </span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Total
                  <span className="badge badge-primary badge-pill text-dark">
                    {/* Calculate total dynamically */}
                    ${
                      orderDetails.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                    }
                  </span>
                </li>
              </ul>
              {/* Pay button within order details section */}
              <button onClick={handleSubmit} className="btn btn-primary mt-3">
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
