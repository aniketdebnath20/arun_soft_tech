"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    service: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Replace this with your Google Apps Script URL
    const GOOGLE_SHEET_WEBHOOK =
      "https://script.google.com/macros/s/XXXXXXXXXXXX/exec";

    const res = await fetch(GOOGLE_SHEET_WEBHOOK, {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-md max-w-md"
    >
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        value={form.firstname}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={form.lastname}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="phonenumber"
        placeholder="Phone Number"
        value={form.phonenumber}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="service"
        placeholder="Service"
        value={form.service}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
