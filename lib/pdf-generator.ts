import jsPDF from "jspdf"

export function downloadCV() {
  const doc = new jsPDF()

  // Set font
  doc.setFont("helvetica")

  // Header - Name
  doc.setFontSize(18)
  doc.setFont("helvetica", "bold")
  doc.text("Samar Guizani", 20, 20)

  // Line under name
  doc.setLineWidth(0.5)
  doc.line(20, 25, 190, 25)

  // Contact information
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")

  let yPos = 35

  // First line of contact info
  doc.text("Date de naissance: 15/01/2004", 20, yPos)
  doc.text("Sexe: Féminin", 80, yPos)
  doc.text("Numéro de téléphone: (+216) 99544206 (Tél. mobile)", 120, yPos)
  doc.text("Adresse électronique:", 20, yPos + 5)

  // Email links
  doc.setTextColor(0, 0, 255)
  doc.textWithLink("samarguizani07@gmail.com", 20, yPos + 10, { url: "mailto:samarguizani07@gmail.com" })
  doc.text("Adresse électronique: ", 80, yPos + 10)
  doc.textWithLink("guizanisamar@ieee.org", 130, yPos + 10, { url: "mailto:guizanisamar@ieee.org" })
  doc.text("LinkedIn: ", 20, yPos + 15)
  doc.textWithLink("Samar GUIZANI", 40, yPos + 15, { url: "https://www.linkedin.com/in/samar-guizani-44948b350" })
  doc.text("Github:", 100, yPos + 15)
  doc.textWithLink("SamarGuizani", 120, yPos + 15, { url: "https://github.com/SamarGuizani" })

  doc.setTextColor(0, 0, 0)
  yPos += 25

  // JE ME PRÉSENTE section
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("● JE ME PRÉSENTE", 20, yPos)
  doc.line(20, yPos + 2, 190, yPos + 2)

  yPos += 8
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  const presentationText =
    "Étudiante en 2ème année Licence en Génie Logiciel et Systèmes d'Information, je suis passionnée par les technologies innovantes, le développement logiciel et la conception de solutions informatiques efficaces. Dotée d'un solide esprit d'analyse et d'une grande curiosité intellectuelle, je cherche à appliquer mes connaissances académiques dans un environnement professionnel."
  const splitPresentation = doc.splitTextToSize(presentationText, 170)
  doc.text(splitPresentation, 20, yPos)
  yPos += splitPresentation.length * 4 + 5

  // ÉDUCATION ET FORMATION
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("● ÉDUCATION ET FORMATION", 20, yPos)
  doc.line(20, yPos + 2, 190, yPos + 2)

  yPos += 8
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("12/09/2023 – EN COURS Gabes, Tunisie", 20, yPos)
  yPos += 5
  doc.setFont("helvetica", "bold")
  doc.text("LICENCE EN GÉNIE LOGICIEL ET SYSTÈME D'INFORMATION", 20, yPos)
  doc.setFont("helvetica", "normal")
  doc.text("Faculté des sciences de Gabes", 20, yPos + 4)
  yPos += 8
  doc.text("Site web ", 20, yPos)
  doc.setTextColor(0, 0, 255)
  doc.textWithLink("https://fsg.rnu.tn/fr", 45, yPos, { url: "https://fsg.rnu.tn/fr" })
  doc.setTextColor(0, 0, 0)
  yPos += 10

  // EXPÉRIENCE PROFESSIONNELLE
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("● EXPÉRIENCE PROFESSIONNELLE", 20, yPos)
  doc.line(20, yPos + 2, 190, yPos + 2)

  yPos += 8
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("15/03/2025 – EN COURS Gabes", 20, yPos)
  yPos += 5
  doc.setFont("helvetica", "bold")
  doc.text("MEMBRE", 20, yPos)
  doc.setFont("helvetica", "normal")
  doc.text("IEEE", 50, yPos)
  yPos += 8

  doc.text("• Organiser et participer à des workshops sur les technologies émergentes (IA, IoT)", 20, yPos)
  yPos += 4
  doc.text("• Animer des sessions de partage de connaissances sur les bonnes pratiques en développement", 20, yPos)
  yPos += 4
  doc.text("• Collaborer avec une équipe pluridisciplinaire sur des projets technologiques", 20, yPos)
  yPos += 10

  // PROJETS
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("● PROJETS", 20, yPos)
  doc.line(20, yPos + 2, 190, yPos + 2)

  yPos += 8
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("01/03/2025 – EN COURS", 20, yPos)
  yPos += 5
  doc.setFont("helvetica", "bold")
  doc.text("TouriGuide", 20, yPos)
  yPos += 8
  doc.setFont("helvetica", "normal")
  const touriText =
    "Création d'une application touristique intelligente permettant aux utilisateurs de découvrir les sites emblématiques, activités locales et services personnalisés selon leur emplacement. L'application intègre une carte interactive et des recommandations en temps réel."
  const splitTouri = doc.splitTextToSize(touriText, 170)
  doc.text(splitTouri, 20, yPos)
  doc.setTextColor(0, 0, 255)
  doc.textWithLink("Voir le projet sur GitHub", 20, yPos + splitTouri.length * 4, { url: "https://github.com/SamarGuizani/tourism-app--8-" })
  doc.setTextColor(0, 0, 0)
  yPos += splitTouri.length * 4 + 10

  doc.text("03/2024", 20, yPos)
  yPos += 5
  doc.setFont("helvetica", "bold")
  doc.text("Portfolio Personnel", 20, yPos)
  yPos += 8
  doc.setFont("helvetica", "normal")
  const portfolioText =
    "Site portfolio responsive et moderne pour présenter mes projets, compétences et coordonnées. Construit avec des animations, un formulaire de contact dynamique et des sections de projets. Déployé avec Vercel et GitHub."
  const splitPortfolio = doc.splitTextToSize(portfolioText, 170)
  doc.text(splitPortfolio, 20, yPos)
  doc.setTextColor(0, 0, 255)
  doc.textWithLink("Voir le projet sur GitHub", 20, yPos + splitPortfolio.length * 4, { url: "https://github.com/SamarGuizani/-MyPortfolioversiongood" })
  doc.setTextColor(0, 0, 0)
  yPos += splitPortfolio.length * 4 + 10

  // COMPÉTENCES TECHNIQUES
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("● COMPÉTENCES TECHNIQUES", 20, yPos)
  doc.line(20, yPos + 2, 190, yPos + 2)

  yPos += 8
  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text("Developpement Web", 20, yPos)
  doc.line(20, yPos + 2, 100, yPos + 2)
  yPos += 8
  doc.setFont("helvetica", "normal")
  doc.text("• HTML5 , CSS3 , JavaScript (ES6+) , React.js , PHP , Python", 20, yPos)
  yPos += 8

  doc.setFont("helvetica", "bold")
  doc.text("Langages de Programmation", 20, yPos)
  doc.line(20, yPos + 2, 120, yPos + 2)
  yPos += 8
  doc.setFont("helvetica", "normal")
  doc.text("• Java , C/C++ , Python, MATLAB", 20, yPos)
  yPos += 8

  doc.setFont("helvetica", "bold")
  doc.text("Compétences Fondamentales", 20, yPos)
  doc.line(20, yPos + 2, 110, yPos + 2)
  yPos += 8
  doc.setFont("helvetica", "normal")
  doc.text("• Algorithmique et structures de données", 20, yPos)
  yPos += 4
  doc.text("• Programmation orientée objet (POO)", 20, yPos)
  yPos += 10

  // COMPÉTENCES LINGUISTIQUES
  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("● COMPÉTENCES LINGUISTIQUES", 20, yPos)
  doc.line(20, yPos + 2, 190, yPos + 2)

  yPos += 8
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("Langue(s) maternelle(s):", 20, yPos)
  doc.setFont("helvetica", "bold")
  doc.text("ARABE", 80, yPos)
  yPos += 5
  doc.setFont("helvetica", "normal")
  doc.text("Autre(s) langue(s):", 20, yPos)
  doc.setFont("helvetica", "bold")
  doc.text("FRANÇAIS", 70, yPos)
  doc.text("ANGLAIS", 110, yPos)
  doc.text("ALLEMAND", 150, yPos)

  // Save the PDF
  doc.save("CV_Samar_Guizani.pdf")
}
