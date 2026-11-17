import portrait from '../assets/fotoportifolio-cutout.png'

function Hero() {
  return (
    <section className="hero page-shell" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-identification">Lucas Ticiani <span>/:portifolio 2026</span></p>
        <div className="hero-heading">
          <p className="eyebrow hero-index">DESIGN &amp; DEVELOPMENT</p>
          <h1 id="hero-title">
            <span>INDEPENDENT</span>
            <span className="hero-title-accent">DESIGN</span>
            <span>ENGINEER</span>
          </h1>
          <p className="hero-description">
            WEBSITES FOR AMBITIOUS STARTUPS AND BUILDING STUNNING WORLDWIDE BRANDS
          </p>
        </div>
        <a className="scroll-cue" href="#projetos">
          <span className="scroll-cue-icon" aria-hidden="true">↓</span>
          <span>Role para explorar</span>
        </a>
      </div>
      <div className="hero-portrait">
        <img src={portrait} alt="Retrato de Lucas Ticiani" />
        <span className="portrait-caption">LUCAS TICIANI <span>— PORTFÓLIO 2026</span></span>
      </div>
    </section>
  )
}

export default Hero
