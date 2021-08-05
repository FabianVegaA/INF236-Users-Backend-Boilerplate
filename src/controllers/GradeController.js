import Grade from "../models/Grade";

export default class GradeController {
  static getAll() {
    return new Promise((resolve, reject) => {
      Grade.find({}, (err, grades) => {
        if (err) {
          reject(err);
        } else {
          resolve(grades);
        }
      });
    });
  }

  static getOne(id) {
    return new Promise((resolve, reject) => {
      Grade.findOne({ _id: id }, (err, grade) => {
        if (err) {
          reject(err);
        } else {
          resolve(grade);
        }
      });
    });
  }

  static getByStudentId(studentId) {
    return new Promise((resolve, reject) => {
      Grade.find({ studentId: studentId }, (err, grades) => {
        if (err) {
          reject(err);
        } else {
          resolve(grades);
        }
      });
    });
  }

  static add(grade) {
    return new Promise((resolve, reject) => {
      Grade.create(grade, (err, grade) => {
        if (err) {
          reject(err);
        } else {
          resolve(grade);
        }
      });
    });
  }

  static update(grade) {
    return new Promise((resolve, reject) => {
      Grade.findOneAndUpdate(
        { _id: grade._id },
        grade,
        { new: true },
        (err, grade) => {
          if (err) {
            reject(err);
          } else {
            resolve(grade);
          }
        }
      );
    });
  }

  static remove(id) {
    return new Promise((resolve, reject) => {
      Grade.findOneAndRemove({ _id: id }, (err, grade) => {
        if (err) {
          reject(err);
        } else {
          resolve(grade);
        }
      });
    });
  }
}
