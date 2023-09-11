"use strict";
const { Repository, PublicRepository } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const response = await fetch("https://api.github.com/users/OfilioHA/repos");
    let repos = await response.json();
    await Promise.all(
      repos.map(async (repo) => {
        const repository = await Repository.create({
          name: repo.name,
          origin: "github",
          visibilityType: "public",
          startedAt: repo.created_at,
          lastUpdatedAt: repo.updated_at,
        });

        const publicRepo = await PublicRepository.create({
          srcUrl: repo.html_url,
        });

        repository.visibilityId = publicRepo.id;

        await repository.save();
      })
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Repositories", null, {});
    await queryInterface.bulkDelete("PublicRepositories", null, {});
  },
};
