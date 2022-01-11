'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'alphabet',
			[
				{
					id: 1,
					alphabet: 'A',
					image:
						'https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/a.gif',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					id: 2,
					alphabet: 'B',
					image:
						'https://i.pinimg.com/originals/db/8e/2f/db8e2f51fc24d10b7c296e8c46112b9a.png',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					id: 3,
					alphabet: 'C',
					image:
						'https://coloringpagesonly.com/wp-content/uploads/2021/09/ASL-Sign-Language-Letter-C.png',
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
