export default function ({ $axios }) {
  $axios.defaults.baseURL = 'http://localhost:8000'; // Replace with your backend API URL
  $axios.defaults.headers.common['Content-Type'] = 'application/json';
}
