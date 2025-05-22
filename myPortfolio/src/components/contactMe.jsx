import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_39zum42'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'template_6rnbz67'; // Replace with your EmailJS template ID
const USER_ID = 'q6sMerVJVEUBSnVud'; // Replace with your EmailJS public key

function ContactMe() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(null);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(() => {
        setSent(true);
      }, (err) => {
        setError('Failed to send. Please try again later.');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent py-10">
      <h2 className="text-3xl font-bold mb-6 text-sky-600">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl bg-white/10 p-4 sm:p-8 rounded-xl shadow-lg backdrop-blur-md"
      >
        <div className="mb-4">
          <label className="block text-white font-semibold mb-2">Name</label>
          <input type="text" name="user_name" required className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-white font-semibold mb-2">Your Email</label>
          <input type="email" name="user_email" required className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none" />
        </div>
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2">Message</label>
          <textarea name="message" rows="6" required className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none resize-none"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">Send</button>
        {sent && <p className="text-green-400 mt-4">Message sent successfully!</p>}
        {error && <p className="text-red-400 mt-4">{error}</p>}
      </form>
    </div>
  );
}

export default ContactMe;
