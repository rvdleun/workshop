# Step 1: Primitives

## Primitives

* &lt;a-box>
* &lt;a-circle>
* &lt;a-cone>
* &lt;a-cylinder>
* &lt;a-sky>
* &lt;a-torus-knot>
* &lt;a-torus>
* &lt;a-triangle>

## Attributes

* Position
* Rotation
* Scale
* Color

## Example

```html
<a-scene background="color: #ECECEC">
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow></a-box>
    <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow></a-sphere>
    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow></a-cylinder>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow></a-plane>
</a-scene>
```

## Useful links

* https://aframe.io/docs/0.8.0  - Scroll down for a list of primitives