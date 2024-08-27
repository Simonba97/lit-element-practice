import { html, css, LitElement } from 'lit';

export class CardComponent extends LitElement {

    static styles = css`
        .cardContainer {
            cursor: pointer;
            text-align: start;
            max-width: 24rem;
            margin: 0 10px;
            padding: 1.5rem;
            border-radius: 0.5rem;
            border-width: 1px; 
            border-color: #E5E7EB; 
            background-color: #ECECEC; 
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
        }

        .iconCard {
            font-size: xx-large;
            margin-bottom: 0.75rem; 
            color: #6B7280; 
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

        .descriptionCard {
            margin-top: 0;
            margin-bottom: 0.75rem; 
            font-weight: 200; 
            font-size: medium;
            color: #6B7280; 
            line-height: normal;
        }
    `;

    static properties = {
        icon: { type: String },
        title: { type: String },
        description: { type: String },
    };

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="cardContainer">
              <span class="iconCard">${this.icon}</span>
              <h5 class="titleCard">${this.title}</h5>
              <p class="descriptionCard">${this.description}</p>
            </div>
    `;
    }

}
