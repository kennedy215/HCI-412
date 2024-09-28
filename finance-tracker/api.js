// client/src/api.js
import axios from 'axios';

// Create an axios instance with the base URL of your backend
const api = axios.create({
  baseURL: 'http://localhost:5000', // Your backend server URL
});

// Function to get user financial records
export const getUserFinancials = async (userId) => {
  try {
    const response = await api.get(`/financial-records/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user financials:', error);
    throw error;
  }
};

// Function to get user bills
export const getUserBills = async (userId) => {
  try {
    const response = await api.get(`/bills/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user bills:', error);
    throw error;
  }
};

// Function to create a new financial record
export const createFinancialRecord = async (userId, record) => {
  try {
    const response = await api.post(`/financial-records/${userId}`, record);
    return response.data;
  } catch (error) {
    console.error('Error creating financial record:', error);
    throw error;
  }
};

// Add more functions as needed for your API

