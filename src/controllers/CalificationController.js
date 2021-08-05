import Calification from "../models/Calification";

export default class CalificationController {
  async getCalificationByIdStudent(req, res) {
    const idStudent = req.params.idStudent;
    const calification = await Calification.findOne({
      idStudent: idStudent,
    });
    res.json(calification);
  }

  async getCalificationByStudentAndCourse(req, res) {
    const idStudent = req.params.idStudent;
    const idCourse = req.params.idCourse;
    const calification = await Calification.findOne({
      idStudent: idStudent,
      idCourse: idCourse,
    });
    res.json(calification);
  }

  async createCalification(req, res) {
    const calification = new Calification(req.body);
    calification.save();
    res.json(calification);
  }

  async updateCalification(req, res) {
    const idStudent = req.params.idStudent;
    const idCourse = req.params.idCourse;
    const calification = await Calification.findOne({
      idStudent: idStudent,
      idCourse: idCourse,
    });
    if (!calification) {
      throw new Error("Calification does not exist");
    }
    calification.update(req.body);
    calification.save();
    res.json(calification);
  }

  async deleteCalification(req, res) {
    const idStudent = req.params.idStudent;
    const idCourse = req.params.idCourse;
    const calification = await Calification.findOne({
      idStudent: idStudent,
      idCourse: idCourse,
    });
    if (!calification) {
      throw new Error("Calification does not exist");
    }
    calification.remove();
    res.json(calification);
  }
}
