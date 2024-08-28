import { html, css, LitElement } from 'lit';

export class TaskCreatorComponent extends LitElement {
  static styles = css`
    :host {
      display: flex;
      padding: 25px;
      width: 100%; 
    }
    
    .taskCreatorContainer {
      width: 100%; 
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .taskCreatorContainer form {
      max-width: 32rem; 
    }

    .taskCreatorContainer .basicDetail {
      display: flex;
    }

    .taskCreatorContainer .basicDetail input {
      margin-right: 10px;
    }

    .taskCreatorContainer #titleTask {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      padding-left: 1rem;
      padding-right: 1rem;
      border-radius: 0.25rem;
      width: 420px;
      border: none;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
    }

    .taskCreatorContainer .basicDetail .btnAddTask {
      cursor: pointer;
      display: inline-flex;
      padding: 0.625rem;
      border-radius: 0.5rem;
      background-color: #007bff;
      border: none;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
    }

    .taskCreatorContainer .basicDetail .btnMoreFieldsInformation {
      cursor: pointer;
      display: inline-flex;
      padding: 0.625rem;
      border-radius: 0.5rem;
      background-color: #B7D9FF;
      border: none;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
      margin-left: 5px;
    }

    .taskCreatorContainer .basicDetail svg {
      width: 1.25rem; 
      height: 1.25rem; 
    }
    .taskCreatorContainer .basicDetail path {
      fill: #ECECEC; 
    }
    
    .taskCreatorContainer #descriptionTask {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      padding-left: 1rem;
      padding-right: 1rem;
      border-radius: 0.25rem;
      border: none;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
      resize: none;
      margin-top: 10px;
    }

    .taskCreatorContainer .message span {
        margin-top: 0;
        margin-bottom: 0.75rem; 
        font-weight: 200; 
        font-size: small;
        color: #6B7280; 
        line-height: normal;
    }
  `;

  static properties = {
    formMoreDetailAvailable: { type: Boolean },
    messageDetail: { type: Object } // All info related
  };

  constructor() {
    super();
    this.formMoreDetailAvailable = false;
    this.messageDetail = {
      show: false,
      textMessage: null,
    }
  }

  _addTask(event) {
    event.preventDefault(); // Prevent page from reloading

    // Get the form values
    const titleInput = this.shadowRoot.getElementById('titleTask');
    const descriptionInput = this.shadowRoot.getElementById('descriptionTask');

    // Create a new task object
    const newTask = {
      id: Date.now().toString(), // Unique identifier using current timestamp
      title: titleInput.value,
      description: descriptionInput ? descriptionInput.value : '',
      datecreate: new Date().toISOString(), // Current date and time
      status: "Not Started"
    };

    this._addTaskParentProperties(newTask);

    // Clear the form
    this._emptyForm(titleInput, descriptionInput);

    // Configuration message
    this.messageDetail.show = true;
    this.messageDetail.textMessage = "Task has been created successfully 🚀";
  }


  _emptyForm(titleInput, descriptionInput) {
    titleInput.value = '';
    if (descriptionInput) {
      descriptionInput.value = '';
    }
  }

  _addTaskParentProperties(newTask) {
    const event = new CustomEvent('task-added', {
      detail: newTask,
      bubbles: true, // Permite que el evento burbujee hacia arriba hasta el padre
      composed: true // Permite que el evento cruce los límites del Shadow DOM
    });

    this.dispatchEvent(event);
  } // end _addTaskParentProperties

  render() {
    return html`
    <div class="taskCreatorContainer">
      <form @submit="${this._addTask}">

          <!-- Basic detail section -->
          <div class="basicDetail">
            <input id="titleTask" type="text" placeholder="Write a new task" required>
            <button type="submit" class="btnAddTask">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M14 7v1H8v6H7V8H1V7h6V1h1v6z"/>
              </svg>
            </button>
            <button type="button" class="btnMoreFieldsInformation" @click="${() => this.formMoreDetailAvailable = !this.formMoreDetailAvailable}">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M113.7 304C86.2 304 64 282.6 64 256c0-26.5 22.2-48 49.7-48 27.6 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48z"/>
                <path d="M256 304c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.3-48 49.8-48 27.5 0 49.7 21.5 49.7 48 0 26.6-22.2 48-49.7 48z"/>
                <path d="M398.2 304c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.2-48 49.8-48 27.5 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48z"/>
              </svg>
            </button>
          </div>

          <!-- Full detail section -->
          ${this.formMoreDetailAvailable ? html`
          <div class="fullDetail" >
            <textarea id="descriptionTask" name="descriptionTask" rows="3" cols="50" placeholder="Describe your task, come on be creative 🤯"></textarea>
          </div>
          ` : null}

      </form>

      <!-- Section message -->
      ${this.messageDetail.show ? html`
        <div class="message">
              <span>${this.messageDetail.textMessage}</span>
        </div>
      `: null}
      
    </div>
    `;
  }
} // end TaskCreatorComponent
