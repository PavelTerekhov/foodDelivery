const renderItems = (data) => {
    console.log(data);
}


fetch('https://food-delivery-caf3b-default-rtdb.firebaseio.com/db/partners.json')
.then((response) => response.json())
.then((data) => {
    renderItems(data)
})
.catch((error) => {
    console.log(error);
})
// .finaly(console.log('finally'))