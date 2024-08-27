import { html, css, LitElement } from 'lit';

/* Imports to Timer components */
import '../../timer-component/src/CountDownTimerComponent.js';

export class TimerComponent extends LitElement {
  static styles = css`

    .timerContainer{
      margin: 0 10px;
      padding: 1.5rem;
      border-radius: 0.5rem;
      border-width: 1px; 
      border-color: #E5E7EB; 
      background-color: #ECECEC; 
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
    }

    .timerContainer input {
      border: none;
      border-radius: 0.5rem;
      padding: 0.5rem;
      font-size: 1rem;
      margin-bottom: 1rem;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
    }

    .timerContainer .descriptionCard {
      margin-top: 0;
      margin-bottom: 0.75rem; 
      font-weight: 200; 
      font-size: medium;
      color: #6B7280; 
      line-height: normal;
    }
  `;

  static properties = {
    targetDate: { type: String }, // Target date entered by the user
    remainingTime: { type: Object }, // Object that will store the remaining days, hours, minutes and seconds
  };

  constructor() {
    super();
    this.targetDate = '';
    this.remainingTime = {};
  }

  startCountdown() {
    if (this.targetDate) {
      this.updateRemainingTime();
      this.intervalId = setInterval(() => { // Start scheduled execution every second
        this.updateRemainingTime(); // Calculate remaining time
      }, 1000);
    }
  }

  updateRemainingTime() {
    const targetDate = new Date(this.targetDate).getTime(); // Convert target date to DateObject
    const now = new Date().getTime(); // Current date
    const difference = targetDate - now; // Difference between them

    if (difference <= 0) {
      // Finish CountDown
      //TODO: Show message of finish

      clearInterval(this.intervalId);
      this.remainingTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    } else {
      // Calculate days, hours, mins and secs
      this.remainingTime = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
  }

  handleDateChange(event) {
    this.targetDate = event.target.value;
    clearInterval(this.intervalId); // Clear any previous intervals

    //TODO: Correct date validation 
    this.startCountdown(); // Start the countdown with the new date
  }

  render() {
    const { days, hours, minutes, seconds } = this.remainingTime;
    return html`
    <div class="timerContainer">
      <div class="actionsUserContainer">
        <input type="datetime-local" @change="${this.handleDateChange}" />
      </div>
      ${this.targetDate ? html`<countdown-timer-component days="${days}" hours="${hours}" minutes="${minutes}" seconds="${seconds}"></countdown-timer-component>` : html`<p class="descriptionCard">Please enter a target date and time.</p>`}
    </div>
  `;
  }

}
