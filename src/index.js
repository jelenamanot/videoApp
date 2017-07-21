import React from 'react';
import ReactDOM from 'react-dom';

// 1. import YTSearch
import YTSearch from 'youtube-api-search';

// Importing components
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCbvhJ9CkNwYxFF3aCRoPjXaRhZqOgDX2k';

class Main extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         videos: [],
         selectedVideo: null
      };

      this.videoSearch('ES6'); // initial search
   }

   videoSearch(term) {
      // 2. Call YTSearch with API_KEY
      YTSearch({key: API_KEY, term: term}, (videos) => {
         this.setState({
            videos: videos,
            selectedVideo: videos[0]
         });
      });
   }

   render() {
      return(
         <div>
            <Header />
            <SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
               onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
               videos={this.state.videos}
            />
            <div className="clearfix"></div>
            <Footer/>
         </div>
      );
   }
}

ReactDOM.render(<Main />, document.querySelector('.container'));
