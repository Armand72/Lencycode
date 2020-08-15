// const express = require("express");
// const router = express.Router({ mergeParams: true });
// const connection = require("../config");
// const Auth = require("./middleware/auth");

// router.get("/:idChild", Auth, (req, res) => {
//   const idChild = parseInt(req.params.idChild);
//   const sql = `SELECT id, name, DATE_FORMAT(start, "%d/%m/%Y") AS start, DATE_FORMAT(end, "%d/%m/%Y") AS end, description FROM medication WHERE children_id = ?`;
//   connection.query(sql, [idChild], (error, results, fields) => {
//     if (error) {
//       res.status(501).send("couldn't get medication" + error);
//     } else {
//       res.json(results);
//     }
//   });
// });

// router.post("/", Auth, (req, res) => {
//   const medication = req.body;
//   const sql = `INSERT INTO medication SET ?`;
//   connection.query(sql, medication, (error, results, fields) => {
//     if (error) {
//       console.log(error);
//       res.status(501).send("couldn't post medication" + error);
//     } else {
//       req.body.id = results.insertId;
//       res.json(req.body.id);
//     }
//   });
// });

// router.put("/:idMedication", Auth, (req, res) => {
//   const idMedication = req.params.idMedication;
//   const medication = req.body;

//   connection.query(
//     "UPDATE medication SET ? WHERE id=?",
//     [medication, idMedication],
//     (error, results, fields) => {
//       if (error) {
//         res.status(501).send("couldn't update medication" + error);
//       } else {
//         res.json(req.body);
//       }
//     }
//   );
// });

// router.delete("/:idMedication", Auth, (req, res) => {
//   const idMedication = req.params.idMedication;
//   const sql = "DELETE FROM medication WHERE id = ?";
//   connection.query(sql, [idMedication], (error, results, fields) => {
//     if (error) {
//       res.status(501).send("couldn't delete medication" + error);
//     } else {
//       req.body.id = results.insertId;
//       res.json(req.body.id);
//     }
//   });
// });

// router.get("/allergies/:idChild", Auth, (req, res) => {
//   const idChild = parseInt(req.params.idChild);
//   const sql = "SELECT id, name FROM allergies WHERE children_id = ?";
//   connection.query(sql, [idChild], (error, results, fields) => {
//     if (error) {
//       res.status(501).send("couldn't get users");
//     } else {
//       res.json(results);
//     }
//   });
// });

// router.post("/allergies", Auth, (req, res) => {
//   const allergies = req.body;
//   const sql = `INSERT INTO allergies (name, children_id) VALUES ?`;
//   connection.query(sql, [allergies], (error, results, fields) => {
//     if (error) {
//       res.status(501).send("couldn't post image" + error);
//     } else {
//       req.body.id = results.insertId;
//       res.json(req.body.id);
//     }
//   });
// });

// router.delete("/allergies/:idAllergy", Auth, (req, res) => {
//   const idAllergy = req.params.idAllergy;
//   const sql = "DELETE FROM allergies WHERE id = ?";
//   connection.query(sql, [idAllergy], (error, results, fields) => {
//     if (error) {
//       res.status(501).send("couldn't post image" + error);
//     } else {
//       req.body.id = results.insertId;
//       res.json(req.body.id);
//     }
//   });
// });

// module.exports = router;
