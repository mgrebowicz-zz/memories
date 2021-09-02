import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fectchPosts = () => axios.get(url);

