const routes = require('express').Router()

const {
    createReservacion,
    listReservaciones,
    updateReservacion,
    deleteReservacion,
    findById
} = require('./../controller/controll-reservacion')

routes.get('/',listReservaciones)
routes.get('/:id',findById)
routes.post('/',createReservacion)
routes.put('/:id', updateReservacion)
routes.delete('/:id',deleteReservacion)

module.exports = routes