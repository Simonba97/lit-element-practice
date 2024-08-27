import { html, css, LitElement } from 'lit';
export class MeCardComponent extends LitElement {

    static styles = css`
        :host {
            max-width: 64%;
        }

        .cardContainer {
            margin: 0 10px;
            padding: 1.5rem;
            border-radius: 0.5rem;
            border-width: 1px; 
            border-color: #E5E7EB; 
            background-color: #ECECEC; 
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
        }

        .imgMe {
            margin-bottom: 0.75rem; 
            border-radius: 9999px; 
            width: 6rem; 
            height: 6rem; 
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
        }

        .titleCard {
            margin-top: 0;
            margin-bottom:0;
            font-size: 1.5rem;
            line-height: 2rem; 
            font-weight: 400; 
            letter-spacing: -0.025em; 
            color: #111827; 
        }

        .subTitleCard {
            margin-top: 0;
            margin-bottom: 0.75rem; 
            font-weight: 200; 
            font-size: small;
            color: #6B7280; 
            line-height: normal;
        }

        .descriptionCard {
            font-size: medium;
            line-height: normal;
            text-align: justify;
            
        }
    `;

    static properties = {
    };

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="cardContainer">
                <img class="imgMe" src="../../../../../assets/images/presentation/me.jpg" alt="Bonnie image"/>
                <h5 class="titleCard">✨ Simón Bustamante Alzate ✨</h5>
                <p class="subTitleCard">Software engineer | Frontend developer</p>
                <p class="descriptionCard">
                Maecenas nec odio et ante tincidunt tempus. Fusce fermentum. Donec venenatis vulputate lorem. Nam commodo suscipit quam. Phasellus nec sem in justo pellentesque facilisis. Nunc nulla. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Pellentesque posuere.
                </p>
            </div>
    `;
    }

}
