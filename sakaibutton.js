//Import the LitElement base class and html helper function

import { LitElement, html ,css} from 'lit-element';

class sakaiButton extends LitElement {

    static get properties() {
        return {
            buttonName: {type: String},
            buttonType: {type:String},
        };
    }

    static get styles() {
        return css`
       button {
       font-family: "Open Sans", sans-serif;
       font-size: 50px;
       font-weight: 400;
       border-style: solid;
       border-width: 1px;
       border-radius: 50px;
       radius: 50px;
       padding: 7px 10px;
       margin-right: 4px;
       border-style: solid; 
    }

    button:focus{
        outline: 3px solid #5b9dd9;
        outline-offset: 2px;
    }

    button.primary{
        color: #FF00FF;
        border-color: #326b97;
        background-color: #15597e;
    }
    
    button: hover.primary{
        background-color: #000080;
        border-color: #124466;
        cursor: grab;
     }
     
     button:active.primary{
        box-shadow: inset 0 0 20px rgba(0,120,20,50)
     }
     
     button.secondary{
        color: #00FFFF;
        border-color: #ccc;
        background-color: linear-gradient(#fff, #f9f9f9);
      }
      
      button: hover.secondary{
        border-color: #999;
        cursor: grab;
      }
      
      button: active.secondary{
        background-color: linear-gradient(#f9f9f9, #fff);
        box-shadow: inset 0 0 20px rgba(120,50,40,0);
      }
      `;
    }
    
    constructor() {
        super();
        this.buttonName = 'Bob';
        this.buttonType="primary";
    }

    /**
     * Implement `render` to define a template for your element.
     *
     * You must provide an implementation of `render` for any element
     * that uses LitElement as a base class.
     */

    render() {
        /**
         * `render` must return a lit-html `TemplateResult`.
         *
         * To create a `TemplateResult`, tag a JavaScript template literal
         * with the `html` helper function:
         */

        return html`
            <button class="${this.buttonType}" @click="${this.clickHandler}">${this.buttonName}</button>
        `;
    }

    clickHandler(e){
        console.log('hello');
    }
}


customElements.define('sakai-button', sakaiButton);
