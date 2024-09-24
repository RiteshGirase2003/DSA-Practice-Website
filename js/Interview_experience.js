const experienceData = {
    "Experience": {
        "Name": "RSquareSoft",
        "Package": "3 LPA",
        "Article": "I recently went through the interview process at RSquareSoft, which consisted of three rounds. The first round focused on general aptitude, where I encountered questions related to Java, DSA, OOP, SQL multiple-choice questions, as well as quant, logical reasoning, puzzles, and simple algebra questions. In the second round, which was technical, I was asked to write code in any programming language to manipulate strings. One question required changing the sequence of words in a string; for example, given the input 'javascript is best', the output should be 'best is javascript'. Another question involved writing a function to return unique characters from two given strings, where s1 = 'abcdde' and s2 = 'achj', resulting in the output 'bdehj'. Additionally, I was tasked with finding the sub-matrix with the highest number of 1s in a given matrix. Other questions included finding the first repeating character in a string and the first non-repeating character. The interview experience was rigorous but rewarding, challenging my coding skills and requiring a solid understanding of algorithms and data structures. The interviewers were supportive, emphasizing the importance of continuous learning and adaptation in the tech industry. I was excited about the opportunity to work with RSquareSoft and contribute to their projects, as the process not only assessed my technical abilities but also gave me a glimpse of the collaborative environment I could be part of."
    }
};

function renderExperience() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content if any

    const experience = experienceData.Experience;

    // Create a card div
    const card = document.createElement('div');
    card.classList.add('card');

    // Create and append the header
    const header = document.createElement('div');
    header.classList.add('card-header');
    header.innerHTML = `<h3>${experience.Name}</h3><p>${experience.Package}</p>`;
    card.appendChild(header);

    // Create and append the article section
    const article = document.createElement('div');
    article.classList.add('card-article');
    article.textContent = experience.Article;
    card.appendChild(article);

    // Append the card to the content div
    contentDiv.appendChild(card);
}

// Call the function to render the experience
renderExperience();
