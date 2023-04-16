const express = require("express");
const router = express.Router();
const authSuperAdmin = require("../middleware/auth/authSuperAdmin");
const authAdmin = require("../middleware/auth/authAdmin");

const {
  getAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  login,
  getAdminById,
} = require("../controllers/adminController");

// router.get('/', authAdmin, getAdmins)
router.post("/login", login);

// router.post('/', authSuperAdmin, createAdmin)
// router.put('/:id', authSuperAdmin, updateAdmin)
// router.delete('/:id', authSuperAdmin, deleteAdmin)

router.get("/", getAdmins);
// router.post('/login', login)
// router.get('/:id', getAdminById)
router.post("/", createAdmin);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;
