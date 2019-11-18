exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorites').del()
  .then(() => knex('users').del())
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('users').insert({
          name: 'human 1',
          password: 'password',
          email: 'human@human.com'
        },'id')
        .then(user => {
          return knex('favorites').insert([
            {
              user_id: user[0],
              movie_id: '1',
              title: 'Hulk',
              poster_path: 'q34598347589-739',
              release_date: '2010',
              vote_average: '3',
              overview: 'Big Green Guy Rage',
            },
            {
              user_id: user[0],
              movie_id: '20',
              title: 'Superman',
              poster_path: 'q3459834sdfs7589-739',
              release_date: '2009',
              vote_average: '4',
              overview: 'Handsome Strong Man',
            }
          ])
        })
        .then(() => console.log('Seeding complete'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
