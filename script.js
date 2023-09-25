// ---------------------1---------------
let btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", () => {
    console.log("Hello World!");
});


// ---------------------2---------------
let btn2 = document.querySelector(".btn2");
let input = document.querySelector(".guess-field");
let result = document.querySelector(".result");

btn2.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);

    if (input.value == randomNumber) {
        result.textContent = "You are correct";
    } else {
        result.textContent = "You are wrong";
    }
})


// ---------------------3---------------
let numberOfClicks = 0;

document.addEventListener("click", () => {
    numberOfClicks += 1;
    console.log(`you clicked the page ${numberOfClicks} times `);
})


// ---------------------4---------------
const applyCallbackToEachElement = (arr, callback) => {
    let result = [];

    for (let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
    }

    return result
}

const arr = [1, 2, 3, 4, 5];

const squareCallback = (num) => {
    return num * num;
};

const result1 = applyCallbackToEachElement(arr, squareCallback);
console.log(result1);


// ---------------------5---------------

const calculateDiscountPrice = (price, discount, callback) => {
    let result = price - ((discount * 100) / price);
    callback(result);
};

const showDiscountPrice = (result) => {
    console.log(`Discounted price is ${result}`);
};

calculateDiscountPrice(100, 10, showDiscountPrice);