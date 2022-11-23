import ApiConstants from "../../constants/ApiConstants";

const getFlagIcon = (
  code = "IN",
  style = ApiConstants.COUNTRY_FLAG.STYLE.FLAT,
  size = ApiConstants.COUNTRY_FLAG.SIZE[64]
) => `${ApiConstants.COUNTRY_FLAG.BASE_URL}/${code}/${style}/${size}.png`;

const getLogo = (imageId) =>
  `${ApiConstants.STATIC_IMAGE.BASE_URL}/logo/${imageId}.png`;

const getPoster = (imageId, quality = ApiConstants.STATIC_IMAGE.QUALITY.SD) =>
  `${ApiConstants.STATIC_IMAGE.BASE_URL}/poster/${quality}/${imageId}.png`;

const getGalleryImage = (
  imageId,
  size,
  quality = ApiConstants.STATIC_IMAGE.QUALITY.SD
) =>
  `${ApiConstants.STATIC_IMAGE.BASE_URL}/gallery/${size}/${quality}/${imageId}.png`;

export default { getFlagIcon, getLogo, getPoster, getGalleryImage };
