class Container {
    pets = []
    owners = []
    pickAPet = {}
    baseURL = "http://localhost:3000"
    // Remember to uncomment / add gem "cors"
    bindEventListener() {
       const btn = document.addEventListener('click', 'createPet');
    }

    getPets() {
        
        fetch(this.baseURL + '/pets')
        // .then(res => console.log(res))
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => alert("Something went wrong. Please try again"))
        
    }

    renderPets() {
        // render /pets
    }
}