import 'dotenv/config'

export default {
    jwtSecret: String(process.env.SECRET)
}