import { html, css, LitElement } from 'lit';

export class ListComponent extends LitElement {

    static styles = css`
        .contListOptions {
            display: flex;
        }
    `;

    static properties = {
        options: { type: Array },
        optionListSelected: { type: Number } // Indicator of which option is selected

    };

    constructor() {
        super();
        this.optionListSelected = 0; // Default is 0, correspond to main list
    }

    _changeParentProperties(itemIdSelected) {
        const optionSelected = this.options.filter(item => item.id === itemIdSelected)[0];
        const event = new CustomEvent('update-properties', {
            detail: {
                title: optionSelected.title,
                description: optionSelected.description,
                optionIdSelected: optionSelected.id
            },
            bubbles: true, // Permite que el evento burbujee hacia arriba hasta el padre
            composed: true // Permite que el evento cruce los límites del Shadow DOM
        });

        this.dispatchEvent(event);
    }

    render() {
        return html`
            <div class="contListOptions">
                <!-- Filter available options and send to custom card component -->
                ${this.options.filter(item => item.available).map(item => (html`
                <card-component @click="${(e) => this._changeParentProperties(item.id)}" icon="${item.icon}" title="${item.title}" description="${item.description}" ></card-component>
                `))}
            </div>
    `;
    }

}
