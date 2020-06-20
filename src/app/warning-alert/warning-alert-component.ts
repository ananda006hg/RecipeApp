import {Component} from '@angular/core';


@Component({
    selector:'app-warnig-alert',
    template:`
    <p> this is a warnig, you are in danger</p>
    `,
    styles: [
` p {
    padding: 20px;
    background-color: orange;
    border:1 px solid red;
}`
       
    ]

})

export class WarningAlertComponent{

}