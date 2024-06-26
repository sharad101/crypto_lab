import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Nav = styled.nav`
display: flex;
justify-content: space-between;
background-color: black;
color: white;
padding: 15px;
font-size: 2em;`
const Text = styled.div`
color: white;
text-decoration: none;`

export default function NavBar() {

    return (
        <Nav>
            <Link to='/'><Text>Home</Text></Link>
            <Link to='/currencies'><Text>Currencies</Text></Link>
            <Link to='/price'><Text>Price</Text></Link>
        </Nav>
    )
}