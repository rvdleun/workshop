# Step 5: Anatomy of a component

## Instructions

* Create an a-cursor and make it a child of the camera
* Create an a-text. Attach it to the camera or place in the environment
* Create a target object that the user will need to look at
* Add the score-target component to the target.
* Setup the cursor and scoreboard property.

## Example

```html
<a-entity camera position="0 1.6 0" look-controls>
  <a-cursor></a-cursor>
  <a-text id="scoreboard" position="0 1 -3" value="0000"></a-text>
</a-entity>
<a-entity score-target="scoreboard: #scoreboard"></a-entity>
```

## Useful links

* https://aframe.io/docs/0.8.0/core/component.html - Documentation about components