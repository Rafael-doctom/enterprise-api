import * as S from './style';

const Navbar = () => {
    return (
        <>
            <S.Header>
                <S.Nav>
                    <S.List>
                        <S.ListItem>
                            Dashboard
                        </S.ListItem>
                        <S.ListItem>
                            Profile
                        </S.ListItem>
                        <S.ListItem>
                            Login
                        </S.ListItem>
                    </S.List>
                    <S.Input type="text" placeholder="Digite algo..." />
                </S.Nav>
            </S.Header>
        </>
    )
};

export default Navbar