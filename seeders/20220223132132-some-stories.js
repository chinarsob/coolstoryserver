
    'use strict';

    module.exports = {
      up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
          "stories",
          [
            {
              name:"In Forest",
              content:"spent over night in forest.thrilling experience",
              imageUrl:"https://thumbs.dreamstime.com/z/track-forest-green-trees-beautiful-sunny-day-sun-shines-trail-along-beautiful-green-forest-nature-120815323.jpg",
              spaceId:16,
              createdAt: new Date(),
              updatedAt: new Date(),
              
            },
            {
              name:"On cruise",
              content:"amazing cruise experience at singapore.It was a week trip",
              imageUrl:"https://img2.10bestmedia.com/Images/Photos/384606/Mardi-Gras_54_990x660.jpg",
              spaceId:17,
              createdAt: new Date(),
              updatedAt: new Date(),
             
            },
            {
              name:"Hiking",
              content:"amazing hiking experience at himalayas",
              imageUrl:"https://www.muchbetteradventures.com/magazine/content/images/size/w2000/2021/06/iStock-1066621812.jpeg",
              spaceId:18,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          {}
        );
        },   
      down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("stories", null, {});
      }
    };
 
  
