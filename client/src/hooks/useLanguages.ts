import axios from "axios";

export const useLanguages = async ()=>{
    try {
        const response = await axios.get('/language.json'); // Request to public/data.json
        return response.data;
        // setData(); // Set the data to state
        // setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
        // setError('Failed to fetch data');
        // setLoading(false);
    }
}
