const express = require('express')

module.exports = {
    getList: (req, res) => {
        const list = {
        	'Item 1': "Desc lalal prova     lala",
        	'Item 2': 89234
        }

        return res.status(200).json({ list: list })
    }
}
