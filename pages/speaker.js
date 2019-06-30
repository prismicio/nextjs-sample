import { Button, Card } from 'react-bootstrap';
import { Client } from '../prismic-configuration';
import { Component } from 'react';
import Layout from '../layouts/WithSidebar';
import { Link } from '../routes';
import NotFound from './notfound';
import { RichText } from 'prismic-reactjs';

class SpeakerDetails extends Component {
  render () {
    const { speaker, error } = this.props;
    const content = speaker.data;

    if (error) return <Layout><NotFound msg="The speaker details you were looking for could not be found." /></Layout>;

    return (
      <Layout meta={content}>
        <Link href="/speakers" passHref><Button className="mt-3 mb-3">Go back to speakers list</Button></Link>
        <Card className="speaker">
          <Card.Header>{RichText.render(content.name)}</Card.Header>
          <Card.Img src={content.headshot.url || ''} />
          <Card.Body>
            <Card.Title>Presentation name</Card.Title>
            <Card.Text as="div">
              {RichText.render(content.bio)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Layout>
    );
  }

  static async getInitialProps ({ req, query }) {
    try {
      const speaker = await Client(req).getByUID('speaker', query.uid);
      return { speaker };
    } catch (error) {
      return { error: true };
    }
  }
}

export default SpeakerDetails;
