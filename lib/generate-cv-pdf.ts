import jsPDF from "jspdf"

export async function generateCVPDF(): Promise<Blob> {
  const pdf = new jsPDF()

  // Set font
  pdf.setFont("helvetica")

  // Header
  pdf.setFontSize(24)
  pdf.setFont("helvetica", "bold")
  pdf.text("Samar Guizani", 20, 30)

  // Line under name
  pdf.setLineWidth(0.5)
  pdf.line(20, 35, 190, 35)

  // Contact information
  pdf.setFontSize(10)
  pdf.setFont("helvetica", "normal")

  let yPos = 45
  const contactInfo = [
    "Date de naissance: 15/01/2004 | Sexe: Féminin | Numéro de téléphone: (+216) 99544206 (Tél. mobile) | Adresse électronique:",
    "samarguizani07@gmail.com | Adresse électronique: guizanisamar@ieee.org | LinkedIn: Samar GUIZANI | Github:",
    "SamarGuizani",
  ]

  contactInfo.forEach((line) => {
    pdf.text(line, 20, yPos)
    yPos += 5
  })

  yPos += 5

  // JE ME PRÉSENTE section
  pdf.setFontSize(12)
  pdf.setFont("helvetica", "bold")
  pdf.text("JE ME PRÉSENTE", 20, yPos)
  pdf.line(20, yPos + 2, 190, yPos + 2)
  yPos += 8

  pdf.setFontSize(10)
  pdf.setFont("helvetica", "normal")
  const presentation = [
    "Étudiante en 2ème année Licence en Génie Logiciel et Systèmes d'Information, je suis passionnée par les technologies",
    "innovantes, le développement logiciel et la conception de solutions informatiques efficaces. Dotée d'un solide esprit d'analyse et",
    "d'une grande curiosité intellectuelle, je cherche à appliquer mes connaissances académiques dans un environnement professionnel.",
  ]

  presentation.forEach((line) => {
    pdf.text(line, 20, yPos)
    yPos += 5
  })

  yPos += 5

  // ÉDUCATION ET FORMATION section
  pdf.setFontSize(12)
  pdf.setFont("helvetica", "bold")
  pdf.text("ÉDUCATION ET FORMATION", 20, yPos)
  pdf.line(20, yPos + 2, 190, yPos + 2)
  yPos += 8

  pdf.setFontSize(10)
  pdf.setFont("helvetica", "normal")
  pdf.text("12/09/2023 – EN COURS Gabes, Tunisie", 20, yPos)
  yPos += 5
  pdf.setFont("helvetica", "bold")
  pdf.text("LICENCE EN GÉNIE LOGICIEL ET SYSTÈME D'INFORMATION", 20, yPos)
  pdf.setFont("helvetica", "normal")
  pdf.text("Faculté des sciences de Gabes", 20, yPos + 5)
  yPos += 10
  pdf.text("Site web https://fsg.rnu.tn/fr", 20, yPos)
  yPos += 10

  // EXPÉRIENCE PROFESSIONNELLE section
  pdf.setFontSize(12)
  pdf.setFont("helvetica", "bold")
  pdf.text("EXPÉRIENCE PROFESSIONNELLE", 20, yPos)
  pdf.line(20, yPos + 2, 190, yPos + 2)
  yPos += 8

  pdf.setFontSize(10)
  pdf.setFont("helvetica", "normal")
  pdf.text("15/03/2025 – EN COURS Gabes", 20, yPos)
  yPos += 5
  pdf.setFont("helvetica", "bold")
  pdf.text("MEMBRE", 20, yPos)
  pdf.setFont("helvetica", "normal")
  pdf.text("IEEE", 20, yPos + 5)
  yPos += 10

  const experience = [
    "• Organiser et participer à des workshops sur les technologies émergentes (IA, IoT)",
    "• Animer des sessions de partage de connaissances sur les bonnes pratiques en développement",
    "• Collaborer avec une équipe pluridisciplinaire sur des projets technologiques",
  ]

  experience.forEach((line) => {
    pdf.text(line, 20, yPos)
    yPos += 5
  })

  yPos += 5

  // PROJETS section
  pdf.setFontSize(12)
  pdf.setFont("helvetica", "bold")
  pdf.text("PROJETS", 20, yPos)
  pdf.line(20, yPos + 2, 190, yPos + 2)
  yPos += 8

  // PharmaApp
  pdf.setFontSize(10)
  pdf.setFont("helvetica", "normal")
  pdf.text("10/03/2025 – EN COURS", 20, yPos)
  yPos += 5
  pdf.setFont("helvetica", "bold")
  pdf.text("PharmaApp", 20, yPos)
  yPos += 5

  pdf.setFont("helvetica", "normal")
  const pharmaApp = [
    "• Développement d'une application web de e-pharmacie permettant aux patients de consulter les pharmacies, commander des",
    "médicaments en ligne et scanner des ordonnances.",
    "• Intégration des fonctionnalités de création de compte, panier, suivi de commande et gestion des priorités selon la méthode",
    "Scrum.",
  ]

  pharmaApp.forEach((line) => {
    pdf.text(line, 20, yPos)
    yPos += 5
  })

  yPos += 3

  // TouriGuide
  pdf.text("01/03/2025 – EN COURS", 20, yPos)
  yPos += 5
  pdf.setFont("helvetica", "bold")
  pdf.text("TouriGuide", 20, yPos)
  yPos += 5

  pdf.setFont("helvetica", "normal")
  const touriGuide = [
    "Création d'une application touristique intelligente permettant aux utilisateurs de découvrir les sites emblématiques, activités locales",
    "et services personnalisés selon leur emplacement. L'application intègre une carte interactive et des recommandations en temps",
    "réel.",
  ]

  touriGuide.forEach((line) => {
    pdf.text(line, 20, yPos)
    yPos += 5
  })

  yPos += 5

  // COMPÉTENCES TECHNIQUES section
  pdf.setFontSize(12)
  pdf.setFont("helvetica", "bold")
  pdf.text("COMPÉTENCES TECHNIQUES", 20, yPos)
  pdf.line(20, yPos + 2, 190, yPos + 2)
  yPos += 8

  pdf.setFontSize(10)
  pdf.setFont("helvetica", "bold")
  pdf.text("Developpement Web", 20, yPos)
  pdf.line(20, yPos + 2, 190, yPos + 2)
  yPos += 8

  pdf.setFont("helvetica", "normal")
  pdf.text("• HTML5 , CSS3 , JavaScript (ES6+) , React.js , PHP , Python", 20, yPos)
  yPos += 8

  pdf.setFont("helvetica", "bold")
  pdf.text("Langages de Programmation", 20, yPos)
  pdf.line(20, yPos + 2, 190, yPos + 2)
  yPos += 8

  pdf.setFont("helvetica", "normal")
  pdf.text("• Java , C/C++ , Python, MATLAB", 20, yPos)
  yPos += 8

  pdf.setFont("helvetica", "bold")
  pdf.text("Compétences Fondamentales", 20, yPos)
  pdf.line(20, yPos + 2, 190, yPos + 2)
  yPos += 8

  pdf.setFont("helvetica", "normal")
  pdf.text("• Algorithmique et structures de données", 20, yPos)
  yPos += 5
  pdf.text("• Programmation orientée objet (POO)", 20, yPos)
  yPos += 10

  // COMPÉTENCES LINGUISTIQUES section
  pdf.setFontSize(12)
  pdf.setFont("helvetica", "bold")
  pdf.text("COMPÉTENCES LINGUISTIQUES", 20, yPos)
  pdf.line(20, yPos + 2, 190, yPos + 2)
  yPos += 8

  pdf.setFontSize(10)
  pdf.setFont("helvetica", "normal")
  pdf.text("Langue(s) maternelle(s): ARABE", 20, yPos)
  yPos += 5
  pdf.text("Autre(s) langue(s): FRANÇAIS | ANGLAIS | ALLEMAND", 20, yPos)

  return pdf.output("blob")
}
