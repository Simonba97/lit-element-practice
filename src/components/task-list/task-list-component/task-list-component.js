import { TaskListComponent } from './src/TaskListComponent.js';
import { TaskCreatorComponent } from './src/TaskCreatorComponent.js';
import { TaskBoardComponent } from './src/TaskBoardComponent.js';
import { TaskCardComponent } from './src/TaskCardComponent.js';

window.customElements.define('task-list-component', TaskListComponent);
window.customElements.define('task-creator-component', TaskCreatorComponent);
window.customElements.define('task-board-component', TaskBoardComponent);
window.customElements.define('task-card-component', TaskCardComponent);
