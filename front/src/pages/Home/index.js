import { useEffect, useState } from "react";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import * as S from './style';

const Home = () => {

    const [data, setData] = useState([]);
    // const [image, setImage] = useState([]);

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
            <Navbar />
            <S.Main>
                <Sidebar />

                <S.Cards>
                    <S.Card>
                        {
                            data && (
                                data.map((item) => {
                                    return (
                                        <>
                                            <S.CardData>
                                                <S.UserImage src={item.imageProfile ? item.imageProfile : "https://cdn-icons-png.flaticon.com/512/17/17004.png"} alt="image profile" />
                                                <h1>{item.name}</h1>
                                            </S.CardData>
                                        </>)
                                })
                            )
                        }
                    </S.Card>
                </S.Cards>
            </S.Main>
        </>
    )
};

export default Home;