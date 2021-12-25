const { v4 } = require("./uuid");

// https://github.com/nestjs/nest/blob/master/packages/common/utils/is-uuid.ts#L5
const UUID_REGEX =
  /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

module.exports.isV4 = function isV4(str) {
  return str && UUID_REGEX.test(str);
};

module.exports.v4 = v4;
