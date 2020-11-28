const cook = (event) => {
    fetch(`/api/burger/${ event.target.getAttribute("data-id") }`,
        {
            method:'POST',
            headers: {'Content-type': 'Application /json'}
        }
    ).then(() => window.location.reload());
};

const eat = (event) => {
    fetch(`/api/burger/${ event.target.getAttribute("data-id") }`,
    {
        method: 'PUT',
        headers: { 'Content-type': 'Application/json'}
    }
    ).then(() => window.location.reload());
};

const custom = (event) => {
    event.preventDefault();
    const customBurger = document.querySelector(".custom-input").value;
    if (customBurger != "") {
        fetch(`/api/burger`,
            {
                body: JSON.stringify({ burger_name: customBurger }),
                method:'POST',
                headers: {'Content-type': 'Application/json'}
            }
        ).then(() => window.location.reload());
    }
};

const menuButtons = document.querySelectorAll(".menu-button");
menuButtons.forEach(button => button.addEventListener("click", cook));

const cookingButtons = document.querySelectorAll(".cooking-button");
cookingButtons.forEach(button => button.addEventListener("click", eat));

const customForm = document.querySelector(".customForm");
customForm.addEventListener("onsubmit", custom);

const customButton = document.querySelector(".custom-button");
customButton.addEventListener("click", custom);
