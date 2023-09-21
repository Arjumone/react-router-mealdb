import React from 'react';

const Detail = ({detail}) => {
    const {strMeal,strMealThumb,idMeal}= detail
    return (
        <div>
            <img src={strMealThumb} alt="" />
            <h1>{idMeal}</h1>
            <h3>{strMeal}</h3>
        </div>
    );
};

export default Detail;