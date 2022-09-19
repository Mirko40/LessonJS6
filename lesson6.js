"use strict"
let shoppingList = [
    {
        product: "Apple",
        quantity: 5,
        buy: "yes",

    },
    {
        product: "Meat",
        quantity: 2,
        buy: "not",

    },
    {
        product: "Sweets",
        quantity: 3,
        buy: "yes",

    },

];
function showProducts() {
    for (let products of shoppingList) {
        if (products.buy == "not") {
            console.log(products)
        }
    }
    for (let products of shoppingList) {
        if (products.buy == "yes") {
            console.log(products)
        }
    }
}
function addProducts(a, b) {
    for (let products of shoppingList) {
        if (products.product == a && products.buy == "not") {
            return (products.quantity = products.quantity + b)
        } else {
            if (products.product == a && products.buy == "yes") {
                return (shoppingList.push({ product: a, quantity: b, buy: "not" }))
            }
        }

    }
    shoppingList.push({ product: a, quantity: b, buy: "not" })
}

function buyProducts(a) {
    for (let products of shoppingList) {
        if (products.product == a) {
            products.buy = "yes"
        }
    }
    for (let products of shoppingList) {
        for (let i = 1; i < shoppingList.length; i++) {
            if (products.product == shoppingList[i].product && products.buy == "yes" && shoppingList[i].buy == "yes") {
                products.quantity = products.quantity + shoppingList[i].quantity

                return shoppingList.splice(i, 1)
            }
        }
    }
}






console.log(shoppingList)
addProducts("Apple", 6)
buyProducts("Apple")
showProducts()
