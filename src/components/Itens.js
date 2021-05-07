import React from "react";
import Item from "./Item";
import CloseOrder from "./CloseOrder"
import allOptionsSelected from "./data"

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

    const [text, setText] = React.useState("Selecione 3 pedidos de cada categoria")
    function teste() {
        if(allOptionsSelected.filter(boolean => boolean === true).length === 3) {
            setText("Fechar pedido");
        }
    }

    return (
        <div className="itens">
            <Item type="dishes" itens={dishes} funcao={teste}/>
            <Item type="desserts" itens={desserts}  funcao={teste}/>
            <Item type="drinks" itens={drinks}  funcao={teste}/>
            <CloseOrder message={text} class={(text === "Fechar pedido") ? "close-order close-order-click" : "close-order"}/>
        </div>
    )
}