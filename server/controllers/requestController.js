const Request = require('../models/requestModel')

exports.getAllRequests = async (req, res) => {
    
    const requests = await Request.find()
    res.status(200).json({
        status: 'Success',
        data: {
            requests
        }
        
    })
} 

exports.getRequest = async (req, res) => {
    const request = await Request.findById(req.params.id)

    res.status(200).json({
        status: 'Success',
        data: {
            request
        }
    })
}

exports.createRequest = async (req, res) => {
    // console.log(req.body)
    
    const request = await Request.create(req.body)

    res.status(201).json({
        status: 'Success',
        data: {
            request
        }
    })

}

exports.updateRequest = async (req, res) => {
    const request = await Request.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
    

    res.status(200).json({
        status: 'Success',
        data: {
            request
        }
    })

}

exports.deleteRequest = async (req, res) => {
    const request = await Request.findByIdAndDelete(req.params.id);
    
    if (!request) {
        return next('No request found with that ID', 404);
      }
    

    res.status(204).json({
        status: 'Success',
        data: request
    })


}

