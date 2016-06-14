
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('traits').del(),

    // Inserts seed entries
    knex('traits').insert({id: 1, best: 'beautiful man', worst: 'none'}),
    knex('traits').insert({id: 2, best: 'golden god', worst: 'none'}),
    knex('traits').insert({id: 3, best: 'he is king', worst: 'none'})
  );
};
