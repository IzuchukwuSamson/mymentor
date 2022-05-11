const User = require('../models/userModel')

exports.getAllUsers = async (req, res) => {
    
    const users = await User.find()
    res.status(200).json({
        status: 'Success',
        data: {
            users
        }
        
    })
} 

exports.getUser = async (req, res) => {
    const user = await User.findById(req.params.id)

    res.status(200).json({
        status: 'Success',
        data: {
            user
        }
    })
}

exports.createUser = async (req, res) => {
    // console.log(req.body)
    
    const user = await User.create(req.body)

    res.status(201).json({
        status: 'Success',
        data: {
            user
        }
    })

}

exports.updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
    

    res.status(200).json({
        status: 'Success',
        data: {
            user
        }
    })

}

exports.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    
    if (!user) {
        return next('No user found with that ID', 404);
      }
    

    res.status(204).json({
        status: 'Success',
        data: user
    })


}

