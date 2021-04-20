/* -------------------------------------------------------------------------- */
/*                                   globals                                  */
/* -------------------------------------------------------------------------- */
let gl = null;
let glCanvas = null;

// Aspect ratio and coordinate system
// details
let aspectRatio;
let currentRotation = [0, 1];
let currentScale = [0.0, 0.0];

// Vertex information
let vertexArray;
let vertexBuffer;
let vertexNumComponents;
let vertexCount;

// Rendering data shared with the
// scalers.
let uScalingFactor;
let uGlobalColor;
let uRotationVector;
let aVertexPosition;

// Animation timing
let previousTime = 0.0;
let degreesPerSecond = 45.0;

/* -------------------------------------------------------------------------- */
/*                              get canvas contex                             */
/* -------------------------------------------------------------------------- */
glCanvas = document.getElementById("canvas1");
gl = glCanvas.getContext("webgl");

/* -------------------------------------------------------------------------- */
/*                       Define shaders code                                  */
/* -------------------------------------------------------------------------- */
const vertexShaderCode = `
	attribute vec2 aVertexPosition;

	uniform vec2 uScalingFactor;
	uniform vec2 uRotationVector;

	void main() {
		vec2 rotatedPosition = vec2(
			aVertexPosition.x * uRotationVector.y + aVertexPosition.y * uRotationVector.x,
			aVertexPosition.y * uRotationVector.y -aVertexPosition.x * uRotationVector.x
		);

		gl_Position = vec4(rotatedPosition * uScalingFactor, 0.0, 2.0);
	}
`
const fragmentShaderCode =  `
	#ifdef GL_ES
	precision highp float;
	#endif

	uniform vec4 uGlobalColor;

	void main() {
		gl_FragColor = uGlobalColor;
	}
`;
const shadersCode = [
	{
		type: gl.VERTEX_SHADER,
		code: vertexShaderCode
	},
	{
		type:gl.FRAGMENT_SHADER,
		code: fragmentShaderCode
	}
];


/* -------------------------------------------------------------------------- */
/*                  Compiling and linking the shader program                  */
/* -------------------------------------------------------------------------- */
function buildShaderProgram(shadersCode) {
	let glProgram = gl.createProgram();

	shadersCode.forEach( shCode=> {
		//Create shader object of given type
		let shader = gl.createShader(shCode.type);

		//Attach shader's source code to the shader
		gl.shaderSource(shader, shCode.code);

		//Compile the shader
		gl.compileShader(shader);


		if (shader) {
			gl.attachShader(glProgram, shader);
		}
	});

	gl.linkProgram(glProgram)

	if (!gl.getProgramParameter(glProgram, gl.LINK_STATUS)) {
	  console.log("Error linking shader program:");
	  console.log(gl.getProgramInfoLog(glProgram));
	}

	return glProgram;
}

/* -------------------------------------------------------------------------- */
/*                       Drawing and animating the scene                      */
/* -------------------------------------------------------------------------- */
function animateScene() {
	gl.viewport(0, 0, glCanvas.width, glCanvas.height);
	gl.clearColor(0.5, 0.5, 0.5, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	let radians = currentAngle * Math.PI / 180.0;
	currentRotation[0] = Math.sin(radians);
	currentRotation[1] = Math.cos(radians);

	gl.useProgram(shaderProgram);

	uScalingFactor =
		gl.getUniformLocation(shaderProgram, "uScalingFactor");

	uGlobalColor =
		gl.getUniformLocation(shaderProgram, "uGlobalColor");

	uRotationVector =
		gl.getUniformLocation(shaderProgram, "uRotationVector");

	gl.uniform2fv(uScalingFactor, currentScale);
	gl.uniform2fv(uRotationVector, currentRotation);
	gl.uniform4fv(uGlobalColor, [1, 0.5, 0.5, 1.0]);

	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

	aVertexPosition =
		gl.getAttribLocation(shaderProgram, "aVertexPosition");

	gl.enableVertexAttribArray(aVertexPosition);
	gl.vertexAttribPointer(aVertexPosition, vertexNumComponents,
		  gl.FLOAT, false, 0, 0);

	gl.drawArrays(gl.TRIANGLES, 0, vertexCount);

	window.requestAnimationFrame(function(currentTime) {
	  let deltaAngle = ((currentTime - previousTime) / 1000.0)
			* degreesPerSecond;

	  currentAngle = (currentAngle + deltaAngle) % 360;

	  previousTime = currentTime;
	  animateScene();
	});
}

function initGraphic() {
	shaderProgram = buildShaderProgram(shadersCode);

	aspectRatio = glCanvas.width/glCanvas.height;
	currentRotation = [0, 1];
	currentScale = [1.0, aspectRatio];

	vertexArray = new Float32Array([
		-0.5, 0.5, 0.5, 0.5, 0.5, -0.5,
		-0.5, 0.5, 0.5, -0.5, -0.5, -0.5
	]);

	// Associate the shader programs to buffer objects
	vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, vertexArray, gl.STATIC_DRAW);

	vertexNumComponents = 2;
	vertexCount = vertexArray.length/vertexNumComponents;

	currentAngle = 0.0;
	rotationRate = 6;

	animateScene();
}

/* -------------------------------------------------------------------------- */
/*                               event handlers                               */
/* -------------------------------------------------------------------------- */
window.addEventListener("load", initGraphic, false);

