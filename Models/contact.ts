import mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    FirstName: String,
    EmailAddress: String,
    ContactNumber: String
},
{
    collection: "contacts"
}
);

let model = mongoose.model('Contact',ContactSchema);

module.exports.Model = model;