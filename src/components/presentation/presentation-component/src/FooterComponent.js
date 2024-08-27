import { html, css, LitElement } from 'lit';
export class FooterComponent extends LitElement {

    static styles = css`
        .statsContainer {
            width: 98%;
            margin: 20px 0;
            border-width: 1px; 
            border-color: #E5E7EB; 
            background-color: #ECECEC; 
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
            padding: 1rem; 
            border-radius: 0.5rem; 
        }
        .statsContainer dl {
            display: grid;
            padding: 1rem; 
            grid-template-columns: repeat(2, minmax(0, 1fr)); 
            gap: 2rem; 
            max-width: 1280px; 
            color: #111827; 
        }
        .statsContainer .statCard {
            display: flex; 
            flex-direction: column; 
            justify-content: center; 
            align-items: center; 
        }
        .statsContainer .statCard dt {
            margin-bottom: 0.5rem; 
            font-size: 1.875rem;
            line-height: 2.25rem; 
            font-weight: 800; 

        }
        .statsContainer .statCard dd {
            color: #6B7280; 
        }
    `;

    static properties = {
    };

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="statsContainer">
                    <dl>
                        <div class="statCard">
                            <dt>40+</dt>
                            <dd>Professional projects</dd>
                        </div>
                        <div class="statCard">
                            <dt>2</dt>
                            <dd>Personal projects in production</dd>
                        </div>
                        <div class="statCard">
                            <dt>5+</dt>
                            <dd>Customers</dd>
                        </div>
                        <div class="statCard">
                            <dt>13+</dt>
                            <dd>Contributions</dd>
                        </div>
                    </dl>
            </div>
    `;
    }

}
