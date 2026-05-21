// WhatsApp phone number (without + or spaces)
const WHATSAPP_NUMBER = '6287869732988';

export const sendWhatsApp = (message) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, '_blank');
};

export const sendWhatsAppGeneral = () => {
  const message = 'Halo, saya tertarik dengan layanan rental mobil RentCar. Saya ingin menanyakan informasi lebih lanjut.';
  sendWhatsApp(message);
};

export const sendWhatsAppCarInquiry = (carName, carPrice) => {
  const message = `Halo, saya tertarik dengan ${carName} - Rp ${carPrice.toLocaleString('id-ID')}/hari.\nSaya ingin menanyakan ketersediaan dan detail pemesanan.`;
  sendWhatsApp(message);
};

export const sendWhatsAppContactForm = (name, email, phone, message) => {
  const formattedMessage = `Nama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nPesan: ${message}`;
  sendWhatsApp(formattedMessage);
};

export const getWhatsAppNumber = () => WHATSAPP_NUMBER;

export const setWhatsAppNumber = (number) => {
  // This would need to be implemented with environment variables in production
  console.warn('WhatsApp number should be set via environment variables');
};
