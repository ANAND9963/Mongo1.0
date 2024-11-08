
const Bear = require("./BearModel");

const helloBear = (req , res ) => {
    res.send("Hello Bears");
}

const createBear = async(req, res) =>{
    const data = req.body;

    try{
        const createdBear = await Bear.create(data);
        console.log(createdBear);
        res.status(201).json(createdBear); 
    }catch(error){
        console.log(error);
        
    }
    
}

const getAllBears = async(req, res) =>{
   
    try{
        const allBears = await Bear.find({})
        
        res.status(200).json(allBears); 
    }catch(error){
        console.log(error);
        
    }
    
}

const getBearById = async(req, res) =>{

    const {id} = req.params;
   
    try{
        const bearbyId = await Bear.findById(id);
        
        res.status(200).json(bearbyId); 
    }catch(error){
        console.log(error);
        
    }
    
}

const deleteById = async(req, res) =>{

    const {id} = req.params;
   
    try{
        const bearbyId = await Bear.findByIdAndDelete(id);
        res.status(200).json(bearbyId); 
    }catch(error){
        console.log(error); 
    }
    
}

const updateById = async(req, res) =>{

    const {id} = req.params;
    const data = req.body;
   
    try{
        const bearbyId = await Bear.findByIdAndUpdate(id , data , {new:true});
        res.status(202).json(bearbyId); 
    }catch(error){
        console.log(error); 
    }
    
}



module.exports = {helloBear, createBear , getAllBears , getBearById , deleteById , updateById};