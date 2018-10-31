import React, { Component } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, just here for reference
    componentWillUpdate() {
        console.log('OrderSummary updated');
    }
   
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKeys => {
            return (
                <li 
                    key={igKeys} 
                    style={{textTransform: 'capitalize'}}
                >
                    {igKeys}: {this.props.ingredients[igKeys]}
                </li>);
        });

        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </>
        );
    };
};

export default OrderSummary;