import { useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();
  const onHomePage = history.location.pathname === "/";
  const handleClick = () => {
    history.push("/");
  };
  return (
    <button type="button" onClick={handleClick}>
      Back
    </button>
  );
}
