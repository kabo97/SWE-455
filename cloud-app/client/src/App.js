import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3001/")
            .then((response) => setMessage(response.data.message))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return <h1>{message}</h1>;
}

export default App;
