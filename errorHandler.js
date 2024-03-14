module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res
    .status(err.code > 100 && err.code < 600 ? err.code : 500)
    .json({ success: false, error: true, message: err.message || "" });
  // throw new ResponseError(err.code, {success: false, error: true, message: err.message || ''})
};
