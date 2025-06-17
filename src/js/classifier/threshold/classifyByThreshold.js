// classifyByThreshold.js

// calculates a threshold based on labeled input values
function findThreshold(inputs, labels)
{
    // arrays to hold values labeled as "low" and "high"
    let low = [];
    let high = [];

    // iterate through each input and label pair
    for (let i = 0; i < inputs.length; i++)
    {
        // get the numerical value from the input
        let value = inputs[i][0];

        // get the corresponding label
        let label = labels[i];

        // sort values into low or high arrays based on label
        if (label === 'low')
        {
            // add to low values
            low.push(value);
        }
        else if (label === 'high')
        {
            // add to high values
            high.push(value);
        }
    }

    // find the maximum value in the "low" group
    let maxSmall = Math.max.apply(null, low);

    // find the minimum value in the "high" group
    let minLarge = Math.min.apply(null, high);

    // calculate the threshold halfway between the two
    let threshold = (maxSmall + minLarge) / 2;

    // return the calculated threshold
    return threshold;
}

//----//

// classifys a new input based on the threshold
function classifyByThreshold(threshold, input)
{
    // get the numeric value from the input array
    let value = input[0];

    // classify as "low" if below threshold, otherwise "high"
    if (value < threshold)
    {
        return 'low';
    }
    else
    {
        return 'high';
    }
}

//----//

// define training input data: each item is an array containing one number
let inputs = [[1], [2], [3], [10], [20], [30]];

// define labels for the training data to indicate "low" or "high"
let labels = ['low', 'low', 'low', 'high', 'high', 'high'];

// train the model by calculating the threshold from the training data
let threshold = findThreshold(inputs, labels);

//----//

// define a test input value to classify
let testValue = [5];

// use the threshold to classify the test input
let prediction = classifyByThreshold(threshold, testValue);

// output the result to the console
console.log("The AI thinks " + testValue + " is: " + prediction);

//----//

/*
The AI thinks 5 is: low
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

