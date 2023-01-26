Template.addAnimal.events({
    'click .js-saveAnimal'() {
        console.debug("save button clicked")
        let type = document.querySelector('.addAnimalType').value
        let legs = document.querySelector('.addAnimalLegs').value
        // console.debug(`The ${type} has ${legs} legs`)
        farmdb.insert({
            'type': type,
            'numLegs': legs
        })
    },
    'click .js-showAdd'() {
        // let addModal = document.querySelector("#addModal")
        $('#addModal').modal('show')
    }
})