import express from 'express'
const router = express.Router();

// se llama al modelo
import stockLibreria from '../models/StockModel';

// agregamos un nuevo item a la DB  --POST
router.post('/new-item', async(req,res)=>{
    const body = req.body;

    try {
        const itemDB = await stockLibreria.create(body);
        res.status(200).json(itemDB)
    } catch (error) {
        return res.status(400).json({
            mensaje:'ocurrio un error -post',
            error
        })
    }
})

// llamamos a la base de datos --GET
router.get('/items/:id', async(req,res)=>{
    const _id = req.params.id;

    try {
        const itemDB = await stockLibreria.findOne({_id})
        res.json(itemDB)
    } catch (error) {
        return res.status(400).json({
            mensaje:'ocurrio un error -get',
            error
        })
    }
})
// get sin parametros
router.get('/items',async(req,res)=>{
    try {
        const itemDB = await stockLibreria.find()
        res.json(itemDB)

    } catch (error) {
        return res.status(400).json({
            mensaje:'ocurrio un error -get sin parametros',
            error
        })
    }
})

// ruta para eliminar items --DELETE
 router.delete('/items/:id',async(req,res)=>{
    const _id =req.params.id
    try {
        const itemDB = await stockLibreria.findByIdAndDelete(_id)
        if(!itemDB){
            return res.status(400).json({
                mensaje:'no se encontro el id',
                error
            })
        }
        res.json(itemDB)
    } catch (error) {
        return res.status(400).json({
            mensaje:'ocurrio un error en el delete',
            error
        })
    }
})

// ruta para editar items  -PUT
router.put('/items/:id',async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;

    try {
        const itemDB = await stockLibreria.findByIdAndUpdate(_id,body,{new: true})
        if(!itemDB){
            return res.status(400).json({
                mensaje:'no se encontro el id',
                error
            })
        }
        res.json(itemDB)
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'ocurrio un error en el delete',
            error
        })
    }

}) 



module.exports= router


