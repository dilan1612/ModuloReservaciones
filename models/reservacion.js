const mongoose = require('mongoose');


const { Schema } = mongoose;

const schemaReservacion= new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    nameCliente: {
        type: String,
        required: true
    },
    idCliente: {
        type: String,
        required: true
    },
    mesa: {
        type: String,
        required: true
    },
    fechaReservacion: {
        type: Date,
        required: true
    },numeroPersonas: {
        type: Number,
        required: true,
        min: 1
    }
})

module.exports = mongoose.model('reservacion', schemaReservacion);
