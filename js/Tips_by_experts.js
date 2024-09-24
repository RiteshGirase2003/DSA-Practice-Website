const data = {
    "Expert1": {
        "Name": "Ritesh Girase",
        "Designation": "Final Year Student",
        "Article": "Research the company and practice common interview questions to boost your confidence."
    },
    "Expert2": {
        "Name": "Ritesh Girase",
        "Designation": "Final Year Student",
        "Article": "Use the STAR method to structure your responses to behavioral questions effectively."
    },
    "Expert3": {
        "Name": "Ritesh Girase",
        "Designation": "Final Year Student",
        "Article": "Dress appropriately and maintain good body language to convey professionalism."
    },
    "Expert4": {
        "Name": "Ritesh Girase",
        "Designation": "Final Year Student",
        "Article": "Prepare insightful questions to ask the interviewer about the role and company."
    },
    "Expert5": {
        "Name": "Ritesh Girase",
        "Designation": "Final Year Student",
        "Article": "Follow up with a thank-you email after the interview to express gratitude and interest."
    },
    "Expert6": {
        "Name": "Ritesh Girase",
        "Designation": "Final Year Student",
        "Article": "Practice mock interviews to build confidence and receive constructive feedback."
    }
};

function renderExperts() {
    const contentDiv = document.getElementById('content');

    for (const expertKey in data) {
        const expert = data[expertKey];

        // Create a card div
        const card = document.createElement('div');
        card.classList.add('card');

        // Create a header div for name and designation
        const header = document.createElement('div');
        header.classList.add('card-header');

        // Create and append the name
        const name = document.createElement('h3');
        name.textContent = expert.Name;
        header.appendChild(name);

        // Create and append the designation
        const designation = document.createElement('p');
        designation.textContent = expert.Designation;
        header.appendChild(designation);

        // Append the header to the card
        card.appendChild(header);

        // Create and append the article section
        const article = document.createElement('p');
        article.textContent = expert.Article;
        article.classList.add('card-article'); // Add a class for styling
        card.appendChild(article);

        // Append the card to the content div
        contentDiv.appendChild(card);
    }
}

// Call the function to render the experts
renderExperts();
