import React from "react";
import "../CSS/ClientsSection.css";

const clients = [
  { id: 1, name: "Client 1", logo: "../../public/images/Clients/S.png" },
  { id: 2, name: "Client 2", logo: "../../public/images/Clients/Aurobindo.png" },
  { id: 3, name: "Client 3", logo: "../../public/images/Clients/Modern.png" },
  { id: 4, name: "Client 4", logo: "../../public/images/Clients/Transtroy.png" },
  { id: 5, name: "Client 5", logo: "../../public/images/Clients/Wordmark.png" },
  { id: 6, name: "Client 6", logo: "../../public/images/Clients/W.png" },
];

const ClientsSection = () => {
  return (
    <section className="clients">
      <div className="clients-container">
        <h2 className="section-title">Our Trusted Partners</h2>
        <div className="logos-slider">
          <div className="logos-track">
            {clients.concat(clients).map((client) => (
              <div key={client.id + Math.random()} className="logo-item">
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
