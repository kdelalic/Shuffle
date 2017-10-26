import queryString from "query-string";

var n = 0;

export default function searchVideo(query, pageToken, listOfVideoIDs = []) {
  //Resets n variable on call of function
  if(listOfVideoIDs.length === 0) {
    n = 0;
  }

  //Youtube Data API request
  const params = {
    //Not certain what part means, but snippet works
    part: "snippet",
    //Q for query
    q: query,
    //Max results, break over 50
    maxResults: 10,
    // Avoid playlists
    type: 'video',
    // Only search music videos
    videoCategoryId: 10,
    // 4 to 20 minute long videos
    videoDuration: "medium",
    // To load the correct page of results
    pageToken,
    //Lovely API key
    key: "AIzaSyAfwfRNJQRwEKJtea5hcZQ0hswGloi7DUI"
  };

  return fetch(
    `https://www.googleapis.com/youtube/v3/search?${queryString.stringify(
      params
    )}`
  )
    .then(response => response.json())
    .then(response => {
      //Again with the page tokens
      const nextPageToken = response.nextPageToken;
      //This loop populates our vid array
      for (let item of response.items) {
        const videoID = item.id.videoId;
        const videoTitle = item.snippet.title;
        //If the type is undefined we reject it (how do we know this? who knows)
        if (videoID !== undefined && videoID !== "undefined" && videoID !== null) {
          //Pushes videoID and video title to 2d array
          listOfVideoIDs.push([]);
          listOfVideoIDs[n].push(videoID);
          listOfVideoIDs[n].push(videoTitle);
          n++;
        }
        // quit when we have 50 videos
        if (listOfVideoIDs.length === 50) {
          return listOfVideoIDs;
        }
      }
      if (nextPageToken !== undefined) {
        return searchVideo(query, nextPageToken, listOfVideoIDs);
      }
    });
}
