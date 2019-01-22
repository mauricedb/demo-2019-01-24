import { Component } from 'react';

const initialState = {
  data: null,
  loading: false,
  error: null
};

class Fetch extends Component {
  state = initialState;

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.fetchData();
    }
  }

  async fetchData() {
    try {
      this.setState({ ...initialState, loading: true });
      const { url } = this.props;
      const rsp = await fetch(url);
      const data = await rsp.json();
      this.setState({ ...initialState, data });
    } catch (error) {
      this.setState({ ...initialState, error });
    }
  }

  render() {
    const { children } = this.props;
    return children(this.state);
  }
}

export default Fetch;
