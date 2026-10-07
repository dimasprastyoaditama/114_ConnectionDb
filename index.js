import express from 'express'
import pg from 'pg'
const app = express()
const port = 3000
const {Pool} = pg

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: 'adit27',
    port: 5432,
})