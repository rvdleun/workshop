# Step 3: Assets

* Upload an asset into your assets directory
* Click on the asset, select ‘Copy url’.
* Add <a-assets> on top of your <a-scene>
* Add an <img> element into the <a-assets>. 
* Be sure to give it the following attributes: id and src
* Add the texture to a primitive via `src=“#<id>”`
* Use <a-sky> to add a panoramic background

## Example

```html
<a-scene>
  <a-assets>
    <a-asset-item id="bike-obj" src="https://cdn.glitch.com/23e2d8ac-fb58-4725-8d3b-a9a0264578e5%2Fmodel.obj?1542708648910"></a-asset-item>
    <a-asset-item id="bike-mtl" src="https://cdn.glitch.com/23e2d8ac-fb58-4725-8d3b-a9a0264578e5%2Fmodel.mtl?1542708647990"></a-asset-item>
    <img id="picture" src="http://glitch.com/assets/12345.jpg" />
  </a-assets>
  <a-obj-model src="#bike-obj" mtl="#bike-mtl" position="-2 0 -5"></a-obj-model>
  <a-box position="0 0 -5" src="#id"></a-box>
</a-scene>
```

## Useful links

* https://aframe.io/docs/0.8.0/core/asset-management-system.html  - Documentation about the asset management system
* https://aframe.io/docs/0.8.0/primitives/a-obj-model.html - Instructions on how to implement an OBJ Model
* https://aframe.io/docs/0.8.0/primitives/a-gltf-model.html - Instructions on how to implement an GLTF model
* https://images.google.com/ - For finding textures
* https://poly.google.com/blocks - For finding WebVR friendly 3D models