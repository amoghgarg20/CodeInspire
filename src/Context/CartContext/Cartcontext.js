import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartState = (props) => {

    const products =[
        {
            id:  '123001',
            img: 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-012-055_a_720x.jpg?v=1570516273',
            name: "'Brass People On Teak Wood' Warli Hand-Painted Key Holder With Dhokra Art (4 Hooks)",
            exPrice: 1849,
            Price: 1349,
            discount:27,
            quantity: 1
        },
        {
            id:  '123002',
            img: 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-012-057_a_720x.jpg?v=1570516277',
            name: "'In-Key-Geneous' Madhubani Hand-Painted Key Holder In Sheesham & Teak Wood (6 Hooks)",
            exPrice: 2190,
            Price: 1649,
            discount:24,
            quantity: 1
        },
        {
            id:  '123003',
            img: 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-012-066_a_720x.jpg?v=1570516217',
            name: "'Birds On Planks' Warli Hand-Painted Key Holder In Sheesham Wood (6 Hooks)",
            exPrice: 1749,
            Price: 1299,
            discount:25,
            quantity: 1
        },
        {
            id:  '123004',
            img: 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-003-246_A_720x.jpg?v=1633760247',
            name: "'Conical Ivory' Handcrafted Table Lamp In Mango Wood (13 Inch)",
            exPrice: 2060,
            Price: 1649,
            discount:19,
            quantity: 1
        },
        {
            id:  '123005',
            img: 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/RusticSunflower_HandGlazedServingPlattersInCeramic_Setof2_10Inches_MicrowaveSafe_5_720x.jpg?v=1635760831',
            name: "'Rustic Sunflower' Hand Glazed Serving Platters In Ceramic (Set of 2, 10 Inches, Microwave Safe)",
            exPrice: 2998,
            Price: 2099,
            discount:29,
            quantity: 1
        },
        {
            id:  '123006',
            img: 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-005-614_A_720x.jpg?v=1600838418',
            name: "'Twelve Blends' Spice Box With 12 Containers & Spoon In Sheesham Wood",
            exPrice: 1849,
            Price: 1325,
            discount:28,
            quantity: 1
        },
        {
            id:  '123007',
            img: 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-002-001_a_3_720x.jpg?v=1570516510',
            name: "8 Terracotta Warli Handpainted Pots With Sheesham Wooden Frame Wall Hanging",
            exPrice: 3625,
            Price: 2599,
            discount:28,
            quantity: 1
        },
        {
            id:  '123008',
            img: 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/el-005-489_a_1_720x.jpg?v=1570516027',
            name: "The 'Old Fashioned' Hand Glazed Studio Pottery Ceramic Oil Bottle (1000 ML)",
            exPrice: 1120,
            Price: 815,
            discount:27,
            quantity: 1
        },
        {
            id:  '123009',
            img: 'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-002-127_A_720x.jpg?v=1568953176',
            name: "'Coloured Fish' Handmade & Hand-Painted Garden Decorative Wall Hanging In Terracotta",
            exPrice: 1190,
            Price: 1049,
            discount:11,
            quantity: 1
        },
    ]

    const [cartItems, setCartItems] = useState([]);



    const addToCart = (Item)=>{
        setCartItems([
            ...cartItems,
            Item
        ])
    }

    return (
        <CartContext.Provider value ={{
            cartItems,
            addToCart,
            products
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState
