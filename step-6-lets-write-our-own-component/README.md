# Step 6: Let's write our own component

## Instructions

* Create a new component via AFRAME.registerComponent()
* Use the animation component to move the target to a new position
* Have it move to a new random position when the element gets the ‘animationcomplete’ event.
* For instructions about the animation component, visit: github.com/ngokevin/kframe/tree/master/components/animation 

## Example

```javascript
AFRAME.registerComponent('target-animation', {
  init: function() {
    // Add listeners here for animationcomplete to run playAnimation again
    this.playAnimation();
  },

  playAnimation: function() {
    // Play around with randomizing the attributes, speed, etc
    const x = Math.random() * 5;
    const y = Math.random() * 5;
    this.setAttribute('animation', `property: position; to: ${x} ${y} 0; ease: linear; dur: 2000`);
  },
});
```

## Useful links

* https://aframe.io/docs/0.8.0/core/component.html - Documentation about components