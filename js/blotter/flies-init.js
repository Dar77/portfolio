// flies-init.js - adapted from docs at - https://blotter.js.org/
var flies = function() {
	var text = new Blotter.Text('http:', {
	  family : '"source_code_proregular", sans-serif',
	  size : 120,
	  fill : '#4c9ca0',
	  paddingLeft : 40,
	  paddingRight : 40
	});

	var material = new Blotter.FliesMaterial();

	material.uniforms.uPointCellWidth.value = 0.030;
	material.uniforms.uPointRadius.value = 0.60;
	material.uniforms.uSpeed.value = 1.9;

	var blotter = new Blotter(material, {
	  texts : text
	});

	var elem = document.getElementById('distortion-text');
	var scope = blotter.forText(text);

	scope.appendTo(elem);
};

flies();