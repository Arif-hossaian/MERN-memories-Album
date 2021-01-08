import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import postRoutes from "../server/routes/posts.js"

const app = express()


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use("/posts", postRoutes)


//mongodb/atlas
const CONNECTION_URL = "mongodb+srv://mernmemories:WogmSBGalEuh4YLr@cluster0.6wv8u.mongodb.net/<dbname>?retryWrites=true&w=majority"
const PORT = process.env.PORT || 7000


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`Server is running on port no: ${PORT}`)
    }))
    .catch((error) => console.log(error.message))

mongoose.set("useFindAndModify", false)    