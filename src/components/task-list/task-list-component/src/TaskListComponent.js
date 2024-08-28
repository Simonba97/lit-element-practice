import { html, css, LitElement } from 'lit';

import './TaskCreatorComponent.js'

export class TaskListComponent extends LitElement {
  static styles = css`
    :host {
      display: flex;
      background-color: #ECECEC;
      margin: 0px 10px;
      padding: 1.5rem;
      border-radius: 0.5rem;
      border-width: 1px;
      border-color: rgb(229, 231, 235);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }

    .taskListContainer {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .taskListContainer .dashboardContainer {
      display: flex;
      flex-direction: row;
    }
    .taskListContainer .dashboardContainer .secundaryColumn {
      width: 30%;
    }
    .taskListContainer .dashboardContainer .mainColumn {
      width: 70%;
    }

`;

  static properties = {
    listTask: { type: Array },
  };

  constructor() {
    super();
    this.listTask = JSON.parse(localStorage.getItem('listTask')) || []; // Retrieve existing tasks from localStorage
  }

  /* LitElement Native Lifecycle Functions */
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('task-added', this._handleTaskAdded);
  }

  /* Receive a ListTask ready to add */
  _handleTaskAdded(event) {
    const newTask = event.detail;

    // Add the new task to the list
    this.listTask = [...this.listTask, newTask];

    // Save the updated list back to localStorage
    localStorage.setItem('listTask', JSON.stringify(this.listTask));
  } // end _handleTaskAdded


  render() {
    return html`
      <div class="taskListContainer">

        <!-- First row -->
        <div>
          <task-creator-component></task-creator-component>
        </div>
        
        <!-- Second row with two columns-->
        <div class="dashboardContainer">
          <div class="secundaryColumn"> hola</div>
          <div class="mainColumn">
            ${this.listTask.map(task => (html`<span>${task.title}</span>`))}
          </div>
        </div>
      </div>
    `;
  }
}
