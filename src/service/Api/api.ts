import axios from 'axios';

type HttpMethod = 'get' | 'post' | 'put' | 'delete';
const base = "http://localhost:8000/";
async function fetchData(endpoint: string, customBaseUrl: string = ''): Promise<any> {
  const BASE_URL = customBaseUrl || base;
  try {
    console.log(`${BASE_URL}${endpoint}`);
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Network error: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred');
    }
  }
}

async function postData(endpoint: string, data: any, customBaseUrl: string = ''): Promise<any> {
  const BASE_URL = customBaseUrl || base;
  try {
    console.log(`${BASE_URL}${endpoint}`);
    const response = await axios.post(`${BASE_URL}${endpoint}`, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Network error: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred');
    }
  }
}

async function putData(endpoint: string, data: any, customBaseUrl: string = ''): Promise<any> {
  const BASE_URL = customBaseUrl || base;
  try {
    console.log(`PUT: ${BASE_URL}${endpoint}`);
    const response = await axios.put(`${BASE_URL}${endpoint}`, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Network error: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred');
    }
  }
}

async function deleteData(endpoint: string, customBaseUrl: string = ''): Promise<any> {
  const BASE_URL = customBaseUrl || base;
  try {
    console.log(`${BASE_URL}${endpoint}`);
    const response = await axios.delete(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Network error: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred');
    }
  }
}

export { fetchData, postData, putData, deleteData };
