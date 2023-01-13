import { Router } from "express";

const router = Router();

router.get("/home", (req, res) => {
  res.render("index", { title: "Inicio de pagina con node.js" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: 'Esta es una plantilla de un "sitio web"' });
});
router.get("/Contact", (req, res) => {
  res.render("contact", { title: "Más Información del Proyecto" });
});

export default router;
