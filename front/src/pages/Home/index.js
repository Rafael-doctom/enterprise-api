import { useEffect, useState } from "react";

const Home = () => {

    const [data, setData] = useState([]);
    const [image, setImage] = useState([]);

    const getData = async () => {
        const response = await fetch('http://localhost:3001/');
        const dados = await response.json();
        setData(dados);
    };

    const endPoints = [
        "https://randomuser.me/api/?results=1",
        "https://randomuser.me/api/?results=1"
    ]

    const getUserImageProfile = async () => {
        const response = await fetch("https://randomuser.me/api/?results=1")
        const images = await response.json();
        setImage(images.results)
    }

    useEffect(() => {
        getData()
        getUserImageProfile()
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
                                        {
                                            image.length > 0 &&(
                                                image.map((item) => {
                                                    return (
                                                        <>
                                                            <img src={item.picture.large} alt="image profile" />
                                                        </>)
                                                })
                                            )
                                        }
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