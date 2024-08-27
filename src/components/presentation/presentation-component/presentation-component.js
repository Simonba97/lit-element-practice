import { PresentationComponent } from './src/PresentationComponent.js';
import { MeCardComponent } from './src/MeCardComponent.js';
import { SkillsCardComponent } from './src/SkillsCardComponent.js';
import { FooterComponent } from './src/FooterComponent.js';

window.customElements.define('presentation-component', PresentationComponent);
window.customElements.define('me-card-component', MeCardComponent);
window.customElements.define('skills-card-component', SkillsCardComponent);
window.customElements.define('footer-component', FooterComponent);
