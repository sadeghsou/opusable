import { text, pgTable, serial } from "drizzle-orm/pg-core";
import { timestamps } from "~~/server/utils/dbHelpers";

export const services = pgTable("services", {
  id: serial().primaryKey(),
  name: text().notNull().unique(),
  description: text().notNull().unique(),
  icon: text().notNull().default("solar:code-line-duotone"),
  ...timestamps,
});

export const serviceItems = pgTable("service_items", {
  id: serial().primaryKey(),
  title: text().notNull(),
  serviceId: serial("service_id")
    .notNull()
    .references(() => services.id),
  ...timestamps,
});

export const tags = pgTable("tags", {
  id: serial().primaryKey(),
  title: text().notNull(),
  ...timestamps,
});
