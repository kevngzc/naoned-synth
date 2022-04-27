window.$ = window.jQuery = require('jquery');

export const initSpeedComponent = (sounds) => {
    $('#myRange').change((event) => {
        for (const player of Object.values(sounds)) {
            player.playbackRate = parseInt($(event.currentTarget).val()) / 10;
        }
    });
};

export const resetSpeedComponent = () => {
    $('#myRange').val(10).trigger('change');
};