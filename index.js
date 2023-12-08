function analyzeSentence(sentence) {
    // Initialize counters
    let characterCount = 0;
    let wordCount = 0;
    let vowelCount = 0;
  
    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      let currentChar = sentence[i];
  
      // Increment character count
      characterCount++;
  
      // Check if the current character is a space to count words
      if (currentChar === ' ') {
        wordCount++;
      }
  
      // Check if the current character is a vowel
      if (isVowel(currentChar)) {
        vowelCount++;
      }
    }
  
    // Output the results
    console.log('Length of the sentence:', characterCount);
    console.log('Number of words in the sentence:', wordCount + 1);
    console.log('Number of vowels in the sentence:', vowelCount);
  }
  
  // Helper function to check if a character is a vowel
  function isVowel(char) {
    return 'aeiouAEIOU'.includes(char);
  }
  
  // Example usage
  const inputSentence = 'This is an example sentence.';
  analyzeSentence(inputSentence);
  