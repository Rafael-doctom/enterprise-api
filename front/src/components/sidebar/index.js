import * as S from './style';

const Sidebar = () => {
    return (
        <>
            <S.Header>
                <S.Nav>
                    <S.List>
                        <S.ListItem>
                            <img src="../../assets/icons/menu-svgrepo-com.svg" alt="icon" width={40} />
                        </S.ListItem>
                        <S.ListItem>
                            <img src="../../assets/icons/menu-svgrepo-com.svg" alt="icon" width={40} />
                        </S.ListItem>
                        <S.ListItem>
                            <img src="../../assets/icons/menu-svgrepo-com.svg" alt="icon" width={40} />
                        </S.ListItem>
                        <S.ListItem>
                            <img src="../../assets/icons/menu-svgrepo-com.svg" alt="icon" width={40} />
                        </S.ListItem>
                    </S.List>
                </S.Nav>
            </S.Header>
        </>
    )
};

export default Sidebar