import axios from 'axios';


const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getRequest = async <T>(endpoint: string): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await axios.get(`${BASE_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        console.error(`API request error at ${endpoint}:`, error);
        throw error;
    }
};
export const fetchPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

