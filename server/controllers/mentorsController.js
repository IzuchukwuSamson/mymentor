const Mentor = require('../models/mentorsModel')

exports.getAllMentors = async (req, res) => {
    const mentors = await Mentor.find()
    res.status(200).json({
        status: 'Success',
        data: {
            mentors
        }
        
    })
} 

exports.getMentor = async (req, res) => {
    const mentor = await Mentor.findById(req.params.id)

    res.status(200).json({
        status: 'Success',
        data: {
            mentor
        }
    })
}

exports.createMentor = async (req, res) => {
    console.log(req.body)
    
    const mentor = await Mentor.create(req.body)

    res.status(201).json({
        status: 'Success',
        data: {
            mentor
        }
    })

}

exports.updateMentor = async (req, res) => {
    const mentor = await Mentor.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
    

    res.status(200).json({
        status: 'Success',
        data: {
            mentor
        }
    })

}