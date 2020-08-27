
//main
loadItems()
    .then(itmes => {
        displayItems(itmes);
        setEventListeners(items);
    })
    .catch(err => {
        console.error(err);
    });