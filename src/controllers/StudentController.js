import Student from "../models/Student.js";

export default class StudentController {
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

  async get(req, res) {
    const student = await Student.findById(req.params.id);
    res.send(student);
  }

  async update(req, res) {
    const student = await Student.findById(req.params.id);
    student.nombre = req.body.nombre;
    student.email = req.body.email;
    student.grado = req.body.grado;
    await student.save();
    res.send(student);
  }

  async delete(req, res) {    
    const student = await Student.findById(req.params.id);
    await student.remove();
    res.send(student);
  }

  async getByEmail(req, res) {
    const student = await Student.findOne({ email: req.params.email });
    res.send(student);
  }

  async getByNombre(req, res) { 
    const student = await Student.findOne({ nombre: req.params.nombre });
    res.send(student);
  }

  async getByGrado(req, res) {
    const student = await Student.findOne({ grado: req.params.grado });
    res.send(student);
  }

  async getByGradoAndNombre(req, res) { 
    const student = await Student.findOne({ grado: req.params.grado, nombre: req.params.nombre });
    res.send(student);
  }

  async getByEmailAndGrado(req, res) {
    const student = await Student.findOne({ email: req.params.email, grado: req.params.grado });
    res.send(student);
  }

  async getByEmailAndNombre(req, res) {
    const student = await Student.findOne({ email: req.params.email, nombre: req.params.nombre });
    res.send(student);
  }

  async getByNombreAndGrado(req, res) {
    const student = await Student.findOne({ nombre: req.params.nombre, grado: req.params.grado });
    res.send(student);
  }

  async getByEmailAndGradoAndNombre(req, res) {
    const student = await Student.findOne({ email: req.params.email, grado: req.params.grado, nombre: req.params.nombre });
    res.send(student);
  }

}
