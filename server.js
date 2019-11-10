const express = require('express')

const app = express()

// implement the server here

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`running server on port ${PORT}`))