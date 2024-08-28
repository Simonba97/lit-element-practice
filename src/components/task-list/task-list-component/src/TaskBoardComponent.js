import { html, css, LitElement } from 'lit';
import Sortable from 'sortablejs';

export class TaskBoardComponent extends LitElement {
  static styles = css`
    :host {
      display: flex;
      padding: 25px;
      width: 100%; 
    }

    .taskBoardContainer {
      width: 100%;
    }

    .taskBoardContainer .columnByStatus {
      border-radius: 0.2rem;
      background-color: #ECECEC; 
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    .taskBoardContainer .columnByStatus,
    .taskBoardContainer .headersdTaskBoard {
      display: flex;
      justify-content: space-around;
      width: 100%;
      background: white;
      padding: 0 0 10px 0;
    }
    .taskBoardContainer .columnByStatus .column {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .taskBoardContainer .headersdTaskBoard .header {
      width: 100%;
      padding: 5px 0;
      font-weight: 300;
    }

    .taskBoardContainer .headersdTaskBoard .notStartedHeader{
      background-color: #FFCBCB;
    }
    .taskBoardContainer .headersdTaskBoard .inProgressHeader{
      background-color: #FFFFCB;
    }
    .taskBoardContainer .headersdTaskBoard .completedHeader{
      background-color: #CBE5CB;
    }
`;

  static properties = {
    listTask: { type: Array },
  };

  constructor() {
    super();
    this.listTask = [];
  }

  /* LitElement Native Lifecycle Functions */
  firstUpdated() {

    const notStartedColumn = this.shadowRoot.querySelector('.notStartedColumn');
    const inProgressColumn = this.shadowRoot.querySelector('.inProgressColumn');
    const completedColumn = this.shadowRoot.querySelector('.completedColumn');

    Sortable.create(notStartedColumn, {
      group: 'shared', animation: 150,
      onEnd: (event) => {

        const movedItem = event.item; // Get the item that was moved
        const taskId = movedItem.getAttribute('id'); // Get the element ID

        if (event.to.className.indexOf("inProgressColumn") != -1) {
          this._modifiedStatusTask(taskId, "In Progress");
        } else if (event.to.className.indexOf("completedColumn") != -1) {
          this._modifiedStatusTask(taskId, "Completed");
        }

      },
    });

    Sortable.create(inProgressColumn, {
      group: 'shared', animation: 150,
      onEnd: (event) => {

        const movedItem = event.item; // Get the item that was moved
        const taskId = movedItem.getAttribute('id'); // Get the element ID
        debugger;

        if (event.to.className.indexOf("notStartedColumn") != -1) {
          this._modifiedStatusTask(taskId, "Not Started");
        } else if (event.to.className.indexOf("completedColumn") != -1) {
          this._modifiedStatusTask(taskId, "Completed");
        }

      },
    });

    Sortable.create(completedColumn, {
      group: 'shared', animation: 150,
      onEnd: (event) => {

        const movedItem = event.item; // Get the item that was moved
        const taskId = movedItem.getAttribute('id'); // Get the element ID

        if (event.to.className.indexOf("notStartedColumn") != -1) {
          this._modifiedStatusTask(taskId, "Not Started");
        } else if (event.to.className.indexOf("inProgressColumn") != -1) {
          this._modifiedStatusTask(taskId, "In Progress");
        }

      },
    });
  } // firstUpdated


  /* Custom functions */
  _modifiedStatusTask(taskId, newStatus) {
    const event = new CustomEvent('modified-status-task', {
      detail: {
        taskId: taskId,
        newStatus: newStatus
      },
      bubbles: true, // Permite que el evento burbujee hacia arriba hasta el padre
      composed: true // Permite que el evento cruce los límites del Shadow DOM
    });

    this.dispatchEvent(event);
  } // end _modifiedStatusTask

  render() {
    return html`
      <div class="taskBoardContainer">

        <!-- Header TaskBoard -->
        <div class="headersdTaskBoard">
          <div class="notStartedHeader header">
            <span>Not Started</span>
          </div>
          <div class="inProgressHeader header">
            <span>In progress</span>
          </div>
          <div class="completedHeader header">
            <span>Completed</span>
          </div>
        </div>

        <!-- Body TaskBoard list -->
        <div class="columnByStatus">
          <div class="notStartedColumn column">
            ${this.listTask.filter(task => task.status === "Not Started").map(task => html`<task-card-component id="${task.id}" .task="${task}" .status="${task.status}"></task-card-component>`)}
          </div>
          <div class="inProgressColumn column">
            ${this.listTask.filter(task => task.status === "In Progress").map(task => html`<task-card-component id="${task.id}" .task="${task}" .status="${task.status}"></task-card-component>`)}
          </div>
          <div class="completedColumn column">
            ${this.listTask.filter(task => task.status === "Completed").map(task => html`<task-card-component id="${task.id}" .task="${task}" .status="${task.status}"></task-card-component>`)}
          </div>
        </div>

      </div>
    `;
  }
}
