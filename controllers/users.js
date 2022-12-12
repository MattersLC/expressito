const {httpError} = require('../helpers/handleError')
const userModel = require('../model/users')

const getItems = (req,res) => {
    res.send({ list: [1,2,3]});
}

const getItem = (req,res) => {

}

const createItem = async (req,res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name, age, email
        })
        res.send({ data: resDetail })
    } catch(e) {
        httpError(res,e)
    }
}

const updateItem = (req,res) => {

}

const deleteItem = (req,res) => {
    
}