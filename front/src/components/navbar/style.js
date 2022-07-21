import styled from 'styled-components'

export const Header = styled.header`
    margin:0.44rem 0;
`;

export const Nav = styled.nav`
    display:flex;
    justify-content:right;
    align-items:center;
    margin:0  2rem;
`;

export const List = styled.ul`
    display:flex;
    align-items:center;
`;

export const ListItem = styled.li`
    margin:0 1rem;
    list-style:none;
    font-size:1rem;
`;

export const Input = styled.input`
    width:25vw;
    height:4vh;
    padding-left:0.22rem;
    border:2px soldi gray;
    border-radius:5px;

    &:focus{
        outline:none;
    }
`;