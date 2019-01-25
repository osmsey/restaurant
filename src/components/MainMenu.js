import React from 'react';


const Btns = ['ABOUT', 'MENU', 'CONTACT', 'CHEFS', 'LOCATE', 'MEDIA'];

export function MainMenu(props) {
    return (
        <div class="menu" >
        {Btns.map(btn => (<a href="" class="button">{btn}</a>))}
</div>
    )
};