import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  demoUrl, 
  githubUrl, 
  featured 
}: ProjectCardProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-blue-500/30 transition-all duration-500 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="aspect-video relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            {demoUrl && (
              <Button
                size="icon"
                variant="secondary"
                className="bg-background/90 backdrop-blur-sm hover:bg-background"
                asChild
              >
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button
                size="icon"
                variant="secondary"
                className="bg-background/90 backdrop-blur-sm hover:bg-background"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                Destaque
              </Badge>
            </div>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="group-hover:text-blue-500 transition-colors duration-300">
            {title}
          </h3>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-muted/50 hover:bg-blue-500/10 hover:text-blue-600 transition-colors duration-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-xl">
        <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
             style={{ mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", maskComposite: "xor" }} />
      </div>
    </motion.div>
  );
}