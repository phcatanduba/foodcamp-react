import React from "react";
import allOptionsSelected from "./data"

export default function Item(props) {
    const [itens, setItens] = React.useState(props.itens);

    function changeStyle(index) {

        let itemClicked = [...itens];
        let j = 0;

        if(props.type === "dishes") {
            allOptionsSelected[0] = true;
        } else if(props.type === "desserts") {
            allOptionsSelected[1] = true;
        } else if(props.type === "drinks") {
            allOptionsSelected[2] = true;
        }
        
        props.funcao()
        
        const hasClassClicked = itemClicked.find((item, indice) => {
            j = indice;
            return item.clicked === "li-clicked"
        })
        
        if(hasClassClicked && hasClassClicked.clicked === "li-clicked") {
            itemClicked[j].clicked = "";
            itemClicked[index].clicked = "li-clicked";
        } else {
            itemClicked[index].clicked = "li-clicked";
        }
        setItens(itemClicked);
    }

    return (
        <>
            <ul className={props.type}>
                {itens.map((item, index) => (
                    <li key={index.toString()} onClick={() => {changeStyle(index)}} className={item.clicked}>
                        <div className="description">
                            <img src={item.link} alt="frango" />
                            <p className="item-name">{item.name}</p>
                            <p>{item.description}</p>
                            <div className="price" value={item.priceNumber}>
                                {item.priceString}
                            </div>
                        </div>
                        <ion-icon name="checkmark-circle-sharp"></ion-icon>
                    </li>   
                ))}
            </ul>
        </>  
    )
}