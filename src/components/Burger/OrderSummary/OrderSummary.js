import React from 'react';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKeys => {
            return (
                <li 
                    key={igKeys} 
                    style={{textTransform: 'capitalize'}}
                >
                    {igKeys}:{props.ingredients[igKeys]}
                </li>);
        });
    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </>
    );
};

export default orderSummary;