// TODO: put some comments and upload Slides
const matrix = [
	[1,2,3],
	[4,5,6]
]

function transpose(matrix) {
	const rows = matrix.length, cols = matrix[0].length;
	const grid = [];

	for (let j = 0; j < cols; j++) {
	  grid[j] = Array(rows);
	}

	for (let i = 0; i < rows; i++) {
	  for (let j = 0; j < cols; j++) {
		grid[j][i] = matrix[i][j];
	  }
	}
	return grid;
}


let t = transpose(matrix);
console.dir(t);
