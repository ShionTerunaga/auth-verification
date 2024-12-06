import express, { Request, Response } from "express"
import { db } from "./db/db"

const app = express()
const PORT = 8080

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    db.serialize(() => {
        db.each("SELECT * FROM users", (err, row) => {
            if (err) {
                return res.json({
                    message: "error"
                })
            }

            return res.json({
                data: row
            })
        })
    })
})

app.listen(PORT, () => {
    console.log(`Server is running. Number of Port is ${PORT}`)
})
