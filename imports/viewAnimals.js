Template.viewAnimals.helpers({
    animals() {
        return farmdb.find()
    }
})

Template.viewAnimals.events({
    'click .js-edit'() {
        document.querySelector(".editID").value = this._id
        document.querySelector(".editAnimalType").value = this.type
        document.querySelector(".editAnimalLegs").value = this.numLegs
        $('#editModal').modal('show')
    },
    'click .js-delete'(){
        console.warn("deleting", this._id)
        farmdb.remove({"_id": this._id})
    }
})