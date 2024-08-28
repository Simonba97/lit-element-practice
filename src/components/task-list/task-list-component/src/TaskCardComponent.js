import { html, css, LitElement } from 'lit';

export class TaskCardComponent extends LitElement {
  static styles = css`
    .taskCardContainer {
      cursor: grab;
      padding: 1.5rem;
      border-radius: 0.2rem;
      border-width: 1px; 
      background-color: #ECECEC; 
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
      margin: 0 10px;
      margin-top: 5px;
      border-left: 5px solid;
    }

    .notStarted {
      border-color: #FFCBCB;
    }
    .inProgress {
      border-color: #FFFFCB;
    }
    .completed {
      border-color: #CBE5CB;
    }
  `;

  static properties = {
    task: { type: Object },
    status: { type: String }
  };

  constructor() {
    super();
  }

  render() {
    const classByStatus = this.status.toLowerCase() == 'Not started'.toLowerCase() ? 'notStarted' : this.status.toLowerCase() == 'In Progress'.toLowerCase() ? "inProgress" : "completed";
    return html`
      <div class="taskCardContainer ${classByStatus}">
        ${this.task.title}
      </div>
    `;
  }
}
