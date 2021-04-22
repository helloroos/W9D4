class FollowToggle {
    constructor ($el) {
        this.$el = $el;
        console.log($el);
        this.userId = $el.data("user-id");
        this.followState = $el.data("follow-state");
        this.render();
        this.handleClick($el);
    };

    render() {
        if (this.followState === "unfollow") {
            const $btn = $("<li>");
            $btn.append("Follow!")
            this.$el.append($btn);
        } else {
            const $btn = $("<li>");
            $btn.append("Unfollow!")
            this.$el.append($btn);
        };
    };

    // handleClick(e) {
    //     e.preventDefault();
    // }

    handleClick(e) {
        e.preventDefault();
        if (this.followState === "follow") {
            let followMethod = "DELETE";
        } else {
            followMethod = "POST";
        }
        const submit = $.ajax({
            method: followMethod,
            url: `/users/${this.userId}/follow`,
            dataType: "JSON",
        });
        this.$el.on("click", "li", (e) => {
            const $li = $(e.currentTarget);
            $li.toggleAttrVal(follow-state, "unfollow", "follow");
        });
        return submit;
    };
};

module.exports = FollowToggle;