#!/usr/bin/node

const dbClient = require('../utils/redis');
const dbClient = require('../utils/db');
const { RedisClient } = require('redis');

class AppController {
    static getStatus(req, res) {
        if (RedisClient.isAlive() && dbClient.isAlive()) {
            res.json({ redis: true, db: true });
            res.end();
        }
    }

    static async getStats(req, res) {
        const users = await dbClient.nbUsers();
        const files = await dbClientnbFiles();
        res.json({ users, files });
        res.end();
    }
}

module.exports = AppController;