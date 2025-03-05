import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { base_url } from "../../../config/config";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: [],
    phone: [],
    address: [],
  });
  const [contacts, setContacts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [inputValues, setInputValues] = useState({
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    fetchContacts();
  }, []);
  console.log("from value", inputValues);
  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${base_url}/contact`);
      setContacts(response.data);
    } catch (error) {
      console.log("error", error);
      alert.error("Failed to fetch contacts");
    }
  };

  const handleInputChange = (e, field) => {
    setInputValues({
      ...inputValues,
      [field]: e.target.value,
    });
  };

  const handleAddItem = (field) => {
    if (inputValues[field]) {
      setFormData({
        ...formData,
        [field]: [...formData[field], inputValues[field]],
      });
      setInputValues({
        ...inputValues,
        [field]: "",
      });
    }
  };

  const handleRemoveItem = (field, index) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(
          `${base_url}/contact/${editId}`,
          formData
        );
        alert("Contact updated successfully!");
      } else {
        await axios.post(`${base_url}/contact`, formData);
        alert("Contact added successfully!");
      }
      resetForm();
      fetchContacts();
    } catch (error) {
      console.log("error", error);
      alert.error(
        isEditing ? "Failed to update contact" : "Failed to add contact"
      );
    }
  };

  const handleEdit = (contact) => {
    setFormData({
      email: contact.email,
      phone: contact.phone,
      address: contact.address,
    });
    setIsEditing(true);
    setEditId(contact.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await axios.delete(`${base_url}/contact/${id}`);
        alert.success("Contact deleted successfully!");
        fetchContacts();
      } catch (error) {
        console.log("error", error);
        alert.error("Failed to delete contact");
      }
    }
  };

  const resetForm = () => {
    setFormData({ email: [], phone: [], address: [] });
    setInputValues({ email: "", phone: "", address: "" });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          {isEditing ? "Edit Contact" : "Add New Contact"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-6 bg-white p-6 rounded-lg shadow"
        >
          {["email", "phone", "address"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {field}
              </label>
              <div className="mt-1 space-y-2">
                <div className="flex gap-2">
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={inputValues[field]}
                    onChange={(e) => handleInputChange(e, field)}
                    className="flex-1 px-3 py-2 border rounded-md"
                    placeholder={`Add ${field}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleAddItem(field)}
                    className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData[field].map((item, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 px-3 py-1 rounded-full flex items-center"
                    >
                      {item}
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(field, index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              {isEditing ? "Update Contact" : "Save Contact"}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Existing Contacts</h3>
        <div className="grid gap-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  {["email", "phone", "address"].map((field) => (
                    <div key={field}>
                      <h4 className="font-medium capitalize">{field}s:</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {contact[field].map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 px-2 py-1 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(contact)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
