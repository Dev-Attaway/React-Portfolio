import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [checkEmail, setCheckEmail] = useState(false);
  const [CheckName, setCheckName] = useState(false);
  const [CheckMessage, setCheckMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(form.email);
    if (!isValid) {
      setCheckEmail(true); // Set checkEmail to true if the email is invalid
    } else {
      setCheckEmail(false); // Reset checkEmail if the email is valid
    }

    if (!form.firstName) {
      setCheckName(true);
    } else {
      setCheckName(false);
    }

    if (!form.message) {
      setCheckMessage(true);
    } else {
      setCheckMessage(false);
    }
  };

  return (
    <div className="col">
      <label className="row">
        First name:
        <input
          value={form.firstName}
          onChange={handleInputChange}
          name="firstName"
        />
      </label>
      <label className="row">
        Your Email:
        <input value={form.email} onChange={handleInputChange} name="email" />
      </label>
      <label className="row">
        Message:
        <input
          value={form.message}
          onChange={handleInputChange}
          name="message"
        />
      </label>
      <button className="btn btn-primary" type="button" onClick={handleSubmit}>
        Submit
      </button>
      {/* Conditional rendering to display message for invalid email */}
      {checkEmail && <p style={{ color: "red" }}>Invalid email submitted!</p>}
      {CheckName && <p style={{ color: "red" }}>Invalid name submitted!</p>}
      {CheckMessage && (
        <p style={{ color: "red" }}>Invalid message submitted!</p>
      )}
    </div>
  );
}
