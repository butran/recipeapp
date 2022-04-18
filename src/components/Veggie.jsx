import React, { useEffect, useState } from 'react';
import styled from  "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Veggie() {
    const [Veggie, setVeggie] = useState([])
    useEffect(()=>{
        getPopular()
    },[])
    const getPopular = async () =>{
        const check = localStorage.getItem("Veggie")
        if (check) { setVeggie(JSON.parse(check)) }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=9212a03ad5d44d4daa455527c18dced6&number=9&tags=vegetarian`)
            const data = await api.json()
            setVeggie(data.recipes)
            localStorage.setItem("Veggie",JSON.stringify( data.recipes))
            } 
    } 
        
    return (
        <Wrapper>
            <h3>Veggie</h3>
            <Splide options={{
                perPage:4,
                arrows: false,
                pagination: false,
                drag:"free",
                gap: "4rem",
            }}>
            {Veggie.map((recipe)=>{
                return(
                <SplideSlide key={recipe.id}>
                    <Card>
                        <Link to={"/recipe/" + recipe.id}>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                            <Gradient/>
                        </Link>
                    </Card>
                </SplideSlide>
                )
            })}
            </Splide>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    margin  : 4rem 0; 
`;
const Card = styled.div`
    min-height: 25rem;
    overflow: hidden;
    position:relative;
    border-radius: 2rem;

 p {
     position: absolute;
     bottom : 10%;
     left: 50%;
     transform: translate(-50%,0%);
     z-index:10;
     color:white;
     text-align: center;
     display:flex;
     justify-content: center;
     width:100%;
     font-weight: bold;
     font-size: .8rem
 }   
 img {
     border-radius: 2rem;
     width: 100%;
     height:100%;
     object-fit:cover;
     position: absolute;
 }
`;
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width:100%;
    height:100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;
export default Veggie