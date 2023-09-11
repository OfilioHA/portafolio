const { Repository } = require("./repository");
const { PublicRepository } = require("./public-repository");

PublicRepository.hasOne(Repository, {
  foreignKey: "visibilityId",
  constraints: false,
  scope: {
    visibilityType: "public",
  },
});

Repository.belongsTo(PublicRepository, {
  foreignKey: "visibilityId",
  constraints: false,
});

module.exports = {
  Repository,
  PublicRepository,
};
