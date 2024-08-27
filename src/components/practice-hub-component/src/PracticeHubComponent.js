import { html, css, LitElement } from 'lit';
import './CardComponent.js';

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

    .contListOptions {
      display: flex;
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
  };

  constructor() {
    super();
    this.title = "Practice hub";
    this.description = "Litelement practice hub to view each of the assigned exercises";

    /* List of options available to display in the application */
    this.listHub = [
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
          <div class="contListOptions">
              <!-- Filter available options and send to custom card component -->
              ${this.listHub.filter(item => item.available).map(item => (html`
                <card-component @click="${(e) => console.log(item.id)}" icon="${item.icon}" title="${item.title}" description="${item.description}" ></card-component>
             `))}
          </div>
        </div>
        
      </div>
    `;
  }

  renderComponent() {

  }
}
