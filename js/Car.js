AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" },
    clickCounter: { type: "number", default: 0 }
  },
  init: function() {
    // Do something when component first attached.
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 50, z: 80 };
    const rotation = { x: 0, y: -100, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  },

  //add update function to update the rotation
  update: function() {
    window.addEventListner("click", e=> {
      this.data.clickCounter = this.data.clickCounter + 1;
      if(this.data.clickCounter === 1) {
        const rotation = {x:0, y: 20, x: 0};
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 2)
      {
        const rotation = {x: 0, y: 100, z: 0};
      }
      
    })
  }

  
});
