import Student from "../models/Student.js";

export default class StudentController {
  async getAll(req, res) {
    const students = await Student.findAll();
    res.send(students);
  }

  async getAll(req, res) {
    const students = await Student.findAll();
    res.send(students);
  }

  async create(req, res) {
    const students = await Student.create({
      nombre: req.body.nombre,
      email: req.body.email,
      grado: req.body.grado,
    });
    res.send(students);
  }
}
