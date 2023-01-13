import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Inicio de Node" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "Sobre.." });
});
router.get("/Contact", (req, res) => {
  res.render("contact", { title: "Contacto" });
});

export default router;
