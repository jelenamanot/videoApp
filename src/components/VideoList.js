import React from 'react';
import VideoListItem from './VideoListItem';

export default class VideoList extends React.Component{

   render() {
      const videoItems = this.props.videos.map( (video) => {
         return (
            <VideoListItem
               onVideoSelect={this.props.onVideoSelect}
               key={video.etag}
               video={video}
            />
         );
      });

      return(
         <ul className="list-group col-md-4">
            {videoItems}
         </ul>
      );
   }
}
