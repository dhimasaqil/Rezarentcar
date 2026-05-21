const ContactMap = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-black/8 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.07)]">
      <iframe
        title="Peta kontak RentCar"
        className="h-72 w-full grayscale"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4784932138086!2d110.47370628242604!3d-7.070387474708702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708f32e0d74247%3A0x6de0f3397cf13124!2sReza%20Rent%20Car%20Semarang%20(Rental%20Mobil%20Hiace%20Elf%20Bus%20Semarang)!5e0!3m2!1sid!2sus!4v1779370617019!5m2!1sid!2sus"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ContactMap;
