import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {motion} from "framer-motion"

function Recipe() {
    let params = useParams()
    const [details, setDetails] = useState([])
    const getRecipe = async ()=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=9212a03ad5d44d4daa455527c18dced6`)
        const recipe = await data.json()
        setDetails(recipe)
    }
    useEffect(()=>{
        getRecipe();
    },[params.name]);
    const [active,setActive] = useState()
    return (
        <motion.div 
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{ duration: .5}}
        >
        <div key={details} className="recipe-container">
            {console.log(details.extendedIngredients)}
            <div >
                <h4>{details.title}</h4>
                <img src={details.image} alt={details.title} className="recipe-img"/>
            </div>
            <div className="info">
                <button
                onClick={()=>setActive("ingredients")}
                className={active === "ingredients" ? "active" : ""}
                >Ingredients</button>
                <button
                onClick={()=>setActive("instructions")}
                className={active === "instructions" ? "active" : ""}
                >Instructions</button>
            { active === "instructions" && (
                <div>
                <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
            </div>
            )}
            { active === "ingredients" && (
                <ul>
                {details.extendedIngredients.map((item)=>{
                    return(
                    <li key={item.title}>{item.original}</li>
                    )
                })}
            </ul>
            )}
            </div>
        </div>
        </motion.div>
    );
}

export default Recipe;