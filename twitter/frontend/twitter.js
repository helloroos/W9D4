const FollowToggle = require ("./follow_toggle.js");

$(() => {
    const $el = $('.follow-toggle');
    $el.each(function(idx, val) {
        const $val = $(val);
        new FollowToggle($val);
    });
    console.log("what is happening")

});