import React, { useState, useEffect, useRef } from "react";
import { navigate } from "react-router-dom";

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState([
    {
      title: "Accueil",
      path: "/accueil",
    },
    {
      title: "Utilisateurs",
      path: "/utilisateurs",
    },
    {
      title: "Produits",
      path: "/produits",
    },
  ]);

  const mainRef = useRef();

  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <nav>
            <ul>
              {menuItems.map((item) => (
                <li key={item.title} className="nav-item">
                  <a href="#" onClick={() => navigate(item.path)}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="col-md-10">
          <main ref={mainRef}>
            {/* Contenu du dashboard ici */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
