
const cook = (event) => {
    fetch(`/api/burger/${ event.target.getAttribute("data-id") }`,
        {
            method:'POST',
            headers: {'Content-type': 'Application /json'}
        }
    );
}

const menuButtons = document.querySelectorAll(".menu-button");
menuButtons.forEach(button => button.addEventListener("click", cook));
