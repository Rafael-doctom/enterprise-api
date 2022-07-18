import { useEffect, useState } from "react";

const Home = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch('http://localhost:3001/');
        const dados = await response.json();
        setData(dados);
    };

    useEffect(() => {
        getData()
    }, []);

    return(
        <>
            <main>
                <div className="cards">
                    <div className="card">
                        {
                            data && (
                                data.map((item) => {
                                   return( <>
                                        <h1>{item.name}</h1>
                                    </>)
                                })
                            )
                        }
                    </div>
                </div>
            </main>
        </>
    )
};

export default Home;