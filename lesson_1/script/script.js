const user_add_form_elem = document.querySelector('#user_add_form');
const search_form = document.querySelector('#search_form');
const clearBtn = user_add_form_elem.querySelector('.clear');
const user_container = document.querySelector('.user-container');
const sortContainer = document.querySelector('.sort');
let users = [
    {
        name: "Гайк",
        lastname: "Инанц"
    },
    {
        name: "Максим",
        lastname: "Грибов"
    },
    {
        name: "Антон",
        lastname: "Куликов"
    },
    {
        name: "Роман",
        lastname: "Иванов"
    }
];

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





function render(users_list = users){
    user_container.innerText = '';
    if (users_list.length === 0){
        const info = document.createElement('p');
        info.classList.add('info');
        info.innerText = 'Карточки пользователей отсутствуют 🥲';
        user_container.append(info);
    }else{
        user_container.append(...users_list.map(({name, lastname, avatar}) => get_card(name, lastname, avatar)))
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

search_form.query.addEventListener('input', event=>{
    // поиск юзеров, которые подходят по условию
    const result = users.filter(({name, lastname}) =>  
        `${name} ${lastname}`.toLocaleLowerCase().includes(event.target.value)
    );
    render(result);
})

sortContainer.querySelector('.descr').addEventListener('click', ()=>{
    users.sort((user_1, user_2) => {
        const compare_string_1 = `${user_1.name} ${user_1.lastname}`;
        const compare_string_2 = `${user_2.name} ${user_2.lastname}`;
        return compare_string_1.localeCompare(compare_string_2);
    })
    render();
});


sortContainer.querySelector('.incr').addEventListener('click', ()=>{
    users.sort((user_1, user_2) => {
        const compare_string_1 = `${user_1.name} ${user_1.lastname}`;
        const compare_string_2 = `${user_2.name} ${user_2.lastname}`;
        return -1 * compare_string_1.localeCompare(compare_string_2);
    })
    render();
});


render();