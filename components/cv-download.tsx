"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export function CVDownload() {
  return (
    <Button
      asChild
      className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      <Link
        href="https://fbubzjkbpczpzjtwrjym.supabase.co/storage/v1/object/public/portfolio-assets/Cv_Samar_Guizani.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="CV_Samar_Guizani.pdf"
        className="flex items-center gap-2"
      >
        <Download className="h-4 w-4" />
        Télécharger CV
      </Link>
    </Button>
  )
}
