/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('roles', {
      id: { type: 'uuid', primaryKey: true, default: pgm.func('uuid_generate_v4()') },
      name: { type: 'varchar(255)', notNull: true, unique: true },
      description: { type: 'text' }
    });
  };

exports.down = pgm => {};
