import { pgTable, text, integer, serial } from "drizzle-orm/pg-core";
import { timestamps } from "~~/server/utils/dbHelpers";

export const processes = pgTable("processes", {
  id: serial().primaryKey(),
  name: text().notNull().unique(),
  description: text().notNull().unique(),
  icon: text().notNull().default("solar:checklist-bold-duotone"),
  order: integer().notNull().unique(),
  ...timestamps,
});

export const processItems = pgTable("process_items", {
  id: serial().primaryKey(),
  title: text().notNull(),
  processId: serial("process_id")
    .notNull()
    .references(() => processes.id),
  ...timestamps,
});
