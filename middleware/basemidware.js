module.exports = (req,res,next) =>{

    console.log("Im a middle ware running between the request and response")

    next()
}