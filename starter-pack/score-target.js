AFRAME.registerComponent('score-target', {
    schema: {
        cursor: { type: 'selector', default: 'a-cursor' },
        scoreboard: { type: 'selector' },
    },

    score: 0,
    tracking: false,

    init: function() {
        this.el.addEventListener('mouseenter', () => { this.onMouseEnter() });
        this.el.addEventListener('mouseleave', () => { this.onMouseLeave() });
    },

    tick: function() {
        if (this.tracking) {
            this.score++;
            this.data.scoreboard.setAttribute('value', this.score);
        }
    },

    onMouseEnter() {
        this.data.cursor.setAttribute('color', '#0F0');
        this.data.cursor.setAttribute('scale', '1.5 1.5 1.5');
        this.tracking = true;
    },

    onMouseLeave() {
        this.data.cursor.setAttribute('color', '#FFF');
        this.data.cursor.setAttribute('scale', '1 1 1');
        this.tracking = false;
    }
});