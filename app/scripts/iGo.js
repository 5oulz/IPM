'use strict';

class iGo {
    constructor() {
        this._screen = $('#iGo-screen');
        this._options = {};
        this._passiveEvs = this._passiveEvSupported();
        this._bindEvents();
        this._initLockScreen();
        this._availableOptions();
    }

    _bindEvents() {
        this._openOption = this._openOption.bind(this);
    }
    /**
     * add all the options
     */
    _availableOptions() {
        this._initOption({ cssclass: 'icon-ticket', name: 'Events'});
    }

    /**
     * initializes lock screen
     */
    _initLockScreen() {
        let lockScreenParams = {
            test: 'click me'
        };
        this._lockScreen = new lockscreen();
        this._lockScreen.render($('#iGoFrame'), lockScreenParams);
    }

    /**
     * add new option
     */
    _initOption(params) {
        let opt = myApp.templates.msoption;
        this._options[params.name] = {
            cssclass: params.cssclass,
            view: null
        };
        this._screen.append(opt(params));
        $('.' + params.cssclass).on('click', this._openOption).bind(this);
        //remove later, testing purposes
        //$('.' + params.cssclass).click();
    }

    /** 
     * initializes specific functionality
    */
    _openOption(ev) {
        switch($(ev.currentTarget).attr('data-msoption')) {
            case 'Events':
                if( this._options.Events.view !== null ) {
                    this._options.Events.view.destroy();
                    this._options.Events.view = null;
                }
                this._options.Events.view = new Events();
                this._options.Events.view.render();
        }
    }

    _passiveEvSupported () {
        let passiveEvs = false;
        try {
            document.addEventListener('test', null, {get passive () {
                passiveEvs = { passive: true };
            }});
        } catch (e) {}

        return passiveEvs;
    }
};