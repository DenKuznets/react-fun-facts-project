import './App.css'

import logoUrl from './assets/react.svg'

function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <img src={logoUrl} width="40px" alt='react-logo'/>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <div className="main">
      <h1 className="main-h1">Reasons I'm excited to learn React</h1>
      <ol className="main-ol">
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer className='footer'>
      <small>© 2023 Kuznetsov development. All rights reserved.</small>
    </footer>
  );
}

function App() {  
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
