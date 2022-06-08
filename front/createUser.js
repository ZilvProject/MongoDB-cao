
const addUser = async (user) => {
    await fetch(`http://localhost:8099/users`, {
    method: `POST`,
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(user)
    })
}
document.querySelector("form").addEventListener(`submit`,event => {
    event.preventDefault();      
    const elements = event.target.elements
    const user = {
        name: elements.name.value,
        surname: elements.surname.value,
        age: elements.age.value,
        }
    addUser(user);
    elements.name.value = ``;
    elements.surname.value = ``;
    elements.age.value = ``;
})