import React from 'react';

const IngredientsContainer = () => {
    const fetcher = () => {
        const test = 'potato';
        fetch('/api/get?ingredient=' + test, {
            method: 'GET'
        })
        .then(response => {
            return response;
        })
        .then(data => {
            console.log(data);
        });
    };
    return (
        <div className = 'IngredientsContainer'>
            <button type="button" onClick={fetcher}>Submit</button>
        </div>
    )
};

export default IngredientsContainer;