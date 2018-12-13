import Head from 'next/head'
import PrismicConfig from '../prismic-configuration.json'
import { Link } from '../routes'
import PrismicLink from '../components/PrismicLink'
import { RichText } from 'prismic-reactjs'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
    this.handleMenuOpen = this.handleMenuOpen.bind(this)
    this.handleClickMenuItem = this.handleClickMenuItem.bind(this)
  }

  handleMenuOpen() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  handleClickMenuItem() {
    this.setState({ menuOpen: false })
  }

  renderHead() {
    return (
      <Head className={this.props.className}>
        <title>{RichText.asText(this.props && this.props.title || 'Not Found')}</title>
        <meta name="description" content={RichText.asText(this.props && this.props.description || '')} />
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Prismic"/>

        <link href="/static/images/punch.png" rel="icon" type="image/png" />

        <link href="https://fonts.googleapis.com/css?family=PT+Mono" rel="stylesheet"/>
        <link href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" rel="stylesheet" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous" />

        <link href="/_next/static/style.css" rel="stylesheet" />

        <script dangerouslySetInnerHTML={{ __html: `
          window.prismic = { endpoint: "${PrismicConfig.apiEndpoint}" }
        `}} />
        <script src="//static.cdn.prismic.io/prismic.min.js" />
      </Head>
    )
  }
  render() {
    const headerItems = this.props.layout.data.header_nav_items.map((item, index) =>
      <PrismicLink to={item.link} key={index}>
        <a onClick={this.handleClickMenuItem} className="header-nav-link">{item.text}</a>
      </PrismicLink>
    )

    const socialItems = this.props.layout.data.footer_social_items.map((item, index) => {
      return (
        <a
          key={index}
          className="footer-social-item"
          href={item.link.url}
          target={item.link.target || ''}
          rel={item.link.target ? 'noopener' : ''}
        >
          <img src={item.icon.url} alt={item.icon.alt} />
        </a>
      )
    })

    const navItems = this.props.layout.data.footer_nav_items.map((item, index) =>
      <PrismicLink key={index} to={item.link}>
        <a className="footer-nav-link">{item.text}</a>
      </PrismicLink>
    )
    return (
      <React.Fragment>
        {this.renderHead()}
        <div className={`header${this.state.menuOpen ? ' header--is-nav-opened' : ''}`} id="header">
          <div className="header-inner">
            <Link to="/">
              <a className="header-name">{this.props.layout.data.site_name}</a>
            </Link>
            <nav className="header-nav">
              {headerItems}
            </nav>
            <div className="header-burger" id="header-burger" onClick={this.handleMenuOpen}>
              <img className="header-burger-img header-burger-img--closed" src="/static/images/burger-closed.svg" alt="Mobile menu toggle - closed state" />
              <img className="header-burger-img header-burger-img--opened" src="/static/images/burger-opened.svg" alt="Mobile menu toggle - opened state" />
            </div>
          </div>
        </div>

        <main>
          {this.props.children}
        </main>

        <footer className="footer">
          <div className="footer-inner">
            <div>
              <p className="footer-name">
                {this.props.layout.data.site_name}
              </p>
              <div className="footer-social-items">
                {socialItems}
              </div>
            </div>
            <nav className="footer-nav">
              {navItems}
            </nav>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}
