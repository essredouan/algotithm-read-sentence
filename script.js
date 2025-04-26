function analyzeSentence() {
    let sentence = document.getElementById("sentenceInput").value.trim();

    // Ensure the sentence ends with a period
    if (!sentence.endsWith(".")) {
        alert("The sentence must end with a period.");
        return;
    }

    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let vowels = "aeiouAEIOU";

    // Process each character separately
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (char === ".") { // Stop at the period
            break;
        }
        
        length++; // Count every character except the period

        if (vowels.includes(char)) {
            vowelCount++; // Count vowels
        }

        if (char === " " && i > 0 && sentence[i - 1] !== " ") {
            wordCount++; // Count words based on spaces
        }
    }

    // Account for the last word before the period
    if (length > 0) {
        wordCount++;
    }

    // Display results
    document.getElementById("results").innerHTML = 
        `<p><strong>Length:</strong> ${length} characters</p>
         <p><strong>Words:</strong> ${wordCount}</p>
         <p><strong>Vowels:</strong> ${vowelCount}</p>`;
}
