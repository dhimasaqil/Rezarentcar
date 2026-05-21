const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group rounded-luxury bg-white p-6 shadow-editorial transition-all duration-500 hover:-translate-y-1.5 hover:shadow-editorial-hover">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-luxury bg-primary text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-primary group-hover:shadow-gold">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-extrabold text-primary">{title}</h3>
      <p className="text-sm leading-6 text-neutral-dark/80">{description}</p>
    </div>
  );
};

export default ServiceCard;
