import { cn } from "@/lib/utils"

export function Section({ id, className, children, fullWidthContainer = false }: { id?: string; className?: string; children: React.ReactNode; fullWidthContainer?: boolean }) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 overflow-hidden", className)}
    >
      <div className={fullWidthContainer ? "w-full" : "container"}>{children}</div>
    </section>
  )
}

