import React from "react";
import "../CSS/ClientsSection.css";

const clients = [
  { id: 1, name: "Client 1", logo: "https://dummyimage.com/140x60/0A1F44/fff&text=Client+1" },
  { id: 2, name: "Client 2", logo: "https://dummyimage.com/140x60/FFB400/fff&text=Client+2" },
  { id: 3, name: "Client 3", logo: "https://dummyimage.com/140x60/0056A6/fff&text=Client+3" },
  { id: 4, name: "Client 4", logo: "https://dummyimage.com/140x60/444/fff&text=Client+4" },
  { id: 5, name: "Client 5", logo: "https://dummyimage.com/140x60/888/fff&text=Client+5" },
  { id: 6, name: "Client 6", logo: "https://dummyimage.com/140x60/222/fff&text=Client+6" },
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
