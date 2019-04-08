'use strict';

class lockscreen {

    constructor() {
        this._setArgs();
    }

    attachedCallback() {
    }

    detachedCallback() {
        this.removeEventListener('click');
    }

    _setArgs() {
        this._html = myApp.templates.lockscreen;
    }

    _bindEvents() {
        this._onClick = this._onClick.bind(this);
    }

    _addEventListeners() {
        this._element.on('click', this._onClick);
    }

    render(location, params) {
        location.prepend(this._html(params));
        this._element = location.find('#lock-screen');
        this._bindEvents();
        this._addEventListeners();
    }

    /**
     * events
     */

    _onClick(ev) {
        this._element.addClass('unlocked');
    }
}