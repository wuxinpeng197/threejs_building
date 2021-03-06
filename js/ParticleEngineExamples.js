

Examples =
{
	// (1) build GUI for easy effects access.
	// (2) write ParticleEngineExamples.js

	rain :
	{
		positionStyle    : Type.CUBE,
		positionBase     : new THREE.Vector3( 0, 200, 0 ),
		positionSpread   : new THREE.Vector3( 600, 0, 600 ),

		velocityStyle    : Type.CUBE,
		velocityBase     : new THREE.Vector3( 0, -400, 0 ),
		velocitySpread   : new THREE.Vector3( 10, 50, 10 ),
		accelerationBase : new THREE.Vector3( 0, -10,0 ),

		particleTexture : THREE.ImageUtils.loadTexture( 'images/raindrop2flip.png' ),

		sizeBase    : 8.0,
		sizeSpread  : 4.0,
		colorBase   : new THREE.Vector3(0.66, 1.0, 0.7), // H,S,L
		colorSpread : new THREE.Vector3(0.00, 0.0, 0.2),
		opacityBase : 0.6,

		particlesPerSecond : 1000,
		particleDeathAge   : 1.0,
		emitterDeathAge    : 60
	},
}
