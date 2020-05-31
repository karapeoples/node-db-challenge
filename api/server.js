const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const server = express()
const ProjectsRouter = require('../api/projects/projects-router')
const ResourcesRouter = require('../api/resources/resources-router')


server.use(helmet(), morgan('dev'), express.json())
server.use('/projects', ProjectsRouter)
server.use('/resources', ResourcesRouter)

// SEE IF API IS UP
server.get('/', (req, res) => {
	res.status(200).json('Welcome to DB Sprint Backend By Kara')
})

module.exports = server
