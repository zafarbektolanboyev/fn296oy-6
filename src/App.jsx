import React, { useState } from "react";

function App ()  {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    billingAddress: "",
    contact: "",
    country: "",
    zipCode: "",
    vatNumber: "",
  });

  const [cards, setCards] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let validationErrors = {};
    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.email.trim()) validationErrors.email = "Email is required";
    if (!formData.billingAddress.trim())
      validationErrors.billingAddress = "Billing address is required";
    if (!formData.contact.trim())
      validationErrors.contact = "Contact is required";
    if (!formData.country.trim()) validationErrors.country = "Country is required";
    if (!formData.zipCode.trim()) validationErrors.zipCode = "Zip code is required";
    if (!formData.vatNumber.trim())
      validationErrors.vatNumber = "VAT number is required";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setCards([...cards, formData]);
      setFormData({
        name: "",
        email: "",
        billingAddress: "",
        contact: "",
        country: "",
        zipCode: "",
        vatNumber: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Edit address</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-purple-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-purple-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Billing address</label>
            <textarea
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border ${
                errors.billingAddress ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-2 focus:ring-purple-500`}
            />
            {errors.billingAddress && (
              <p className="text-red-500 text-sm mt-1">{errors.billingAddress}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 border ${
                  errors.contact ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-purple-500`}
              />
              {errors.contact && (
                <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 border ${
                  errors.country ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-purple-500`}
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Zip code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 border ${
                  errors.zipCode ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-purple-500`}
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">VAT Number</label>
              <input
                type="text"
                name="vatNumber"
                value={formData.vatNumber}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 border ${
                  errors.vatNumber ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-purple-500`}
              />
              {errors.vatNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.vatNumber}</p>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <p><strong>Name:</strong> {card.name}</p>
            <p><strong>Email:</strong> {card.email}</p>
            <p><strong>Address:</strong> {card.billingAddress}</p>
            <p><strong>Contact:</strong> {card.contact}</p>
            <p><strong>Country:</strong> {card.country}</p>
            <p><strong>Zip Code:</strong> {card.zipCode}</p>
            <p><strong>VAT Number:</strong> {card.vatNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;