import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import * as Actions from '../actions'
import { Tabs, Tab } from 'react-bootstrap';

class App extends Component {
  render() {
    const { list, actions } = this.props
    return (
      <div>
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
          <Tab eventKey={1} title="Tab 1"><Header add={actions.add} /></Tab>
          <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
          <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
        </Tabs>
      </div>
    );
  }
}

App.PropTypes = {
  list: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
      list: state.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)