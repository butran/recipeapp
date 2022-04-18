import {FaPizzaSlice, FaHamburger} from "react-icons/fa"
import { GiNoodles, GiChopsticks} from "react-icons/gi"
import { NavLink}   from "react-router-dom"
import styled from "styled-components";

function Category() {
    return (
        <div className="list">
            <SLink to={"/cuisine/Italian"}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </SLink>
            <SLink to={"/cuisine/American"}>
                <FaHamburger/>
                <h4>American</h4>
            </SLink>
            <SLink to={"/cuisine/Thai"}>
                <GiNoodles/>
                <h4>Thai</h4>
            </SLink>
            <SLink to={"/cuisine/Japanese"}>
                <GiChopsticks/>
                <h4>Japanese</h4>
            </SLink>
        </div>
    );
}
const SLink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:white;
    background-color: #7f5a83;
    background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
    width: 6rem;
    height: 6rem;
    border-radius:25px;
    margin: 1rem;
    text-decoration:none;
    cursor:pointer;
    h4{
        margin:0;
    }
    svg{
        margin-bottom:.5rem;
        font-size:1.2rem;
    }
    &.active{
        background-color: #f9484a;
        background-image: linear-gradient(315deg, #f9484a 0%, #fbd72b 74%);
    }
`
export default Category;