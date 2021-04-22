class FollowToggle {
    constructor ($el) {
        this.$el = $el;
        this.userId = $el.data("user-id");
        this.followState = $el.data("initial-follow-state");
        this.render();
    };

    render() {
        if (this.followState === "unfollowed") {
            console.log("Follow!");
        } else {
            console.log("Unfollow!");
        };
    };

    handleClick(e) {
        e.preventDefault();
        if (this.followState === "followed") {
            let followMethod = "DELETE";
        } else {
            followMethod = "POST";
        }
        const submit = $.ajax({
           method: followMethod,
           url: `/users/${this.userId}/follow`,
           dataType: "JSON",
        });

        submit.then.toggleClass("unfollowed followed");
    }
}

module.exports = FollowToggle;