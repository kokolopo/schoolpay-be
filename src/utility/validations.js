import { body } from "express-validator";

// validasi register
const validateRequestRegistration = [
  // Validasi untuk "user"
  body("user.fullname").notEmpty().withMessage("Fullname tidak boleh kosong"),
  body("user.email").isEmail().withMessage("Email user harus valid"),
  body("user.phone")
    .isNumeric()
    .withMessage("Nomor telepon user harus berupa angka")
    .isLength({ min: 10, max: 15 })
    .withMessage("Nomor telepon user harus antara 10-15 digit"),
  body("user.password")
    .isLength({ min: 8 })
    .withMessage("Password harus memiliki minimal 8 karakter")
    .matches(/[A-Z]/)
    .withMessage("Password harus mengandung setidaknya satu huruf besar")
    .matches(/\d/)
    .withMessage("Password harus mengandung setidaknya satu angka")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password harus mengandung setidaknya satu karakter khusus"),

  // Validasi untuk "institution"
  body("institution.name")
    .notEmpty()
    .withMessage("Nama institusi tidak boleh kosong"),
  body("institution.address")
    .notEmpty()
    .withMessage("Alamat institusi tidak boleh kosong"),
  body("institution.email")
    .isEmail()
    .withMessage("Email institusi harus valid"),
  body("institution.contact")
    .isNumeric()
    .withMessage("Nomor kontak institusi harus berupa angka")
    .isLength({ min: 10, max: 15 })
    .withMessage("Nomor kontak institusi harus antara 10-15 digit"),
];

const validateRequestLogin = [
  body("email").isEmail().withMessage("Email tidak valid"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Password harus memiliki minimal 8 karakter")
    .matches(/[A-Z]/)
    .withMessage("Password harus mengandung setidaknya satu huruf besar")
    .matches(/\d/)
    .withMessage("Password harus mengandung setidaknya satu angka")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password harus mengandung setidaknya satu karakter khusus"),
];

const validateRequestAddUser = [
  body("fullname").notEmpty().withMessage("Fullname tidak boleh kosong"),
  body("email").isEmail().withMessage("Email  harus valid"),
  body("phone")
    .isNumeric()
    .withMessage("Nomor telepon  harus berupa angka")
    .isLength({ min: 10, max: 15 })
    .withMessage("Nomor telepon  harus antara 10-15 digit"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password harus memiliki minimal 8 karakter")
    .matches(/[A-Z]/)
    .withMessage("Password harus mengandung setidaknya satu huruf besar")
    .matches(/\d/)
    .withMessage("Password harus mengandung setidaknya satu angka")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password harus mengandung setidaknya satu karakter khusus"),
  body("role_id").isNumeric().withMessage("Nomor telepon  harus berupa angka"),
];

export {
  validateRequestRegistration,
  validateRequestLogin,
  validateRequestAddUser,
};
