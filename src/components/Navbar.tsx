function Navbar() {
  return (
    <nav className="navbar page-shell" aria-label="Navegação principal">
      <a className="navbar-mark" href="#inicio" aria-label="Lucas Ticiani, início">
        LT<span>.</span>
      </a>
      <div className="navbar-links">
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>
  )
}

export default Navbar
