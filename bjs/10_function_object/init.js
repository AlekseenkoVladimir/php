window.onload = newPerson();
document.getElementById('new-person').addEventListener('click', newPerson);
document.getElementById('reset').addEventListener('click', resetPerson);



function newPerson () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.querySelector('#photo>img').setAttribute("src", initPerson.photo);
    
};

function resetPerson () {
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
    document.querySelector('#photo>img').setAttribute("src", 'img/rect.png');
    
};

