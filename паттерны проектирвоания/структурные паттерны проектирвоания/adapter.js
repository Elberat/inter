// Когда мы пишем фронтенд-приложения, нам часто нужно получить данные от сервера или отправить данные на сервер.

// Иногда формат данных на сервере и клиенте не совпадает. В таких случаях мы будем использовать адаптер, чтобы сделать несовместимые форматы данных совместимыми.

// Допустим, мы получаем от сервера данные в виде объекта:

function fakeAPI() {
    return {
        entries: [
            {
                user_name: 'Alex',
                email_address: 'some@site.com',
                ID: 'some-unique-id',
            },
            {
                user_name: 'Alice',
                email_address: 'some@other-site.com',
                ID: 'another-unique-id',
            },
        ],
    };
}

// А хотим — преобразовать их в массив и чтобы поля всегда были набраны в camelCase:

const wantedResponse = [
    {
        userName: 'Alex',
        email: 'some@site.com',
        id: 'some-unique-id',
    },
    {
        userName: 'Alice',
        email: 'some@other-site.com',
        id: 'another-unique-id',
    },
];

// Тогда мы напишем адаптер, который будет заниматься преобразованиями данных после получения ответа от API:

function responseToWantedAdapter(response) {
    return response.entries.map(entry => ({
        userName: entry.user_name,
        email: entry.email_address,
        id: entry.ID,
    }));
}

const response = fakeAPI();
const compatibleResponse = responseToWantedAdapter(response);
// ...
