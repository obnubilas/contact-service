const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        unique : true
    },
    telephone : {
        type : Number,
        required : true,
        unique : true
    }
});

contactSchema.methods.cleanup = function (){
    return {
        name : this.contactname,
        telephone : this.telephone
    }
}

const contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;