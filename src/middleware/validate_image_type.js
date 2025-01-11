// Middleware untuk memeriksa Content-Type
const validateImageType = (req, res, next) => {
  const contentType = req.get("content-type");
  const validImageTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
  ];

  if (!validImageTypes.includes(contentType)) {
    return res.status(400).json({
      error:
        "Invalid file type. Only images (JPEG, JPG, PNG, GIF, WEBP) are allowed.",
    });
  }
  next();
};

export { validateImageType };
