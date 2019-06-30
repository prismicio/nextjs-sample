import { Component } from 'react';

class LazyImage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      assetLoaded: false,
    };
  }

  handleAssetLoaded () {
    this.setState({
      assetLoaded: true,
    });
  }

  render () {
    return (
      <img {...this.props} className={`img-lazy img-fluid ${this.state.assetLoaded && 'img-lazy--loaded'}`} onLoad={this.handleAssetLoaded.bind(this)} />
    );
  }
}

export default LazyImage;
