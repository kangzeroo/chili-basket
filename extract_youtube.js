const fetchVideoInfo = require('youtube-info')
const ytlist = require('youtube-playlist')
const fs = require('fs')


// run with:
// $ node extract_youtube.js

// set the playlist_name and playlist_url
// then run the script
const playlist_name = 'Customer Lifetime Value'
const playlist_url = 'https://www.youtube.com/watch?v=DLdiL8s0e2o&list=PL3qEN4Mi0V4jydYCDM8CmOlWd3IdgYHxz'

const initScript = async (playlist_name, url) => {
  const data =  await ytlist(url, ['id', 'name', 'url'])
  // console.log(data.data.playlist)
  const videos = data.data.playlist
  console.log(videos)

  const videoIds = videos.map((video) => {
    // url = 'https://www.youtube.com/watch?v=tTZjmJ6neaw&list=PL3qEN4Mi0V4iKOypRE5lFf5Xa98J7waif'
    return video.url.slice(
      video.url.indexOf('?v=') + '?v='.length
    )
  })

  const allVideos = videoIds.map((videoId) => {
    // pass in a youtube video url and get the details back
    return fetchVideoInfo(`${videoId}`)
    // .then(function (videoInfo) {
    //   console.log(videoInfo);
    // });

    /*
        videoInfo = {
          videoId: '{video Id}',
          url: '{video url}',
          title: '{video title}',
          description: '{video description as HTML}',
          owner: '{video owner}',
          channelId: '{owner channel id}',
          thumbnailUrl: '{video thumbnail url}',
          embedURL: '{video embed url}',
          datePublished: '{video publication date}',
          genre: '{video genre}',
          paid: {true/false},
          unlisted: {true/false},
          isFamilyFriendly: {true/false},
          duration: {video duration in seconds},
          views: {number of views},
          regionsAllowed: [ '{two letter country code}', ... ],
          commentCount: {number of comments},
          likeCount: {number of likes},
          dislikeCount: {number of dislikes},
          channelThumbnailUrl: {channel thumbnail url}
        }

    */

  })

  Promise.all(allVideos).then((videos) => {
    const playlist = {
      title: playlist_name,
      videos: videos
    }
    // save to Google Sheets
    fs.writeFile(`${__dirname}/playlists/${playlist_name.replace(/\s/igm, '_')}.json`, JSON.stringify(playlist), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  }).catch((err) => {
    console.log(err)
  })
}

initScript(playlist_name, playlist_url)
