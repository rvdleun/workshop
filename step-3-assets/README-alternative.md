# Step 3: Assets

* Go to https://www.base64-image.de/
* Upload an image. Click on ‘Show Code’ and copy-paste the 1st box
* Add <a-assets> on top of your <a-scene>
* Add an <img> element into the <a-assets>. Be sure to give it the following attributes: id and src.
* Add the texture to a primitive via `src=“#<id>”`
* Use <a-sky> to add a panoramic background

## Example

```html
<a-scene>
  <a-assets>
    <img id=“picture” src=“data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAS” />
  </a-assets>
  <a-box position=“0 0 -5” src=“#id”></a-box>
</a-scene>
```

## Useful links

* https://aframe.io/docs/0.8.0/core/asset-management-system.html  - Documentation about the asset management system
* https://images.google.com/ - For finding textures
* https://poly.google.com/blocks - For finding WebVR friendly 3D models