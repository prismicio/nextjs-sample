import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Carousel from 'react-bootstrap/lib/Carousel';
import { Client } from '../prismic-configuration';
import Col from 'react-bootstrap/lib/Col';
import Container from 'react-bootstrap/lib/Container';
import Layout from '../layouts/FullWidth';
import LazyImage from '../components/LazyImage';
import { Link } from '../routes';
import NotFound from './notfound';
import { RichText } from 'prismic-reactjs';
import Row from 'react-bootstrap/lib/Row';

class Home extends Component {
  render () {
    const { document, error } = this.props;

    if (error) {
      console.log('ERROR');
      return <div className="error"><NotFound msg="Page could not be loaded at this time" /></div>;
    }

    const content = document.data;
    const pageMeta = {
      title: RichText.asText(content.title),
      description: RichText.asText(content.meta_description),
    };

    return (
      <Layout meta={pageMeta}>
        <div className="hero text-center">
          <Container>
            <h1><img src="/static/logo.svg" alt="Concentric Festival" /></h1>
            <Row className="justify-content-center mt-5">
              <Col lg="10">
                <h2 className="h4">Capital CoLAB presents the first annual Concentric Festival, a celebration of the Capital Region's innovation in collaboration.</h2>
                {/* RichText.render(content.content) */}
                <Link href="/speakers" passHref><Button variant="primary" className="mt-5">Discover More</Button></Link>
              </Col>
            </Row>
            <Row className="hero__stats justify-content-around">
              <Col lg="3">
                <h3 className="stat"><div>1</div> incredible day</h3>
              </Col>
              <Col lg="3">
                <h3 className="stat"><div>31+</div> inspiring speakers</h3>
              </Col>
              <Col lg="3">
                <h3 className="stat"><div>12</div> dynamic brands</h3>
              </Col>
            </Row>
          </Container>
        </div>
        <Carousel>
          <Carousel.Item>
            <h3 className="h1">Concentric Festival is Presented by</h3>
            <p>Content here ...</p>
          </Carousel.Item>
        </Carousel>
        <div className="promo promo--ticket text-center">
          <Container>
            <h3 className="h1">Book your ticket today</h3>
            <Link href="/tickets" passHref><Button variant="outline-primary" className="mt-5">Tickets</Button></Link>
          </Container>
        </div>
        <div style={{ height: '100px' }}></div>
        <LazyImage src="https://loremflickr.com/1140/550" alt="kitten" />
        <div style={{ height: '100px' }}></div>
        <div>
          <img src={content.hero.url} width={content.hero.dimensions.width} height={content.hero.dimensions.height} alt={content.hero.alt} />
          <p data-aos="fade-up">Spicy jalapeno quis pig filet mignon burgdoggen, t-bone alcatra shank veniam et sed short ribs ut aute in chuck. Picanha filet mignon ipsum, cupidatat tail reprehenderit nisi. Fugiat in frankfurter tail, laboris lorem culpa bacon ea pastrami pig duis swine. Ribeye ullamco ground round est turkey meatloaf in tail leberkas aliqua shank drumstick pork belly tempor sausage. Dolore drumstick in consectetur exercitation pastrami. Occaecat turkey ex nulla rump. Rump culpa short ribs ullamco shank lorem mollit incididunt swine deserunt.</p>
          <p data-aos="fade-up">Reprehenderit doner exercitation beef, meatloaf buffalo ham dolore kevin cillum enim flank venison ham hock laborum. Ea ullamco swine occaecat burgdoggen in id. Ribeye sausage ut nulla, flank in ut. Nulla burgdoggen ground round rump qui, corned beef doner cow ut elit short loin. Beef sirloin aliqua drumstick, in velit venison ullamco ut buffalo duis aute.</p>
          <p data-aos="fade-up">Mollit do exercitation, veniam id hamburger frankfurter ipsum fugiat pig doner kielbasa ad spare ribs. Non venison adipisicing meatloaf bresaola boudin ut irure kevin capicola. Ad cupim sausage occaecat ea ground round. Swine capicola pancetta et sausage. Tail pork loin nulla pork belly ex boudin short loin short ribs venison ribeye.</p>
          <p data-aos="fade-up">Spicy jalapeno quis pig filet mignon burgdoggen, t-bone alcatra shank veniam et sed short ribs ut aute in chuck. Picanha filet mignon ipsum, cupidatat tail reprehenderit nisi. Fugiat in frankfurter tail, laboris lorem culpa bacon ea pastrami pig duis swine. Ribeye ullamco ground round est turkey meatloaf in tail leberkas aliqua shank drumstick pork belly tempor sausage. Dolore drumstick in consectetur exercitation pastrami. Occaecat turkey ex nulla rump. Rump culpa short ribs ullamco shank lorem mollit incididunt swine deserunt.</p>
          <p data-aos="fade-up">Reprehenderit doner exercitation beef, meatloaf buffalo ham dolore kevin cillum enim flank venison ham hock laborum. Ea ullamco swine occaecat burgdoggen in id. Ribeye sausage ut nulla, flank in ut. Nulla burgdoggen ground round rump qui, corned beef doner cow ut elit short loin. Beef sirloin aliqua drumstick, in velit venison ullamco ut buffalo duis aute.</p>
          <p data-aos="fade-up">Mollit do exercitation, veniam id hamburger frankfurter ipsum fugiat pig doner kielbasa ad spare ribs. Non venison adipisicing meatloaf bresaola boudin ut irure kevin capicola. Ad cupim sausage occaecat ea ground round. Swine capicola pancetta et sausage. Tail pork loin nulla pork belly ex boudin short loin short ribs venison ribeye.</p>
        </div>
        <LazyImage src="https://loremflickr.com/1140/550?random=2" alt="kitten" className="hello-kitten" />
        <div>
          <p data-aos="fade-up">Tail cupim consectetur, strip steak short loin ipsum cillum enim. Nostrud picanha velit, cupim salami buffalo ham sed cillum pariatur beef ribs doner pancetta ad exercitation. Ipsum ea t-bone tempor turducken nulla velit est cillum turkey eu anim. Ullamco laboris doner officia strip steak, ribeye shank chicken anim culpa ham.</p>
          <p data-aos="fade-up">Aute spare ribs ball tip, proident in brisket tail. Turkey ad shank non capicola deserunt magna short loin sausage sirloin. Culpa lorem ribeye shank ipsum est drumstick. Ut jowl ipsum excepteur, eiusmod brisket spare ribs. T-bone tri-tip ribeye venison chuck ut magna voluptate irure est sirloin chicken nostrud pariatur. Short loin meatloaf swine sed, est pork chop spare ribs ut nostrud turkey salami et tri-tip jowl.</p>
          <p data-aos="fade-up">Ut shoulder consequat ham hock t-bone, laboris jowl cillum. Burgdoggen dolor turkey drumstick chicken et tenderloin beef pork chop. Aliquip beef ribs drumstick excepteur tongue. In veniam laboris, shank alcatra turducken short ribs meatball picanha hamburger consectetur et brisket. Lorem pancetta turducken officia, jerky nostrud t-bone sint tail laborum chuck flank. Turkey frankfurter bacon burgdoggen duis tongue alcatra aliqua doner esse in. Labore pork pastrami tenderloin do tempor bacon flank anim ad kevin jowl venison excepteur frankfurter.</p>
          <p data-aos="fade-up">Qui elit cillum, prosciutto minim shoulder quis sirloin meatloaf ham corned beef incididunt pork loin. In cupim sausage boudin. Minim spare ribs lorem ut. Ham hock minim occaecat chicken esse dolor fatback sed. Pork chop cow duis kielbasa incididunt meatloaf pancetta enim cupim aliqua tongue short loin pariatur. Anim kevin exercitation short ribs ball tip filet mignon ground round pork loin pastrami cow tenderloin kielbasa. Proident lorem t-bone, aute picanha ipsum ullamco commodo eiusmod pork chop laboris occaecat in capicola.</p>
          <p data-aos="fade-up">Et ham burgdoggen, prosciutto venison non fugiat. In esse nulla ut mollit andouille, et shank. Esse pancetta rump sunt non proident id kielbasa ipsum. Sirloin bacon beef ribs cupidatat shank, bresaola eu chuck. Swine picanha pastrami jerky sunt dolore. Chuck pork loin ham, kevin irure shankle quis sed ex fugiat ullamco burgdoggen. Pastrami fugiat id in, aliqua fatback sausage nulla et.</p>
          <p data-aos="fade-up">T-bone turducken eu, cupidatat sint qui tempor sunt. Turducken id est meatball landjaeger brisket adipisicing pariatur. Buffalo excepteur sausage salami, ex ut leberkas do corned beef proident eiusmod ham hock magna pork enim. Corned beef cupim enim tempor chuck ham ground round consequat excepteur tongue prosciutto landjaeger dolor. Laborum et ad ball tip enim.</p>
        </div>
      </Layout>
    );
  }

  static async getInitialProps ({ req }) {
    try {
      const document = await Client(req).getSingle('first');
      return { document };
    } catch (error) {
      return { error: true };
    }
  }
}

export default Home;
