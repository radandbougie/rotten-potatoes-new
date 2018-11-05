// comments.js

module.exports = (app) => {

  // NEW Comment
  app.post('/reviews/comments', (req, res) => {
    res.send('reviews comment')
  })
  // DELETE
app.delete('/reviews/comments/:id', function (req, res) {
  console.log("DELETE comment")
  Comment.findByIdAndRemove(req.params.id).then((comment) => {
    res.redirect(`/reviews/${comment.reviewId}`);
  }).catch((err) => {
    console.log(err.message);
  })
})

}
