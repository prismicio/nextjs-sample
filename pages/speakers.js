import { Card, CardDeck } from 'react-bootstrap';
import { Client, linkResolver, Prismic } from '../prismic-configuration';
import { Component } from 'react';
import Layout from '../layouts/FullWidth';
import { Link } from '../routes';
import NotFound from './notfound';
import { RichText } from 'prismic-reactjs';

const SpeakerCard = props =>
  <Card className="speakers-list__item">
    <Card.Img variant="top" src="https://placeimg.com/240/120/people" />
    <Card.Body>
      <Card.Title className="speakers-list__title">{RichText.asText(props.speaker.data.name)}</Card.Title>
      <Card.Text>
        Intro text summary of the speaker here...
      </Card.Text>
      <Link to={linkResolver(props.speaker)}>
        <a className="btn btn-primary">Read bio</a>
      </Link>
    </Card.Body>
  </Card>;

class Speakers extends Component {
  render () {
    const { document, error, speakersList } = this.props;
    const content = document.data;
    const pageMeta = {
      title: RichText.asText(content.title),
      description: RichText.asText(content.meta_description),
    };

    if (error) return <Layout><NotFound /></Layout>;

    // order speakersList if needed

    return (
      <Layout meta={pageMeta}>
        <h1>These are some of our speakers</h1>
        <CardDeck className="speakers-list">
          {speakersList.map((doc, idx) => <SpeakerCard speaker={doc} key={idx} />)}
        </CardDeck>
      </Layout>
    );
  }

  static async getInitialProps ({ req }) {
    try {
      const document = await Client(req).getSingle('speakers_page');
      const speakersList = await Client(req).query(Prismic.Predicates.at('document.type', 'speaker'), { pageSize: 50 });

      return {
        document,
        speakersList: speakersList.results,
      };
    } catch (error) {
      return { error: true };
    }
  }
}

export default Speakers;
