import { html, css, LitElement } from 'lit';

/* Imports to PracticeHub Components */
import './CardComponent.js';
import './ListComponent.js';

/* Imports to Presentation components */
import '../../presentation/presentation-component/presentation-component.js';

export class PracticeHubComponent extends LitElement {

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      min-height: 100vh;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      font-weight: 200;
    }  

    .mainContainer {
      display: flex;
      flex-direction: column
    }

    .header {
      display: flex;
      flex-direction: column;
      font-size: xx-large;
    } 

    .header .title {
      width: max-content;
      font-weight: bold;
    }
    .header .description {
      font-weight: lighter;
    }

    .header .desciptionHeaderContainer {
      margin-top: -20px;
    }

    .underlineGradient {
      background-image: linear-gradient(80deg, #1D4ED8, #24ff8e 100%);
      background-repeat: no-repeat;
      background-size: 100% 0.3em;
      background-position: 0 80%;
    }  

  `;

  static properties = {
    title: { type: String },
    description: { type: String },
    listHub: { type: Array },
    optionIdSelected: { type: Number } // Indicator of which option is selected
  };

  constructor() {
    super();
    this.title = "Practice hub";
    this.description = "Litelement practice hub to view each of the assigned exercises";
    this.optionIdSelected = 0; // Default is 0, correspond to main list

    /* List of options available to display in the application */
    this.listHub = [
      {
        id: 0,
        icon: "🧑🏻‍💻",
        title: "Practice hub",
        description: "Litelement practice hub to view each of the assigned exercises",
        available: false // Always false, representing default value to show main list
      },
      {
        id: 1,
        icon: "🧑🏻‍💻",
        title: "Presentation",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        available: true
      },
      {
        id: 2,
        icon: "🚀",
        title: "Timer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        available: true
      },
      {
        id: 3,
        icon: "🚦",
        title: "Task list",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        available: true
      }
    ];
  }

  /* LitElement Native Lifecycle Functions */
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('update-properties', this._updateProperties.bind(this));
  } // end connectedCallback

  _updateProperties(event) {
    this.title = event.detail.title;
    this.description = event.detail.description;
    this.optionIdSelected = event.detail.optionIdSelected;
  } // end _updateProperties


  /* Custom Functions */


  render() {
    return html`
      <!-- Main content -->
      <div id="mainContainer" class="mainContainer">
          
        <div id="headerPracticeHub" class="header">
          <div class="titleHeaderContainer">
            <span class="title underlineGradient">${this.title}</span>
          </div>
          <div class="desciptionHeaderContainer">
            <span class="description">${this.description}</span>
          </div>
        </div>

        <br>

        <!-- Body page -->
        <div id="bodyPracticeHub" class="body">
          <!-- Show main list or Component selected -->
          ${this.optionIdSelected === 0 ? html`<list-component .options="${this.listHub}"></list-component>` : this.renderComponentSelected()}
        </div>
        
      </div>
    `;
  } // end render

  renderComponentSelected() {
    const componentsMap = {
      0: html`<list-component .options="${this.options}"></list-component>`,
      1: html`<presentation-component></presentation-component>`,
      2: html`<span>Timer</span>`,
      3: html`<span>TaskList</span>`,
    };

    return componentsMap[this.optionIdSelected] || html``; // If optionIdSelected does not match any key, an empty component is returned
  } // end renderComponentSelected

}
