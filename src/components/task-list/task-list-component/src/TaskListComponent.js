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
      width: 100%;
    }

`;

  static properties = {
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="taskListContainer">
        <task-creator-component></task-creator-component>
      </div>
    `;
  }
}
