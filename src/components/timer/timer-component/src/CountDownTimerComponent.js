import { html, css, LitElement } from 'lit';

export class CountDownTimerComponent extends LitElement {
  static styles = css`
    .countDownTimer {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    .countDownTimer div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .countDownTimer span {
      font-size: xx-large;
    }
    .countDownTimer .messageSupport {
      font-size: medium;
      color: #6B7280;
      font-weight: 200;
    }
  `;

  static properties = {
    days: { type: String },
    hours: { type: String },
    minutes: { type: String },
    seconds: { type: String },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="countDownTimer">
        <div>
          <span>${this.days}</span>
          <span class="messageSupport">Days</span>
        </div>
        <div>
          <span>${this.hours}</span>
          <span class="messageSupport">Hours</span>
        </div>
        <div>
          <span>${this.minutes}</span>
          <span class="messageSupport">Minutes</span>
        </div>
        <div>
          <span>${this.seconds}</span>
          <span class="messageSupport">Seconds</span>
        </div>
      </div>
  `;
  }

}
