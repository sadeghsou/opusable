import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { timestamps } from "~~/server/utils/dbHelpers";
import { services, tags } from "./services";

export const portfolios = pgTable("portfolios", {
  id: serial().primaryKey(),
  title: text().notNull().unique(),
  description: text().notNull().unique(),
  imageUrl: text().notNull(),
  link: text().notNull(),
  ...timestamps,
});

export const portfolioService = pgTable("portfolio_service", {
  portfolioId: serial("portfolio_id")
    .notNull()
    .references(() => portfolios.id),
  serviceId: serial("service_id")
    .notNull()
    .references(() => services.id),
});

export const portfolioTag = pgTable("portfolio_tag", {
  portfolioId: serial("portfolio_id")
    .notNull()
    .references(() => portfolios.id),
  tagId: serial("tag_id")
    .notNull()
    .references(() => tags.id),
});
