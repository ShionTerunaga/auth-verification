import express, { Request, Response } from "express"

const app = express()
const PORT = 8080

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "なんてこった"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running. Number of Port is ${PORT}`)
})
