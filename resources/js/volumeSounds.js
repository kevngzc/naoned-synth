window.$ = window.jQuery = require('jquery');
require('../vendor/rotaryswitch/jquery.rotaryswitch.js');

export const initVolumeComponents = (volumeSounds, updateAiVolumeCb) => {
    const $volumeComponents = $('.rotaryswitch-component');
    $volumeComponents.rotaryswitch({
        minimum: -20, // Minimal value
        maximum: -2,// Maximum value
        step: 1,// Step size
        snapInMotion: true,// Snap to steps in motion
        beginDeg: 270,// Start point in deg
        lengthDeg: 180,// Length in deg
        minimumOverMaximum: false,// Which value will used, if the the start and the end
        showInput: false,// Show input element
        showMarks: true, // Show deg marks
        themeClass: 'defaultTheme'// Theme class
    });

    $volumeComponents.change((event) => {
        const $volumeComponent = $(event.currentTarget);
        if ($volumeComponent.attr('id') !== 'ai-volume') {
            const player = volumeSounds[$volumeComponent.data('soundKey')];
            player.volume.value = parseInt($volumeComponent.val()) <= -20
                ? Math.log10(0) // absolute 0 in db unit
                : parseInt($volumeComponent.val());
        } else {
            updateAiVolumeCb($volumeComponent);
        }
    });

    for (const player of Object.values(volumeSounds)) {
        player.autostart = true;
        player.loop = true;
        player.volume.value = Math.log10(0);
    }
};

export const restartVolumeComponents = (volumeSounds) => {
    for (const player of Object.values(volumeSounds)) {
        if (player.state === 'started') {
            player.stop();
        } else {
            player.start();
        }
    }
};

export const resetVolumeComponents = (volumeSounds) => {
    const $volumeComponents = $('.rotaryswitch-component:not(#ai-volume)');
    $volumeComponents.val('-20');
    $volumeComponents.trigger('change');

    for (const player of Object.values(volumeSounds)) {
        player.stop();
        player.start();
        player.volume.value = Math.log10(0);
    }
};