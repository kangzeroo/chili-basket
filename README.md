![Preview](https://s3.amazonaws.com/kangzes-s3/website-resume/hotleads.png)

# CHILI PIPER DEMO
### By Kangze Huang

View Demo: https://chili.kangzehuang.com

Hello Chili Piper! In this demo project, my goal is to compile a library of Chili Piper tutorials that can get a user up and running in the fastest time possible. This library of video tutorials exists on its own website without the distraction of unrelated YouTube videos - productivity!

Use the script located in `extract_youtube.js`. Simply create your video playlists on YouTube and paste the URL into the script. It will output a JSON for each playlist into the `data/` folder. To build the final HTML, copy over the outputted JSON into the desired format in `/src/data/playlists.json` and `/src/data/company.json`.

## Core Functionality
- Can show a GIF background
- Can show videos in playlists
- Can scroll through a playlist
- Can select a video from a playlist
- Can play video preview when selected
- Can shows video details when selected
- Can close video when unselected
- Cosmetic features only: Login, Favorite, Like, Dislike, Subscribe, Comment

## Technologies Used
For the purposes of this demo
- React 16
- ES8 Async/Await
- CSS3 Animations
- Hosted on Amazon S3 + Cloudfront + Route53
- Social Sharing <meta> tags
- RxJS Observables (wanted to use, but the task was simple enough that it didn't require the extra complexity/dependency)
