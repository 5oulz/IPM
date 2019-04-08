'use strict';

class Msoption extends HTMLElement {
    constructor() {
        super();
    }

    attachedCallback() {
        this._bindEvents();
        this._addEventListeners();
        alert('done');
    }

    detachedCallback() {}
}

/** register element */
window.customElements.define('ms-option', Msoption, { extends: 'div' });