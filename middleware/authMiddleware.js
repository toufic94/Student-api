import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async (req,res,next) => {
    let auth

    
    if(req.headers.authorization && req.headers.authorization.startsWith("Basic")){
        try {
            auth = new Buffer.from(req.headers.authorization.split(" ")[1], 'base64').toString()

            if(auth !== process.env.BASIC_AUTH){
                res.status(403)
                throw new Error('Not authorized - Authentication failed')
            }
            next()
            

        } catch (error) {
            res.status(403)
            console.error(error)
            throw new Error('Not authorized - Authentication failed')

        }
    }
    if(!auth){
        res.status(403)
        throw new Error('Not authorized - No Credentials')
    }
})

export {protect}