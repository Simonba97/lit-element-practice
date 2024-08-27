import { html, css, LitElement } from 'lit';

export class PresentationComponent extends LitElement {
  static styles = css`
    .body {
      display: flex;
    }
  `;

  static properties = {
  };

  constructor() {
    super();
  }

  render() {
    return html`
    <div class="presentationContainer">
      <!-- First section -->
      <div class="body">
        <me-card-component></me-card-component>
        <skills-card-component></skills-card-component>
      </div>

      <!-- Second section -->
      <div class="footer">
        Am a footer
      </div>
    </div>
     
    `;
  }
}
