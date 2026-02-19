import { sql } from "drizzle-orm";
import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdateFn(() => sql`now()`),
  deletedAt: timestamp("deleted_at"),
};
