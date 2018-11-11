
const Comment = require('../models/comment')

module.exports = (app) => {

     
     app.post('/reviews/comments', (req, res) => {
         Comment.create(req.body).then(comment => {
             res.redirect(`/reviews/${comment.reviewId}`);
         }).catch((err) => {
             console.log(err.message);
         });
     });

     // DELETE
     app.delete('/reviews/comments/:id', function (req, res) {
         Comment.findByIdAndRemove(req.params.id).then((comment) => {
             res.redirect(`/reviews/${comment.reviewId}`);
         }).catch((err) => {
             console.log(err.message);
         })
     })
};
