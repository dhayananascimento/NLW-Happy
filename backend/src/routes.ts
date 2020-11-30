import { Router } from "express";
import multer from "multer";

import uploadConfig from './config/upload'
import OrphanegesController from "./controllers/OrphanagesController";

const routes = Router();
const upload  = multer(uploadConfig);

routes.get("/orphanages", OrphanegesController.index);
routes.get("/orphanages/:id", OrphanegesController.show);
routes.post("/orphanages", upload.array('images'),OrphanegesController.create);

export default routes;

// MVC

// Model
// View
// Controllers
