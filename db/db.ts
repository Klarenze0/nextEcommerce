import {PrismaClient} from '../prisma/generated/client'
import { PrismaBetterSqlite3  } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./dev.db'
})

const prismaClientSingleton = () => {
    return new PrismaClient({adapter})
}

declare global {
    var db: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.db ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== "production") globalThis.db = db
