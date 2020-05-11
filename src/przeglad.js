import React from 'react';


class ShoppingList extends React.Component { //to komponent klasowy
    render(){ //przy pomocy metody render komponent zwraca opis tego co zostanie wyświetlone
        return(
            <div className={"shopping-list"}>
                <h1>{this.props.name} - lista zakupów</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}
//do całej listy można odwołać się pisząć <ShoppingList />