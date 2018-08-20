import React from 'react'
import { Link } from '../routes'
import NotFound from './notfound'
import { Client, Prismic, linkResolver } from '../lib/prismic'
import Layout from './layout'
import { RichText } from 'prismic-reactjs'

export default class extends React.Component {

  static async getInitialProps({ req }) {
    try {
      const productsDocument = await Client(req).getSingle('products')
      const productList = await Client(req).query(Prismic.Predicates.at('document.type', 'product'), { pageSize: 50 })
      return { productsDocument, productList: productList.results }
    } catch(error) {
      console.log(error)
      return { error: true }
    }
  }

  renderProductList() {
    return this.props.productList.map((document, index) =>
      <div key={index} className="products-grid-item-wrapper">
        <React.Fragment>
          <img className="products-grid-item-image" src={document.data.product_image.url} alt={document.data.product_image.alt}/>
          <p className="products-grid-item-name">
          <Link to={linkResolver(document)}>
            <a>{RichText.asText(document.data.product_name)}</a>
          </Link>
          </p>
          </React.Fragment>
        <p className="products-grid-item-subtitle">{RichText.asText(document.data.sub_title)}</p>
      </div>
    )
  }

  renderBody() {
    return (
    <Layout title={this.props.productsDocument.data.meta_title} description={this.props.productsDocument.data.meta_description} layout={this.props.layout}>
        <div className="l-wrapper">
          <hr className="separator-hr" />
        </div>

        <section className="products-section">
          <div className="l-wrapper">
            <header className="products-grid-header">
              <div className="products-grid-header-title">
                {RichText.render(this.props.productsDocument.data.title, linkResolver)}
              </div>
            </header>
          </div>
          <div className="products-grid-items-wrapper">
            {this.renderProductList()}
          </div>
        </section>

        <div data-wio-id={this.props.productsDocument.id}></div>
      </Layout>
    )
  }

  render() {
    if(this.props.error) return <Layout layout={this.props.layout}><NotFound /></Layout>
    else return this.renderBody()
  }
}