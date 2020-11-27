document.querySelector(".count-button").addEventListener("click", () => {
  noneDisplay();

  n = document.querySelector(".count-input").value;
  minValue = document.querySelector(".min-value").value;
  maxValue = document.querySelector(".max-value").value;
  document.querySelector(".load-generate").style.display = "block";
  let randomArray = generateArray(n, minValue, maxValue);

  console.log("Сгенерированный массив значений: ", randomArray);
  document.querySelector(".load-generate").style.display = "none";

  document.querySelector(".load-results").style.display = "block";
  startNull = performance.now();
  console.log("Пузырьковая сортировка: ", bubbleSort(randomArray));
  startBubble = performance.now();
  console.log("Сортировка выбором: ", selectionSort(randomArray));
  startSelection = performance.now();
  console.log("Сортировка вставками: ", insertionSort(randomArray));
  startInsertion = performance.now();
  document.querySelector(".load-results").style.display = "none";

  document.querySelector(".bubble-sort").innerText = (
    startBubble - startNull
  ).toFixed(2);
  document.querySelector(".selection-sort").innerText = (
    startSelection - startBubble
  ).toFixed(2);
  document.querySelector(".insertion-sort").innerText = (
    startInsertion - startSelection
  ).toFixed(2);
  document.querySelector(".result-container").style.display = "block";
});

const noneDisplay = () => {
  document.querySelector(".load-generate").style.display = "none";
  document.querySelector(".load-results").style.display = "none";
  document.querySelector(".result-container").style.display = "none";
};

const generateArray = (n, min, max) => {
  let randomArray = [];
  for (let i = 0; i < n; i++)
    randomArray.push(Math.round(Math.random() * (max - min) + min));
  return randomArray;
};

// Пузырьковая сортировка
function bubbleSort(array) {
  // array - массив данных
  let n = array.length; // n - количеслво элементов в массиве
  for (let i = 0; i < n - 1; i++) {
    // Выполняется для каждого элемента массива, кроме последнего.
    for (let j = 0; j < n - 1 - i; j++) {
      // Для всех последующих за текущим элементов
      if (array[j + 1] < array[j]) {
        // Выпоняется проверка, и если следующий элемент меньше текущего,
        let t = array[j + 1];
        array[j + 1] = array[j];
        array[j] = t; // то эти элементы меняются местами.
      }
    }
  }
  return array; // результат - отсортированный массив
}

// Сортировка выбором
function selectionSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    // Выполняется для каждого элемента массива, кроме последнего.
    let min = i; // В качестве текущего минимального устанавливается текущий элемент,
    for (let j = i + 1; j < n; j++) {
      // а для всех последующих элементов
      if (array[j] < array[min]) min = j; // выпоняется проверка: если следующий элемент меньше текущего, он устанавливается в качестве минимального значения.
      let t = array[min];
      array[min] = array[i];
      array[i] = t; // Минимальный и текущий элементы меняются местами (если текущий = минимальный, то ничего страшного не случится).
    }
  }
  return array;
}

// Сортировка вставками
function insertionSort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    // Выполняется для каждого элемента массива.
    let v = array[i];
    let j = i - 1; // Определяется значение текущего элемента, а также индекс предыдущего элемента.
    while (j >= 0 && array[j] > v) {
      // Пока индекс предыдущего элемента >= 0 и его значение больше значения текущего элемента.
      array[j + 1] = array[j]; // Значением следующего за текущим элемента массива становится значение предыдущего элемента.
      j--;
    }
    array[j + 1] = v; // Значением следующего за текущим элемента массива становится значение текущего элемента
  }
  return array;
}
