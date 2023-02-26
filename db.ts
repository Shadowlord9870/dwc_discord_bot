import { DB } from "sqlite";


export const initDB = () => {
  const db = new DB("sqlite.db")
  db.execute(`create table if not exists
  channels (
    uuid char(38) primary key,
    member_id string not null,
    channel_id string not null
  )
  `)
  return db;
}
