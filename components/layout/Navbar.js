import { useEffect, useState } from "react";
import { ListItem } from "../ListItem";
import { links } from "../../util";

export const Navbar = ({ setActiveLink }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    if (openSidebar) {
      document.querySelector("#sidebar").style.display = "flex";
    } else {
      document.querySelector("#sidebar").style.display = "none";
    }
  }, [openSidebar]);

  return (
    <>
      <nav>
        <div className="nav-brand">
          <span>Counterintuitive Vigenere Cipher</span>
        </div>
        <div className="nav-links">
          <div
            className="menu-wrapper"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <div className="menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="sidebar" id="sidebar" style={{ display: "none" }}>
          <ul className="sidebar-nav">
            {links.map((link) => (
              <ListItem
                key={link}
                data={link}
                setActiveLink={setActiveLink}
                links={links}
              />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
