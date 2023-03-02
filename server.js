const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Welcome Google Cloud World');
});

app.listen(port,() => {
    console.log(`Server started and listening at ${port}`);
})

