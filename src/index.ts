import express from 'express'

const app = express()

app.listen(3000, () => {
    console.log("[System] Http server listening to port 3000")
})