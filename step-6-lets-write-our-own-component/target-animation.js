AFRAME.registerComponent('target-animation', {
    init: function() {
        this.playAnimation();

        this.el.addEventListener('animationcomplete', () => this.playAnimation() );
    },

    playAnimation: function() {
        // Play around with randomizing the attributes, speed, etc
        const x = Math.random() * 5;
        const y = Math.random() * 5;
        const dur = 1000 + (Math.random() * 3000);
        this.el.setAttribute('animation', `property: position; to: ${x} ${y} -5; easing: linear; dur: ${dur}`);
    },
});
