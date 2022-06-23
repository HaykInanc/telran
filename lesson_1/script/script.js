const user_add_form_elem = document.querySelector('#user_add_form');
const clearBtn = user_add_form_elem.querySelector('.clear');
const users = [];


user_add_form_elem.addEventListener('submit', event =>{
    event.preventDefault();
    const {name, lastname, avatar} = event.target;
    const user = {
        name: name.value,
        lastname: lastname.value,
        avatar: avatar.value
    };
    users.push(user);
})

clearBtn.addEventListener('click', event =>{
    event.preventDefault();
    const {name, lastname, avatar} = user_add_form_elem;
    name.value = '';
    lastname.value = '';
    avatar.value = '';
})

// при отправке формы в массив должен добавляться
// объект с описанием пользователя
