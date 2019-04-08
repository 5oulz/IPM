'use strict';

class Events {

    constructor() {
        this._setArgs();
    }

    _setArgs() {
        this._html = myApp.templates.eventsMain;
        this._eventlist = [
            {
                meta: 'metallica',
                name: 'Metallica Tour',
                date: '26 June 2019',
                local: 'Shibuya, Tokyo, Japan',
                startTime: '22h00'
            },
            {
                meta: 'edo-museum',
                name: 'Edo Museum',
                date: '30 May 2019',
                local: 'Ryogoku, Tokyo, Japan',
                startTime: 'all day'
            },
            {
                meta: 'avengers',
                name: 'Avengers - Infinity War',
                date: '27 April 2019',
                local: 'Centro Comercial Colombo, Lisboa, Portugal',
                startTime: '15h30'
            }
        ]
    }

    _bindEvents() {
        this._onBackClick = this._onBackClick.bind(this);
        this._onHelpClick = this._onHelpClick.bind(this);
        this._onEventCardClick = this._onEventCardClick.bind(this);
        this._onEventConfirm = this._onEventConfirm.bind(this);
        this._onSuccessNFC = this._onSuccessNFC.bind(this);
        this._onErrorNFC = this._onErrorNFC.bind(this);
        this.destroy = this.destroy.bind(this);
    }

    _addEventListeners() {
        this._element.find('button.back').on('click', this._onBackClick);
        this._element.find('.event-item').on('click', this._onEventCardClick);
        this._element.find('.event-confirm').on('click', this._onEventConfirm);
        this._element.find('.close-event-error').on('click', this.destroy);
    }

    render() {
        let navbar = myApp.templates.navFnBar;
        $('#iGo-screen').append(this._html({ events: this._eventlist }));
        this._element = $('#iGo-screen').find('#events-main');
        this._element.find('.nav-fn').html(navbar());
        this._bindEvents();
        this._addEventListeners();

        // animate entry 
        let timer = setInterval( _ => {
            this._element.addClass('enter');
        }, 0);
    }

    destroy() {
        this._element.unbind();
        this._element.remove();
    }

    /**
     * aux functions
     */

    /**
     * displays event confirmation aside
     * @param {string} meta 
     */
    _displayEventDescription(meta) {
        let item = this._element.find(`.event-description[data-event=${meta}]`);
        this._element.find('.event-description').removeClass('active');
        item.addClass('active');
    }

    /**
     * confirms and goes to next screen
     * @param {string} meta 
     */
    _proceedScreenNFC(meta) {
        let item = this._element.find('.event-screen.nfc-use');

        this._element.find('.event-screen.selection').removeClass('active');
        item.addClass('active');
        item.find(`.nfc-block[data-event=${meta}]`).addClass('active');
    }

    /**
     * events
     */

    _onEventCardClick(ev) {
        let item = $(ev.currentTarget);

        this._element.find('.event-item').removeClass('selected');
        item.addClass('selected');
        this._displayEventDescription(item.attr('data-event'));
    }

    _onEventConfirm(ev) {
        let item = $(ev.currentTarget).parents('.event-description');
        this._proceedScreenNFC(item.attr('data-event'));
    }

    /**
     * triggered by action simulator
     */
    _onSuccessNFC() {
        this._element.find('.event-screen.nfc-use').removeClass('active');
        this._element.find('.event-screen.success').addClass('active');
        this._element.find('.nav-fn button').hide();

        let timer = setInterval(_ => {
            this.destroy();
        }, 5000);
    }

    /**
     * triggered by action simulator
     */
    _onErrorNFC() {
        this._element.find('.event-screen.nfc-use').removeClass('active');
        this._element.find('.event-screen.error').addClass('active');
    }

    /**
     * nav bar
     */
    _onBackClick() {
        let current = this._element.find('.event-screen.active');

        if( current.hasClass('selection') ) {
            // first screen, has to go back to main menu
            this.destroy();
        } else if( current.hasClass('nfc-use') ) {
            // 2nd screen
            this._element.find('.event-screen.nfc-use').removeClass('active');
            // removing active from blocks
            this._element.find('.nfc-block').removeClass('active');
            this._element.find('.event-screen.selection').addClass('active');
        } else if( current.hasClass('error') ) {
            // error screen
            this._element.find('.event-screen.error').removeClass('active');
            this._element.find('.event-screen.selection').addClass('active');
        }
    }

    _onHelpClick() {}
}