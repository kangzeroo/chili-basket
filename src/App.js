import React, { Component } from 'react';
import './App.css';
import PLAYLISTS from './data/playlists.json'
import Header from './components/Header/Header'
import BannerVideo from './components/BannerVideo/BannerVideo'
import Footer from './components/Footer/Footer'
import PlaylistCarousel from './components/PlaylistCarousel/PlaylistCarousel'

class App extends Component {

  constructor() {
    super()
    this.state = {
      current_playlist: null,
      search_string: '',
    }
  }

  componentDidMount() {
    document.body.style.transform = "scale(1)"
  }

  render() {
    return (
      <div id="App">
        <Header />
        <BannerVideo />
        <div id="main_content">
          <div id="sort_by">
            <i className="ion-search sort_by_icon" />
            <input id="landing_slogan_search" value={this.state.search_string} onChange={(e) => this.setState({ search_string: e.target.value })} />
            <i className="ion-podium sort_by_icon not_allowed" />
            <i className="ion-trophy sort_by_icon not_allowed" />
          </div>
          {
            PLAYLISTS.playlists.map(playlist => {
              return (
                <PlaylistCarousel
                  key={playlist.title}
                  playlist={playlist}
                  search_string={this.state.search_string}
                  current_playlist={this.state.current_playlist}
                  changeCurrentPlaylist={(playlist) => this.setState({ current_playlist: playlist })}
                />
              )
            })
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
