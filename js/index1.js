// JSON data
const data = {
    "content": [
        {
            "title": "200 DSA Questions",
            "description": "Easy to medium DSA questions for practice.",
            "jsonfile": "200_dsa.json",
            "htmlfile": "200_dsa.html",
            "img": "./Assets/images/200_dsa.jpeg"
        },
        {
            "title": "DSA Practice Questions",
            "description": "Topic-wise questions to sharpen your skills.",
            "jsonfile": "DSA.json",
            "htmlfile": "DSA.html",
            "img": "./Assets/images/dsa.jpeg"
        },
        {
            "title": "10 Days DSA Plan",
            "description": "Master 10 DSA topics in just 10 days.",
            "jsonfile": "Daily.json",
            "htmlfile": "10_days.html",
            "img": "./Assets/images/10_days.jpeg"
        },
        {
            "title": "Experience",
            "description": "Real interview experiences shared by candidates.",
            "jsonfile": "Interview_experience.json",
            "htmlfile": "Interview_experience.html",
            "img": "./Assets/images/experience.jpeg"
        },
        {
            "title": "Tips",
            "description": "Expert tips to enhance your DSA preparation.",
            "jsonfile": "Tips_by_experts.json",
            "htmlfile": "Tips_by_experts.html",
            "img": "./Assets/images/tips.jpeg"
        }
    ]
};

// Get the card container
const cardContainer = document.getElementById('cardContainer');

// Render cards
data.content.forEach(item => {
    const card = `
        <a href="${item.htmlfile}" class="card"> <!-- Link to the respective HTML page -->
            <img src="${item.img}" alt="${item.title}" class="card-image">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-description">${item.description}</p>
        </a>
    `;
    cardContainer.innerHTML += card;
});
