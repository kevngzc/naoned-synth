window.$ = window.jQuery = require('jquery');
import * as Tone from 'tone';
import {Midi} from '@tonejs/midi';

const synths = [];

const playMidSound = (currentMidi) => {
    if (currentMidi) {
        const toneNow = Tone.now() + 0.5;
        currentMidi.tracks.forEach((track) => {
            //create a synth for each track
            const synth = new Tone.PolySynth(Tone.Synth).toDestination();
            synths.push(synth);
            //schedule all of the events
            track.notes.forEach((note) => {
                synth.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + toneNow,
                    note.velocity
                );
            });
        });
    } else {
        //dispose the synth and make a new one
        while (synths.length) {
            const synth = synths.shift();
            synth.disconnect();
        }
    }
};

export const initAiSoundButton = (aiSounds) => {

    $('#ai-play-button').click(() => {
        if ($('#ai-locker').hasClass('on')) {
            //dispose the synth and make a new one
            while (synths.length) {
                const synth = synths.shift();
                synth.disconnect();
            }
            $('#ai-volume').val('-10').trigger('change');
            const selectedSound = aiSounds[Math.floor(Math.random() * aiSounds.length)];
            const request = new XMLHttpRequest();
            request.open('GET', '/assets/sounds/MagentaAISounds/' + selectedSound, true);
            request.responseType = 'blob';
            request.onload = function (e) {
                const reader = new FileReader();
                reader.readAsArrayBuffer(request.response);
                reader.onload = function (e) {
                    playMidSound(new Midi(e.target.result));
                    updateAiVolume($('#ai-volume'));
                };
            };
            request.send();
        }
    });
};

export const updateAiVolume = ($volumeComponent) => {
    for (const synth of synths) {
        synth.volume.value = parseInt($volumeComponent.val()) <= -20
            ? Math.log10(0) // absolute 0 in db unit
            : parseInt($volumeComponent.val());
    }
};

export const restartAiSound = () => {
    while (synths.length) {
        const synth = synths.shift();
        synth.disconnect();
    }
};

export const resetAiSound = () => {
    $('#ai-locker').removeClass('on');
    $('#ai-volume').val('-20').trigger('change');
    while (synths.length) {
        const synth = synths.shift();
        synth.disconnect();
    }
};