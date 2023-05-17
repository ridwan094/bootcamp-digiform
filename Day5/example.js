// const regex = /apple/;
// const str = 'I love apples';

// console.log(regex.test(str)); // Output: true

async function processData(data) {
    const regex = /\d+/g;
    const matches = data.match(regex);

    for (let i = 0; i < matches.length; i++) {
        console.log(`Processing match ${i + 1}: ${matches[i]}`);
    }

    console.log('Processing completed.');
}

const input = 'Lorem 123 ipsum 456 dolor 789 sit 0 amet';
processData(input);
