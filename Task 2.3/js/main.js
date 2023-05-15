//сортування Bubble Sort
const bubble = Array(20)
  .fill(null)
  .map(() => Math.floor(Math.random() * 200) - 100);

bubbleSort(bubble);

function bubbleSort(bubble) {
  for (let n = 0; n < bubble.length; n++) {
    for (let i = 0; i < bubble.length - 1 - n; i++) {
      if (bubble[i] > bubble[i + 1]) {
        const buff = bubble[i];
        bubble[i] = bubble[i + 1];
        bubble[i + 1] = buff;
      }
    }
  }
  console.log(bubble);
}

//сортування Sort by choice
const choice = Array(20)
  .fill(null)
  .map(() => Math.floor(Math.random() * 200) - 100);

sortByChoice(choice);

function sortByChoice(choice) {
  for (let j = 0; j < choice.length; j++) {
    let max = -Infinity;
    let index = null;

    for (let i = 0; i < choice.length - j; i++) {
      if (choice[i] > max) {
        max = choice[i];
        index = i;
      }
    }
    let buff = choice[choice.length - 1 - j];
    choice[choice.length - 1 - j] = max;
    choice[index] = buff;
  }
  console.log(choice);
}
//сортування Insertion Sort
const insertion = Array(20)
  .fill(null)
  .map(() => Math.floor(Math.random() * 200) - 100);

insertionSort(insertion);

function insertionSort(insertion) {
  for (let i = 0; i < insertion.length - 1; i++) {
    let j = i + 1;
    while (j !== 0 && insertion[j] < insertion[j - 1]) {
      let buffer = insertion[j];
      insertion[j] = insertion[j - 1];
      insertion[j - 1] = buffer;
      j--;
    }
  }
  console.log(insertion);
}

//сортування Quicksort
const quick = Array(20)
  .fill(null)
  .map(() => Math.floor(Math.random() * 200) - 100);

const quickSort = (quick) => {
  if (quick.length < 2) {
    return quick;
  } else {
    const pivot = quick[Math.floor(Math.random() * quick.length)];
    const less = quick.filter((value) => value < pivot);
    const greater = quick.filter((value) => value > pivot);
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
};

console.log(quickSort(quick));

//сортування Merge Sort
const mergeMas = Array(20)
  .fill(null)
  .map(() => Math.floor(Math.random() * 200) - 100);

function margeSort(mergeMas) {
  if (mergeMas.length < 2) {
    return mergeMas;
  }
  const mid = Math.floor(mergeMas.length / 2);
  const left = mergeMas.slice(0, mid);
  const right = mergeMas.slice(mid);
  return merge(margeSort(left), margeSort(right));
}

function merge(left, right) {
  const sortedMas = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedMas.push(left.shift());
    } else {
      sortedMas.push(right.shift());
    }
  }
  return [...sortedMas, ...left, ...right];
}

console.log(margeSort(mergeMas));
