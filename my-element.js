// Import the LitElement base class and html helper function
import { LitElement, html } from './node_modules/lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {

    static get properties() {
        return { myProp: 'blue' };
    }

    constructor() {
        super();
        this.message = 'Hi Callie';
    }


    /**
     * Implement `render` to define a template for your element.
     *
     * You must provide an implementation of `render` for any element
     * that uses LitElement as a base class.
     */
    render(){
        /**
         * `render` must return a lit-html `TemplateResult`.
         *
         * To create a `TemplateResult`, tag a JavaScript template literal
         * with the `html` helper function:
         */
        return html`
      <!-- template content -->
      <p>${this.myProp}</p>
    `;}
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);
