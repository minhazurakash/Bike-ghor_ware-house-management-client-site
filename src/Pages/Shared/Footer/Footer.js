import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="text-center py-3 border-top border-warning">
      <p>Copyright &copy; Bike Ghor {year} | All right reserve</p>
    </div>
  );
};

export default Footer;
