const router = require("express").Router();

//  getting the celebrity model
const Celebrity = require("./../models/Celebrity.model");

const Movie = require("./../models/Movie.model")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


// form for creating a celebrity
router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});


// route for handling the creating of a new celebrity
router.post(
    '/celebrities/create',
    async (req, res) => {
    const celebrity = new Celebrity();
    celebrity.name = req.body.name;
    celebrity.occupation = req.body.occupation;
    celebrity.catchPhrase = req.body.catchPhrase;
    try {
        await celebrity.save();
        res.redirect('/celebrities')
    } catch (error) {
        res.render('/celebrities/new-celebrity');
    }
 })

// celebrities page
router.get("/celebrities", (req, res) => {
  Celebrity.find()
  .then(celebrities => {
      res.render('celebrities/celebritiesPage', {celebrities});
  })
  .catch((err) => console.log('Something went wrong',err));
});


// form for creating a celebrity
router.get("/movies/create", (req, res) => {
  res.render("movies/new-movie");
});
    

router.post(
  '/movies/create',
  async (req, res) => {
  // const celebrity = new Movie();
 console.log(req.body);
  // try {
  //     await celebrity.save();
  //     res.redirect('/celebrities')
  // } catch (error) {
  //     res.render('/celebrities/new-celebrity');
  // }
})
module.exports = router;
