class Container {
    pets = []
    owners = []
    pickAPet = {}
    baseURL = "http://localhost:3000"
    

    getPets() {
        // Remember to uncomment / add gem "cors"
        fetch(this.baseURL + '/pets')
        .then(res => console.log(res))
        .catch(err => alert("Something went wrong. Please try again"))
        
    }

    renderPets() {
        // render /pets
    }
}