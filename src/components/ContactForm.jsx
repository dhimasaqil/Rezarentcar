import { useState } from 'react';
import { sendWhatsAppContactForm } from '../utils/whatsapp';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const updateField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendWhatsAppContactForm(form.name, form.email, form.phone, form.message);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-luxury bg-white p-6 shadow-editorial md:p-8">
      <p className="eyebrow mb-2 text-[10px]">Reservasi Cepat</p>
      <h2 className="mb-6 text-xl font-extrabold text-primary">Kirim Pesan</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <input
          required
          value={form.name}
          onChange={(event) => updateField('name', event.target.value)}
          className="field-luxury"
          placeholder="Nama"
        />
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => updateField('email', event.target.value)}
          className="field-luxury"
          placeholder="Email"
        />
        <input
          required
          value={form.phone}
          onChange={(event) => updateField('phone', event.target.value)}
          className="field-luxury md:col-span-2"
          placeholder="Nomor telepon"
        />
        <textarea
          required
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          className="field-luxury min-h-36 md:col-span-2"
          placeholder="Pesan"
        />
      </div>
      <button type="submit" className="btn-gold mt-5 px-6 py-3 text-sm">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.52 3.48A11.87 11.87 0 0012.06 0C5.47 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.23-1.64a11.92 11.92 0 005.83 1.49h.01c6.59 0 11.96-5.36 11.96-11.95 0-3.19-1.24-6.19-3.51-8.42z" />
        </svg>
        Kirim via WhatsApp
      </button>
    </form>
  );
};

export default ContactForm;
