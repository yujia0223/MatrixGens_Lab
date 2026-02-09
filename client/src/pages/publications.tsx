import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ExternalLink, Quote, FileText, SortAsc, SortDesc, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import type { Publication } from "@shared/schema";

type SortField = "year" | "citations" | "title";
type SortOrder = "asc" | "desc";

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const { data: publications = [], isLoading } = useQuery<Publication[]>({
    queryKey: ["/api/publications"],
  });

  const categories = [...new Set(publications.map((p) => p.category))];
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  const filteredPublications = [...publications]
    .filter((pub) => {
      const matchesSearch =
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.venue.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === "all" || pub.category === categoryFilter;
      const matchesYear = yearFilter === "all" || pub.year.toString() === yearFilter;
      return matchesSearch && matchesCategory && matchesYear;
    })
    .sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case "year":
          comparison = a.year - b.year;
          break;
        case "citations":
          comparison = a.citations - b.citations;
          break;
        case "title":
          comparison = a.title.localeCompare(b.title);
          break;
      }
      return sortOrder === "desc" ? -comparison : comparison;
    });

  const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0);

  return (
    <main>
      <section className="py-16 lg:py-20 bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="text-sm text-muted-foreground mb-4">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">Publications</span>
            </nav>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                  Publications
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  Browse our peer-reviewed papers and preprints advancing the state of AI research.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <div className="text-center px-6 py-3 rounded-lg bg-primary/10">
                  <div className="text-2xl font-bold text-primary" data-testid="text-total-publications">
                    {publications.length}
                  </div>
                  <div className="text-xs text-muted-foreground">Publications</div>
                </div>
                <div className="text-center px-6 py-3 rounded-lg bg-primary/10">
                  <div className="text-2xl font-bold text-primary" data-testid="text-total-citations">
                    {totalCitations}+
                  </div>
                  <div className="text-xs text-muted-foreground">Citations</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 border-b bg-background sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title, author, or venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-publications"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]" data-testid="select-category-filter">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger className="w-[120px]" data-testid="select-year-filter">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={sortField}
                onValueChange={(value) => setSortField(value as SortField)}
              >
                <SelectTrigger className="w-[140px]" data-testid="select-sort-field">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="year">Year</SelectItem>
                  <SelectItem value="citations">Citations</SelectItem>
                  <SelectItem value="title">Title</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                data-testid="button-toggle-sort"
              >
                {sortOrder === "desc" ? (
                  <SortDesc className="h-4 w-4" />
                ) : (
                  <SortAsc className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-sm text-muted-foreground">
            Showing {filteredPublications.length} of {publications.length} publications
          </div>

          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-6 rounded-lg bg-card border border-card-border">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex gap-2">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-24" />
                      </div>
                      <Skeleton className="h-6 w-full max-w-xl" />
                      <Skeleton className="h-4 w-full max-w-md" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-8 w-24" />
                      <Skeleton className="h-9 w-20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPublications.length === 0 ? (
            <div className="text-center py-16">
              <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No publications found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPublications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <div
                    className="group p-6 rounded-lg bg-card border border-card-border hover:shadow-md transition-all duration-200"
                    data-testid={`publication-row-${pub.id}`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs font-mono">
                            {pub.year}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {pub.category}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {pub.authors}
                        </p>
                        <p className="text-sm text-muted-foreground font-medium">
                          {pub.venue}
                        </p>
                      </div>

                      <div className="flex items-center gap-6 lg:flex-shrink-0">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Quote className="h-4 w-4" />
                          <span className="font-semibold">{pub.citations}</span>
                          <span className="text-xs">citations</span>
                        </div>
                        {pub.scholarUrl && (
                          <a
                            href={pub.scholarUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`link-pub-scholar-${pub.id}`}
                          >
                            <Button variant="outline" size="sm" className="gap-2">
                              <FileText className="h-4 w-4" />
                              View
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <a
              href="https://scholar.google.com/citations?user=DC0t9zwAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="default" className="gap-2" data-testid="button-google-scholar">
                View on Google Scholar
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
