import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  className?: string
}

export default function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "bg-card border rounded-lg p-4 flex items-center justify-center text-center transition-all hover:border-primary hover:shadow-sm",
        className,
      )}
    >
      <span className="font-medium">{name}</span>
    </div>
  )
}

