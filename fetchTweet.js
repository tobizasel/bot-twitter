// File: fetchTweet.js
const axios = require('axios');

// Your Bearer Token from Twitter API
const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAM2EvAEAAAAAloeFAokWQuGCTR4AYQAGqNA%2FgPo%3DRvGDpTwM40BQZ1NV3ubV2MzAbS44ypigq0AAvgb6jOh8AkyLbv';
const tweetId = "1830551634956685631"


// Function to fetch a specific tweet
async function fetchTweet(tweetId) {
    try {
        // Twitter API endpoint to get a specific tweet
        const url = `https://api.twitter.com/2/tweets/${tweetId}`;
        
        // Axios GET request with authorization header
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${BEARER_TOKEN}`,
            }
        });

        // Log the tweet data
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching the tweet:', error.response ? error.response.data : error.message);
    }
}

// Replace 'tweetId' with the specific tweet's ID you want to fetch
fetchTweet(tweetId);
