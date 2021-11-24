export const register = async (req, res) => {
    try {
        //validation
       const { name, password}  = req.body;
    if (!name) {
        return res.json({
            error: "Name is required",
        });
    }

    if (!password || password.length < 6) {
        return res.json({
            error: "Password is required and at least with 6 characters!",
        });
    }
res.json({
    data: "thIS IS /REGISTER ENDPOINT"
})
        
    } catch (err) {
        console.log(err)
    }
};

