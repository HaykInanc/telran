const user_add_form_elem = document.querySelector('#user_add_form');
const clearBtn = user_add_form_elem.querySelector('.clear');
const user_container = document.querySelector('.user-container');
let users = [];

function get_card(name, lastname, avatar){
    const user_element = document.createElement('div');
    user_element.classList.add('card');
    const user_avatar = document.createElement('img');
    const user_name = document.createElement('p');
    const user_lastname = document.createElement('p');
    user_name.innerText = name;
    user_lastname.innerText = lastname;
    user_avatar.setAttribute('src', avatar);
    user_element.append(user_avatar, user_name, user_lastname);

    user_element.addEventListener('dblclick', event =>{
        users = users.filter(user => !(user.name === name && user.lastname === lastname));
        render();
    })
    return user_element
}


function render(){
    user_container.innerText = '';
    if (users.length === 0){
        const info = document.createElement('p');
        info.classList.add('info');
        info.innerText = 'Карточки пользователей отсутствуют 🥲';
        user_container.append(info);
    }else{
        user_container.append(...users.map(({name, lastname, avatar}) => get_card(name, lastname, avatar)))
    }
}


user_add_form_elem.addEventListener('submit', event =>{
    event.preventDefault();
    const {name, lastname, avatar} = event.target;
    const user = {
        name: name.value,
        lastname: lastname.value,
        avatar: avatar.value
    };
    users.push(user);
    render()
})

clearBtn.addEventListener('click', event =>{
    event.preventDefault();
    const {name, lastname, avatar} = user_add_form_elem;
    name.value = '';
    lastname.value = '';
    avatar.value = '';
})

render();