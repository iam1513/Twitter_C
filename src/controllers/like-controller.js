const LikeService = require("../services/like-service");

const likeService = new LikeService();
async function toggleLike(req, res) {
  try {
    const data = req.body;
    console.log(data);
    const response = await likeService.toggleLike(
      data.modelId,
      data.modelType,
      data.user
    );

    // console.log(response);
    return res.json({
      success: true,
      message: "Successfully toggling a like",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error encountered while toggling the like",
      data: {},
      error: error,
    });
  }
}

module.exports = { toggleLike };
