import React, { useEffect, useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "EstwSp1jK";

const Contact = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    setSuccess(true);
  };

  useEffect(() => {
    setSuccess(false);
  }, []);

  return (
    <div className="p-6 bg-light rounded-3xl max-w-[600px] mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-light rounded-lg bg-[#E7E6F2] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-light rounded-lg bg-[#E7E6F2] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-3 border border-gray-light rounded-lg bg-[#E7E6F2] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={submitting}
          className="w-full p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition"
        >
          Send
        </button>
      </form>
      {success && <p className="mt-4 text-green-500">Message sent!</p>}
    </div>
  );
};

export default Contact;
