import axios from 'axios';

const API_URL = "http://127.0.0.1:8080";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withXSRFToken = true
axios.defaults.withCredentials = true

// Create an Axios instance

const api = axios.create({
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken",
    withCredentials: true,
    withXSRFToken: true
});

// Function to fetch the CSRF token
async function fetchCsrfToken () {
    try {
      const response = await axios.get(API_URL + '/csrf-token');
      const csrfToken = response.data.csrfToken;
      // Set the CSRF token in axios headers
      axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
      console.log('CSRF token set1:', csrfToken);
    //   console.log('CSRF token set:', axios.defaults.headers.common['X-CSRFToken']);
      console.log('CSRF token set:', axios.defaults.headers);
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
      throw error;
    }
  }


// Function to search albums
async function queryAlbums(words) {
    await fetchCsrfToken();
    console.log('CSRF token set:', axios.defaults.headers.common['X-CSRFToken']);
    const response = await api.post(API_URL + '/api/query/',
      { words },
        { headers: axios.defaults.headers.common }
    );
    return response.data;
  }

export default queryAlbums ;