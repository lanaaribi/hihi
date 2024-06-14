document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');  // This will print when the form is submitted

    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();
    console.log(`Names entered: ${name1}, ${name2}`);  // This will print the entered names

    const resultDiv = document.getElementById('result');
    const feedbackDiv = document.getElementById('feedback');
    const roundsDiv = document.getElementById('rounds');
    const perfectMatchesDiv = document.getElementById('perfectMatches');

    const specialName1 = "lana"; // First special name
    const specialName2 = "adrien"; // Second special name

    let rounds = parseInt(roundsDiv.textContent);
    let perfectMatches = parseInt(perfectMatchesDiv.textContent);

    rounds++;
    console.log(`Rounds: ${rounds}`);  // This will print the number of rounds

    // Debugging to check name comparison
    console.log(`Comparing: ${name1} === ${specialName1} && ${name2} === ${specialName2}`);
    console.log(`Comparing: ${name1} === ${specialName2} && ${name2} === ${specialName1}`);

    if ((name1 === specialName1 && name2 === specialName2) || (name1 === specialName2 && name2 === specialName1)) {
        resultDiv.innerHTML = "100% Compatible!";
        perfectMatches++;
        console.log('Perfect match found!');  // This will print if a perfect match is found
        feedbackDiv.innerHTML = "L'amour parfait même si Lana est un peu chiante parfois";
    } else {
        const randomCompatibility = Math.floor(Math.random() * 100) + 1;
        resultDiv.innerHTML = `${randomCompatibility}% Compatible`;
        console.log(`Compatibility: ${randomCompatibility}%`);  // This will print the random compatibility percentage

        if (randomCompatibility > 80) {
            feedbackDiv.innerHTML = "Mais qu'est-ce que c'est que ce chantier ?!"";
        } else if (randomCompatibility > 50) {
            feedbackDiv.innerHTML = "Ça ne casse pas trois pattes à un canard !";
        } else {
            feedbackDiv.innerHTML = "C'est de la merde, Astérix !";
        }
    }

    roundsDiv.textContent = rounds;
    perfectMatchesDiv.textContent = perfectMatches;
    console.log(`Perfect Matches: ${perfectMatches}`);  // This will print the number of perfect matches
});

// Adding a reset functionality
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('feedback').innerHTML = '';
    console.log('Game reset');  // This will print when the game is reset
});
