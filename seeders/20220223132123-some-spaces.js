'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title:"first space",
          description:"this is my first space",
          backgroundColor:"#E9967A",
          color:"#CCCCFF",
          userId:16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:"second space",
          description:"this is my second space",
          backgroundColor:"#40E0D0",
          color:"",
          userId:14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:"third space",
          description:"this is my third space",
          backgroundColor:"#40E0D0",
          color:"",
          userId:15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    },   
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  }
};
