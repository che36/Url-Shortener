import { config } from "config/Constants"
import { Mongoose } from "mongoose"
export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await Mongoose.call(config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
            console.log('Database connected')
        } catch (err) {
            console.error(err.message)
            process.exit(1)
        }
    }
}