import express from "express"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews)   // get the movie's reviews (movie id)
router.route("/new").post(ReviewsCtrl.apiPostReview)            // add new review

router.route("/:id")                                            // CRUD on reviews        (review id)
    .get(ReviewsCtrl.apiGetReview)         // get reviews
    .put(ReviewsCtrl.apiUpdateReview)      // update reviews
    .delete(ReviewsCtrl.apiDeleteReview)   // delete reviews


// router.route("/").get((req, res) => res.send("hello world"))

export default router

/* to use CURL POST using termenel */

// curl -X POST http://localhost:8000/api/v1/reviews/new -H "Content-Type:application/json" -d '{"movieId":12,"user":"alshobakisanad","review":"good"}'   

// curl -X GET http://localhost:8000/api/v1/reviews/movie/12

