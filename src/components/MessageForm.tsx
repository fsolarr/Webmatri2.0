import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const MessageForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: 'fdosolar16@gmail.com',
          message
        },
        'YOUR_PUBLIC_KEY'
      );
      alert('Message sent successfully!');
      setMessage('');
    } catch (error) {
      console.error('Message send failed:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50" id="message">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Send Us Your Wishes</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Comparte tus deseos y pensamientos con nosotros..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};