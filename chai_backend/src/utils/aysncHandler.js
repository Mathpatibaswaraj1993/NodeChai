// const asyncHandler = () => {}




    export {asyncHandler}


//   const asyncHandler = () =>{}  
//   const asyncHandler = (func)=> ()=>{}
//   const asyncHandler = (func)=> async()={}

const { asyncHandler } = (fn) => async (req, res, next) => {
    try {
            await fn
    } catch (error) {
        
        }
    }