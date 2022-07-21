import { useEffect, useState } from "react";

const Home = () => {

    const [data, setData] = useState([]);
    const [image, setImage] = useState([]);

    const getData = async () => {
        const response = await fetch('http://localhost:3001/');
        const dados = await response.json();
        setData(dados);
    };

    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <main>
                <div className="cards">
                    <div className="card">
                        {
                            data && (
                                data.map((item) => {
                                    return (<>
                                        <h1>{item.name}</h1>
                                        <img src={item.imageProfile ? item.imageProfile : "https://cdn-icons-png.flaticon.com/512/17/17004.png"} alt="image profile" />
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