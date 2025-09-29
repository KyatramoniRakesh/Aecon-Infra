import React from "react";
import "../CSS/ClientsSection.css";

import LogoS from "../Images/Clients/S.png";
import LogoAurobindo from "../Images/Clients/Aurobindo.png";
import LogoModern from "../Images/Clients/Modern.png";
import LogoTranstroy from "../Images/Clients/Transtroy.png";
import LogoWordmark from "../Images/Clients/Wordmark.png";
import LogoW from "../Images/Clients/W.png";

const clients = [
  { id: 1, name: "Client 1", logo: LogoS },
  { id: 2, name: "Client 2", logo: LogoAurobindo },
  { id: 3, name: "Client 3", logo: LogoModern },
  { id: 4, name: "Client 4", logo: LogoTranstroy },
  { id: 5, name: "Client 5", logo: LogoWordmark },
  { id: 6, name: "Client 6", logo: LogoW },
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
