const arr = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

const result = document.createElement("p");
result.textContent = `The sum of the array elements is ${sum}.`;
document.body.appendChild(result);
