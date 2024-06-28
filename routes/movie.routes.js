const express = require("express");
const router = express.Router();

const prisma = require("../db/index");



//  POST /api/movies  -  Creates a new movie
router.post("/movies", (req, res, next) => {
    const { title, year, summary, genre } = req.body;

    const newMovie = {
        title,
        year,
        summary,
        genre,
    }

    prisma.movie.create({ data: newMovie })
        .then((movie) => {
            console.log("New movie created", movie);
            res.status(201).json(movie);
        })
        .catch((err) => {
            console.log("Error creating new movie", err);
            res.status(500).json({ message: "Error creating new movie" });
        });
});



//  GET /api/movies -  Retrieves all of the movies
router.get("/movies", (req, res, next) => {
    prisma.movie.findMany()
        .then((allMovies) => {
            res.json(allMovies)
        })
        .catch((err) => {
            console.log("Error getting movies from DB", err);
            res.status(500).json({ message: "Error getting movies from DB" });
        });
});


module.exports = router;