import React from "react";

export default function Item(props) {
    const [itens, setItens] = React.useState(props.itens);
    
    function changeStyle(index) {
        let itemClicked = [... itens];
        let j = 0;
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
        <ul className={props.type}>
            {itens.map((item, index) => (
                <li onClick={() => {changeStyle(index)}} className={item.clicked}>
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
    )
}