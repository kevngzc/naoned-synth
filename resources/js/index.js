import * as Tone from 'tone';
import {initVolumeComponents, resetVolumeComponents, restartVolumeComponents} from './volumeSounds';
import {initPushSoundButtons, resetPushSoundButtons} from './pushButtonSounds';
import {initSpeedComponent, resetSpeedComponent} from './speedSounds';
import {initAiSoundButton, resetAiSound, restartAiSound, updateAiVolume} from './aiSounds';

window.$ = window.jQuery = require('jquery');

const loadPlayer = (soundPath) => {
    const player = new Tone.Player(soundPath);
    player.playbackRate = 1;
    player.toDestination();

    return player;
};

const soundsPath = '/assets/sounds';
const pushSoundsPath = soundsPath + '/PushSounds';
const pushSounds = {
    'bar': loadPlayer(pushSoundsPath + '/Bar.mp3'),
    'birds': loadPlayer(pushSoundsPath + '/Oiseaux.mp3'),
    'sport': loadPlayer(pushSoundsPath + '/Sport.mp3')
};

const volumeSounds = {
    'royal_place': loadPlayer(soundsPath + '/WaterSounds/PlaceRoyale.mp3'),
    'water_mirror': loadPlayer(soundsPath + '/WaterSounds/MiroirdEau.mp3'),
    'versailles_island': loadPlayer(soundsPath + '/WaterSounds/Trentmoult.mp3'),
    'commerce': loadPlayer(soundsPath + '/TransportSounds/Commerce.mp3'),
    'hotel_dieu': loadPlayer(soundsPath + '/TransportSounds/HotelDieu.mp3'),
    'bouffay': loadPlayer(soundsPath + '/PeopleSounds/Bouffay.mp3'),
    'talensac': loadPlayer(soundsPath + '/PeopleSounds/Talensac.mp3')
};

const aiSounds = [
    'Magenta-AI-Sound-10948.mid',
    'Magenta-AI-Sound-14597.mid',
    'Magenta-AI-Sound-19343.mid',
    'Magenta-AI-Sound-33822.mid',
    'Magenta-AI-Sound-45420.mid',
    'Magenta-AI-Sound-57749.mid',
    'Magenta-AI-Sound-64393.mid',
    'Magenta-AI-Sound-77071.mid',
    'Magenta-AI-Sound-85488.mid',
    'Magenta-AI-Sound-95595.mid'
];

// Toggle button and play button
$(document).ready(function () {
    $('.btn--toggle').click(function () {
        $(this).toggleClass('on');
    });
    $('.btn-push-sound').click(function () {
        const $self = $(this);
        $self.toggleClass('pushed');
        setTimeout(() => {
            $self.toggleClass('pushed');
        }, 750);
    });
    initVolumeComponents(volumeSounds, updateAiVolume);
    initPushSoundButtons(pushSounds);
    initAiSoundButton(aiSounds);
    initSpeedComponent(Object.assign(pushSounds, volumeSounds));

    $('.btn--play, .btn--pause').click(function () {
        $(this).toggleClass('btn--play btn--pause');
        restartVolumeComponents(volumeSounds);
        resetPushSoundButtons(pushSounds);
        restartAiSound();
    });

    $('.btn--stop').click(function () {
        resetVolumeComponents(volumeSounds);
        resetPushSoundButtons(pushSounds);
        resetSpeedComponent();
        resetAiSound();
    });

    $('#btn-help, #btn-modal-helper-close, #help-modal > .modal-overlay').click(() => {
        $('#help-modal').toggleClass('hidden flex');
    });

    $('#btn-share, #btn-modal-share-close, #share-modal > .modal-overlay').click(() => {
        $('#share-modal').toggleClass('hidden flex');
    });
});