import Head from "next/head";
import { useEffect, useState } from "react";
import { Algorithm } from "../components/content/Algorithm";
import { HandsOn } from "../components/content/HandsOn";
import { Modification } from "../components/content/Modification";
import { Objective } from "../components/content/Objective";
import { Theory } from "../components/content/Theory";
import { Layout } from "../components/layout/Layout";
import { ListItem } from "../components/ListItem";
import { links } from "../util";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [activeLink, setActiveLink] = useState(0);
  const [title, setTitle] = useState("Objective");

  let componentToMount;

  useEffect(() => {
    const ul = document.querySelector(".main-ul").children;
    const sidebar_ul = document.querySelector(".sidebar-nav").children;
    for (let link of ul) {
      link.classList.remove("active");
    }
    for (let link of sidebar_ul) {
      link.classList.remove("sb-active");
    }
    ul.item(activeLink).classList.add("active");
    sidebar_ul.item(activeLink).classList.add("sb-active");
    setTitle(ul.item(activeLink).innerText.trim());
  }, [activeLink]);

  switch (activeLink) {
    case 0:
      componentToMount = <Objective />;
      break;
    case 1:
      componentToMount = <Theory />;
      break;
    case 2:
      componentToMount = <Modification />;
      break;
    case 3:
      componentToMount = <Algorithm />;
      break;
    case 4:
      componentToMount = <HandsOn />;
      break;
    default:
      break;
  }

  return (
    <div>
      <Layout setActiveLink={setActiveLink}>
        <div className={styles.maincontent}>
          <span className={styles.title}>{title}</span>
          <div className={styles.innercontent}>{componentToMount}</div>
        </div>
        <div className={styles.navigation}>
          <ul className="main-ul">
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
      </Layout>
    </div>
  );
}
