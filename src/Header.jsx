import logoUrl from "./assets/react.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logoUrl} width="40px" alt="react-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
