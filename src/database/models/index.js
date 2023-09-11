const { Repository } = require("./repository");
const { PublicRepository } = require("./public-repository");

PublicRepository.hasOne(Repository, {
  foreignKey: "visibilityId",
  as: "visibility",
  constraints: false,
});

Repository.belongsTo(PublicRepository, {
  foreignKey: "visibilityId",
  as: "visibility",
  constraints: false,
  scope: {
    visibilityType: "public",
  },
});

module.exports = {
  Repository,
  PublicRepository,
};
