const sqlite3 = require('sqlite3');
const Promise = require('bluebird');
const AppDAO = require('../../db');

class beitragModel {
  constructor(db) {
    this.db = db;
  }

  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS Posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        inhalt TEXT,
        img TEXT);`;
    return this.db.run(sql);
  }

  createPost(params) {
    const { inhalt, img } = params;
    return this.db.run(
      `INSERT INTO Posts (inhalt,img) VALUES (?,?);`,
      [inhalt, img]
    );
  }

  update(post) {
    const { id, inhalt } = post;
    return this.db.run(
      `UPDATE posts SET inhalt = ? WHERE id = ?;`,
      [inhalt, id]
    );
  }

  delete(id) {
    return this.db.run(
      `DELETE FROM projects WHERE id = ?;`,
      [id]
    );
  }

  getAll() {
    return this.db.all(`SELECT * FROM posts`);
  }

  findById(id) {
    return this.db.get(`SELECT * FROM posts WHERE id = ?`, [
      id,
    ]);
  }

  delete(id) {
    console.log(id);
    return this.db.run('DELETE FROM posts WHERE id = ?', [
      id,
    ]);
  }
}

module.exports = beitragModel;
