const FollowToggle = require ("./follow_toggle.js");

$(() => {
    const $el = $('.follow-toggle');

    $el.each(function(idx, val) {
        new FollowToggle(val);
    });


});