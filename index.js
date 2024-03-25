const redis = require('redis')
const express = require('express')
const proccess = require('process')

const app = express()
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
})
client.set('visits', 0)

app.get('/', (req, res) => {
    proccess.exit(0);
    client.get('visits', (err, visits) => {
        res.send(`Number of visits is ${visits}`)
        client.set('visits', parseInt(visits) + 1)
    })
})


app.listen(3000, () => {
    console.log('app is listening on port 3000');
})