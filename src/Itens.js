import React from "react";
import Item from "./Item";

export default function Itens() {
    const dishes = [
        {   name: "Frango Yin Yang",
            link: "images/frango.png",
            description: "Um pouco de batata, Um pouco de salada",
            priceString: "R$14,90",
            priceFloat: 14.90
        },
        
        {   
            name: "Frango Yin Yang",
            link: "images/frango.png",
            description: "Um pouco de batata, Um pouco de salada",
            priceString: "R$14,90",
            priceFloat: 14.90
        },

        {   
            name: "Frango Yin Yang",
            link: "images/frango.png",
            description: "Um pouco de batata, Um pouco de salada",
            priceString: "R$14,90",
            priceFloat: 14.90
        },
                
        {   
            name: "Frango Yin Yang",
            link: "images/frango.png",
            description: "Um pouco de batata, Um pouco de salada",
            priceString: "R$14,90",
            priceFloat: 14.90
        }
    ]
    const desserts = [
        {   name: "Frango Yin Yang",
            link: "images/frango.png",
            description: "Um pouco de batata, Um pouco de salada",
            priceString: "R$14,90",
            priceFloat: 14.90
        },
        
        {   
            name: "Frango Yin Yang",
            link: "images/frango.png",
            description: "Um pouco de batata, Um pouco de salada",
            priceString: "R$14,90",
            priceFloat: 14.90
        },

        {   
            name: "Frango Yin Yang",
            link: "images/frango.png",
            description: "Um pouco de batata, Um pouco de salada",
            priceString: "R$14,90",
            priceFloat: 14.90
        },
                
        {   
            name: "Frango Yin Yang",
            link: "images/frango.png",
            description: "Um pouco de batata, Um pouco de salada",
            priceString: "R$14,90",
            priceFloat: 14.90
        }
    ]

    const drinks = [
        {   name: "Frango Yin Yang",
            link: "images/frango.png",
            description: "Um pouco de batata, Um pouco de salada",
            priceString: "R$14,90",
            priceFloat: 14.90
        },
        
        {   
            name: "Frango Yin Yang",
            link: "images/frango.png",
            description: "Um pouco de batata, Um pouco de salada",
            priceString: "R$14,90",
            priceFloat: 14.90
        },

        {   
            name: "Frango Yin Yang",
            link: "images/frango.png",
            description: "Um pouco de batata, Um pouco de salada",
            priceString: "R$14,90",
            priceFloat: 14.90
        },
                
        {   
            name: "Frango Yin Yang",
            link: "images/frango.png",
            description: "Um pouco de batata, Um pouco de salada",
            priceString: "R$14,90",
            priceFloat: 14.90
        }
    ]
    return (
        <div className="itens">
            <Item type="dishes" itens={dishes} />
            <Item type="desserts" itens={desserts} />
            <Item type="drinks" itens={drinks} />
        </div>
    )
}