AFRAME.registerComponent("target-marker", {
  init: function() {
    let el = this.el;
    
    this.addMarker = function(e) {
      let p = e.detail.intersection.point;
      let scene = document.querySelector("a-scene");
      
      let newMark = document.createElement("a-entity");
      newMark.setAttribute("geometry", {
        primitive: "sphere"
      });
      newMark.setAttribute("gltf-model", "#ashleyVR");
      newMark.setAttribute("scale", ".1 .1 .1");
      newMark.setAttribute("position", p);
      newMark.setAttribute("target-marker", {});
      // ^ this allows us to place the 'newMark' at position p!
      scene.appendChild(newMark);
    }
    
    this.el.addEventListener("click", this.addMarker);
  },
  remove: function() {
    this.el.removeEventListener("click", this.addMarker);
  }
  
});
