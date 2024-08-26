import { LitElement, html, css } from 'lit';

class LitElementPractice extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM, para que los estilos de Tailwind se apliquen correctamente
  }

  static properties = {
    header: { type: String },
  }

  static styles = css`
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <span class="bg-blue-300">hola mundo</span>
    `;
  }
}

customElements.define('lit-element-practice', LitElementPractice);