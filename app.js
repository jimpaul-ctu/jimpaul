const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalText = modal.querySelector("h2");

// Messages for No clicks
let messages = [
    "Are you sure?",
    "dli pwede😭",
    "Dili lagi pwede gahig ulo",
    "batakon ka ron, gi ignag dli pwede",
    "bahala ka diha",
    "kanang yes nalang gud ohh",
    "hala ngit2?",
    "Yes nalang gud😏"
];

// Shuffle messages
messages = messages.sort(() => Math.random() - 0.5);

let currentIndex = 0;
let noClickCount = 0; // track No button clicks
const maxNoClicks = 7; // disable after 7 clicks

// YES button: show modal then redirect
yesBtn.addEventListener("click", () => {
    modalText.textContent = "Yay!! ❤️ You said YES!";
    modal.style.display = "flex";

    setTimeout(() => {
        modal.style.display = "none";
        window.location.href = "form.html"; // redirect to new page
    }, 3000);
});

// NO button: move and show messages
noBtn.addEventListener("click", () => {
    noClickCount++;
    if (noClickCount <= maxNoClicks) {
        moveButton();
        showNextMessage();
    } else {
        // Disable the button after max attempts
        noBtn.disabled = true;
        noBtn.style.opacity = "0.5"; // visually show it's disabled
        modalText.textContent = "Hahaha 😆 You can't click No anymore!";
        modal.style.display = "flex";
    }
});

// Close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal if clicking outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Move No button inside the card
function moveButton() {
    const container = document.querySelector(".card");
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Show the next No message (one-time each)
function showNextMessage() {
    if (currentIndex < messages.length) {
        modalText.textContent = messages[currentIndex];
        currentIndex++;
    } else {
        modalText.textContent = "Wala na dli na pwede 😆❤️";
    }
    modal.style.display = "flex";
}
