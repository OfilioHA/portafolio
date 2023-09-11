"use strict";
const { Repository } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const response = await fetch("https://api.github.com/users/OfilioHA/repos");
    let repos = await response.json();
    await Promise.all(
      repos.map(async (repo) => {
        await Repository.create({
          name: repo.name,
          src: repo.html_url,
          visibility: repo.visibility,
          state: '',
          origin: 'github'
        });
      })
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Repositories', null, {});
  },
};
