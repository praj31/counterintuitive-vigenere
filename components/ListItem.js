export const ListItem = ({ data, setActiveLink, links }) => {
  return (
    <li
      onClick={(e) =>
        setActiveLink(
          links.indexOf(e.currentTarget.textContent.toString().trim())
        )
      }
    >
      {" "}
      {data}{" "}
    </li>
  );
};
