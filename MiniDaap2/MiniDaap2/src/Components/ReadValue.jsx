import { useState, useEffect } from "react";

const ReadValue = ({ state }) => {
    const [data, setData] = useState("No value");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { contract } = state;
                if (contract) {
                    const result = await contract.methods.retriveadd().call();
                    setData(result);
                } else {
                    throw new Error("Contract not available");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setData("No value");
            }
        };

        fetchData();
    }, [state]);

    return (
        <div>
            <h1>Stored value of previous block: {data}</h1>
        </div>
    );
};

export default ReadValue;
