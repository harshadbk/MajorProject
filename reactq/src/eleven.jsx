import React from 'react'

const eleven = () => {

    let quotes = [
        "The best way to predict the future is to create it.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "You miss 100% of the shots you don’t take.",
        "Don't watch the clock; do what it does. Keep going.",
        "Doubt kills more dreams than failure ever will.",
        "It always seems impossible until it’s done.",
        "Strive not to be a success, but rather to be of value.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Believe you can and you're halfway there."
    ]

    const randomIndex = Math.floor(Math.random()*quotes.length)
    const quote = quotes[randomIndex];

    return (
        <div>
        {quote}
        </div>
    )
}

export default eleven
