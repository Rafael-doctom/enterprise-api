import styled from 'styled-components'

export const Header = styled.header`
    background:#4B4240;
    position:absolute;
    min-height:100vh;
    margin-top:-6vh;
    padding:2rem 0rem;
    color:white;
    width:5vw;
`;

export const Nav = styled.nav`
    display:flex;
    justify-content:left;
    align-items:center;
    margin-top:40vh;

`;

export const List = styled.ul`
    display:flex;
    align-items:center;
    flex-direction:column;
`;

export const ListItem = styled.li`
    margin:0 1rem;
    list-style:none;
    font-size:1.45rem;
`;
