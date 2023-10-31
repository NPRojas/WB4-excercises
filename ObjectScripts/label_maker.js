let info = {
    name: 'Lola Bunny',
    address: '321 Carrot Ave',
    city: 'Loony',
    state: 'Florida',
    zip: 30021,
};

function printContact(info) {
    console.log(
        `${info.name}\n${info.address}\n${info.city}, ${info.state} ${info.zip}`);
}

printContact(info);