import React from 'react';

const VideoDetail = ({video}) => {

   if(!video) {
      return(
         <p>Loading... Please wait.</p>
      )
   }
   const videoId = video.id.videoId;
   const url = `https://www.youtube.com/embed/${videoId}`;

   return(
      <div className="video-detail col-md-8">
         <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
         </div>
         <div className="details">
            <h3 className="video-title">{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
            <p>Channel name: {video.snippet.channelTitle}</p>
         </div>
      </div>
   );
}

export default VideoDetail;
