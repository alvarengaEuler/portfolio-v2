import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl: string
}

export default function ProjectCard({ title, description, tags, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Link href={projectUrl} className="text-primary font-medium flex items-center hover:underline">
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

