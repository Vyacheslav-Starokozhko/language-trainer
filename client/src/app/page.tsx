"use client"
import React from "react";
import Board from "@/Components/Board/Board";
import axios from "axios";

interface LanguageData {
    [key: string]: string; // Index signature for a key-value pair where both key and value are strings
}

export default function Home() {

    const [data, setData] = React.useState<LanguageData[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        // Define an async function to fetch data using Axios
        const fetchData = async () => {
            try {
                const response = await axios.get('/languages.json'); // Request to public/data.json
                setData(response.data); // Set the data to state
                setLoading(false); // Set loading to false after data is fetched
            } catch (err) {
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        fetchData(); // Call the fetchData function
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;


    return (
        <main>
            <h1>Fetched Data</h1>
            <ul>
                {Object.entries(data).map(([code, language]) => (
                    <li key={code}>
                        {code}: {language}
                    </li>
                ))}
            </ul>
            <Board type="cards"/>
        </main>
    );
}
