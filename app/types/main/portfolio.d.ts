interface PortfolioItem {
  imageUrl: string;
  url: string;
  categoryLocale: string;
  title: string;
  description: string;
  tags: { title: string; url: string }[];
}
