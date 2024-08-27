import { LitElement, html, css } from 'lit';
import "../src/components/practice-hub-component/practice-hub-component"

class LitElementPractice extends LitElement {

  static properties = {
  }

  static styles = css`
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <practice-hub-component></practice-hub-component>
    `;
  }
}

customElements.define('lit-element-practice', LitElementPractice);