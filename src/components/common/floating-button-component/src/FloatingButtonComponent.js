import { html, css, LitElement } from 'lit';

export class FloatingButtonComponent extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }

    button {
      background-color: #007bff;
      border: none;
      border-radius: 50%;
      color: white;
      width: 60px;
      height: 60px;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s ease;
    }
    
    button:hover {
      background-color: #0056b3;
    }
  `;

  static properties = {
    available: { type: Boolean }
  };

  constructor() {
    super();
    this.available = false;
  }

  _changeParentProperties() {
    const event = new CustomEvent('update-properties', {
      detail: {
        title: "Practice hub",
        description: "Litelement practice hub to view each of the assigned exercises",
        optionIdSelected: 0
      },
      bubbles: true, // Permite que el evento burbujee hacia arriba hasta el padre
      composed: true // Permite que el evento cruce los límites del Shadow DOM
    });

    this.dispatchEvent(event);
  } // end _changeParentProperties

  render() {
    return this.available ? html`
      <button @click="${this._changeParentProperties}">
        &#x21A9; <!-- Unicode arrow symbol -->
      </button>
    ` : null;
  }
}
