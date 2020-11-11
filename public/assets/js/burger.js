
const cook = (event) => {
    fetch(`/api/burger/${ event.target.getAttribute("data-id") }`,
    );
}

const menuButtons = document.querySelectorAll(".menu-button");
menuButtons.forEach(button => button.addEventListener("click", cook));
