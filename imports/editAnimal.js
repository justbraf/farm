Template.editAnimal.events({
    'click .js-editAnimal'() {
        let eId = document.querySelector(".editID").value
        let type = document.querySelector('.editAnimalType').value
        let legs = document.querySelector('.editAnimalLegs').value
        console.info("saving edits", eId)
        farmdb.update(
            { _id: eId },
            {
                $set: {
                    'type': type,
                    'numLegs': legs
                }
            }
        )
    }
})