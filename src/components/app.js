import React, { Component } from 'react';
// Components & containers
import SearchBar from '../containers/search-bar'
import VideoDetail from '../containers/video-detail'
import VideoList from '../containers/video-list'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>YouTube Search Practise</h1>
        <SearchBar />
        <div className="row">
          <VideoDetail />
          <VideoList />
        </div>
      </div>
    );
  }
}
