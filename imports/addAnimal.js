Template.addAnimal.events({
    'click .js-saveAnimal'() {
        console.debug("save button clicked")
        let type = document.querySelector('.animalType').value
        let legs = document.querySelector('.animalLegs').value
        console.debug(`The ${type} has ${legs} legs`)
        farmdb.insert({
            'type': type,
            'numLegs': legs
        })
    }
})