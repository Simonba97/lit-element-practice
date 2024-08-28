import { html, css, LitElement } from 'lit';

import './TaskCreatorComponent.js'
import './TaskBoardComponent.js'

export class TaskListComponent extends LitElement {
  static styles = css`
    :host {
      display: flex;
      background-color: #ECECEC;
      margin: 0px 10px;
      margin-bottom: 20px;
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
    this.addEventListener('modified-status-task', this._handleModifiedStatusTask);
  } // end connectedCallback

  /* Receive a ListTask ready to add */
  _handleTaskAdded(event) {
    const newTask = event.detail;

    // Add the new task to the list
    this.listTask = [...this.listTask, newTask];

    // Save the updated list back to localStorage
    localStorage.setItem('listTask', JSON.stringify(this.listTask));
  } // end _handleTaskAdded

  _handleModifiedStatusTask(event) {
    const modifiedTask = event.detail;
    this.listTask.find(task => task.id == modifiedTask.taskId).status = modifiedTask.newStatus;
    // Save the updated list back to localStorage
    localStorage.setItem('listTask', JSON.stringify(this.listTask));
    this.listTask = [...this.listTask];
  } // end _handleModifiedStatusTask

  render() {
    return html`
      <div class="taskListContainer">

        <!-- First row -->
        <div>
          <task-creator-component></task-creator-component>
        </div>
        
        <!-- Second row -->
        <div class="dashboardContainer">
            <task-board-component .listTask="${this.listTask}"></task-board-component>
        </div>
      </div>
    `;
  }
}
