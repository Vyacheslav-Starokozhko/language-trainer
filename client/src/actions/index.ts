import axios from "axios";

const fetchLanguages = async () => {
    try {
        const response = await axios.get('/languages.json'); // Request to public/data.json
        return response.data;
        // setData(response.data); // Set the data to state
        // setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
        // setError('Failed to fetch data');
        // setLoading(false);
    }
};
