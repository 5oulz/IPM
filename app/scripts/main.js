'use strict';

// simulates nfc success on events
$('.simulate-nfc-success').on('click', _ => {
    let view = App._options.Events.view;
    if ( view ) view._onSuccessNFC();
});

// simulates nfc error on eventss
$('.simulate-nfc-error').on('click', _ => {
    let view = App._options.Events.view;
    if ( view ) view._onErrorNFC();
});

let initIGo = _ => {
    window.App = new iGo();
};

/** init function */
(_ => {
    initIGo();
})();

/** example of loading lockscreen */
/*let stuff = iGo.templates.lockscreen({
    param: {
        test: 'lultest'
    }
});
$('#test').html(stuff);*/