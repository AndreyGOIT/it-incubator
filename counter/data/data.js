export const data = {
    clientsCount: 0
};

let calback = function() {};

setInterval(() => {
    data.clientsCount++;
    calback();
}, 1000);

export function setCalback(newCalback) { 
    calback = newCalback
}

export function increaseClientsCount() {
    data.clientsCount++;
    calback();
}

export function decreaseClientsCount() {
    data.clientsCount--;
    calback();
}