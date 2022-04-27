window.$ = window.jQuery = require('jquery');

export const initPushSoundButtons = (pushSounds) => {
    $('.btn-push-sound').click(event => {
        const soundKey = $(event.currentTarget).data('soundKey');
        pushSounds[soundKey].start();
    });
};

export const resetPushSoundButtons = (pushSounds) => {
    const $pushButtonSound = $('.btn-push-sound');
    $pushButtonSound.each((index, elem) => {
        const soundKey = $(elem).data('soundKey');
        pushSounds[soundKey].stop();
    });
};