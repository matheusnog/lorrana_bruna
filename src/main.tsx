import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Instagram, Menu, Play, Youtube } from 'lucide-react'
import './styles.css'
import lorranaImage from './img/lorrana.png'

const videoUrl = 'https://www.youtube.com/watch?v=h2NzGPgUZek'
const instagramUrl = 'https://www.instagram.com/lorranabrunasilva/'
const whatsappUrl = 'https://wa.me/5512988329884'
const facebookUrl = 'https://www.facebook.com/lorranabruna.silvasouza.5?locale=pt_BR'
const videoThumbnail = 'https://i.ytimg.com/vi/h2NzGPgUZek/maxresdefault.jpg'

function App() {
  return (
    <main>
      <nav className="nav shell" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Lorrana Bruna - início">
          <span className="brand-mark">LB</span>
          <span>Lorrana<br /><em>Bruna</em></span>
        </a>
        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#musica">Música</a>
          <a href="#agenda">Agenda</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a>
        </div>
        <a className="nav-cta" href="#contato">Fale com a equipe <ArrowUpRight size={16} /></a>
        <button className="menu-button" type="button" aria-label="Abrir menu"><Menu size={22} /></button>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-image" style={{ backgroundImage: `url(${lorranaImage})` }} />
        <div className="hero-wash" />
        <div className="hero-content shell">
          <p className="eyebrow light">Cantora gospel · Brasil</p>
          <h1>Uma voz que<br /><i>alcança.</i></h1>
          <p className="hero-copy">Música que nasce da fé, atravessa histórias e encontra corações.</p>
          <a className="button button-light" href="#musica">Ouça agora <Play size={16} fill="currentColor" /></a>
        </div>
        <div className="hero-bottom shell">
          <span className="scroll-note"><span className="scroll-line" />Role para descobrir</span>
        </div>
      </section>

      <section className="intro shell" id="sobre">
        <div className="section-kicker"><span className="rule" /><span>Sobre Lorrana</span></div>
        <div className="intro-grid">
          <h2>Fé cantada<br /><span>com verdade.</span></h2>
          <div className="intro-text">
            <p className="lead">Lorrana Bruna transforma sua caminhada com Deus em canções que acolhem, fortalecem e renovam.</p>
            <p>Uma artista gospel contemporânea, com presença marcante e uma entrega que vai além do palco. Cada melodia é um convite para respirar fundo, lembrar da esperança e seguir.</p>
            <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">Acompanhe a jornada <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="release" id="musica">
        <div className="shell">
          <div className="section-kicker light"><span className="rule" /><span>Lançamento</span></div>
          <div className="release-grid">
            <div>
              <p className="eyebrow light">Disponível no YouTube</p>
              <h2>Deixe a<br /><i>música falar.</i></h2>
              <p className="release-copy">Um momento de louvor para ouvir com calma, compartilhar e guardar.</p>
              <a className="button button-coral" href={videoUrl} target="_blank" rel="noreferrer">Assistir no YouTube <Youtube size={17} /></a>
            </div>
            <a className="video-card" href={videoUrl} target="_blank" rel="noreferrer" aria-label="Assistir ao lançamento no YouTube">
              <img src={videoThumbnail} alt="Miniatura do vídeo de Lorrana Bruna no YouTube" />
              <span className="play-button"><Play size={23} fill="currentColor" /></span>
              <span className="video-caption">Lorrana Bruna <small>▶ assistir vídeo</small></span>
            </a>
          </div>
        </div>
      </section>

      <section className="presence shell" id="agenda">
        <div className="section-kicker"><span className="rule" /><span>Presença & agenda</span></div>
        <div className="presence-grid">
          <div>
            <h2>O próximo<br /><span>encontro é seu.</span></h2>
            <p>Convites para cultos, congressos, conferências e momentos especiais de adoração.</p>
          </div>
          <div className="booking-box" id="contato">
            <div>
              <h3>Leve Lorrana<br />para sua igreja</h3>
              <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">Solicitar informações <ArrowUpRight size={17} /></a>
              <div className="contact-links">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={15} /></a>
                <a href={facebookUrl} target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-top">
          <a className="brand footer-brand" href="#inicio"><span className="brand-mark">LB</span><span>Lorrana<br /><em>Bruna</em></span></a>
          <div className="footer-social"><span>Fique por perto</span><a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19} /></a><a href={videoUrl} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={20} /></a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Lorrana Bruna</span><span>Música que alcança.</span></div>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
