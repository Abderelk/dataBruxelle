import axios from 'axios';


const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error; // Propager l'erreur pour gestion ultérieure
  }
};

export default fetchData;
