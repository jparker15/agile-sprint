const router = require("express").Router();

router.get("/",(req,res)=>{
    const path = process.cwd() + "\\html\\home.html"; 
    console.log()
    res.sendFile(path, (err) =>{
        if(err){
            res.status(500).json({
                error:err.message || err
            });
        }
        
    });
})
// router.get("/home",(req,res)=>{
//     const path = process.cwd() + "\\html\\home.html"; 
//     console.log()
//     res.sendFile(path, (err) =>{
//         if(err){
//             res.status(500).json({
//                 error:err.message || err
//             });
//         }
        
//     });
// })

module.exports = router;
