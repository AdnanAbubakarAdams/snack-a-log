// VALIDATIONS 

const checkName = (req, res, next) => {
    // console.log("name is checked")
    if (req.body.name) {
        console.log("name confirmed!")
        next()
    } else {
        res.status(404).json({ error: "Name needed please!!"})
    }
}

// const confirmHealth = (req, res, next) => {
//     if (req.body.added_sugar < 5) {
//         if(req.body.protein >= 5 || req.body.fiber >= 5) {
//             req.body.is_healthy = true
//         } else { 
//             req.body.is_healthy = false
//         }
//     } else {
//         req.body.is_healthy = false
//     }
//     next()
// }
module.exports = { checkName }