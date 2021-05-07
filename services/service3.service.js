const express = require('express')

module.exports = {
    getItem: (req, res) => {
        const item = {
        	'Item1': 100,
        	'Item2': 'Desc item2'
        }

        return res.status(200).json('prova+richiesta')
    }
}
