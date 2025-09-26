import React, { useEffect, useState } from "react";
import "../CSS/StatsSection.css";

const statsData = [
  { id: 1, label: "Years of Experience", value: 25 },
  { id: 2, label: "Projects Completed", value: 100 },
  { id: 3, label: "Industries Served", value: 10 },
  { id: 4, label: "Happy Clients", value: 50 },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) =>
      setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, 50)
    );

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section className="stats">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={stat.id} className="stat-box">
            <h2>{counts[index]}+</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
