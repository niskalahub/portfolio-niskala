import { jsPDF } from 'jspdf'
import { profileDesc, experiences, education, expertiseItems, languages } from '@/data/portfolio'

export const generateAndDownloadCV = async () => {
    // A4 dimensions: 210 x 297 mm
    const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
    })

    const margin = 20
    const pageWidth = doc.internal.pageSize.getWidth()
    let currentY = margin

    // Helpers
    const drawLine = () => {
        doc.setLineWidth(0.3)
        doc.setDrawColor(200, 200, 200)
        doc.line(margin, currentY, pageWidth - margin, currentY)
        currentY += 6
    }

    const addSectionHeader = (title: string) => {
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(11)
        doc.setTextColor(50, 50, 50)
        doc.text(title.toUpperCase(), margin, currentY)
        currentY += 2
        drawLine()
    }

    const addText = (text: string, options: { fontSize?: number, fontStyle?: 'normal' | 'bold' | 'italic', align?: 'left' | 'center' | 'right', color?: number[] } = {}) => {
        const { fontSize = 10, fontStyle = 'normal', align = 'left', color = [0, 0, 0] } = options
        doc.setFont('helvetica', fontStyle)
        doc.setFontSize(fontSize)
        doc.setTextColor(color[0], color[1], color[2])

        const splitText = doc.splitTextToSize(text, pageWidth - margin * 2)
        const xPos = align === 'center' ? pageWidth / 2 : (align === 'right' ? pageWidth - margin : margin)

        doc.text(splitText, xPos, currentY, { align })
        currentY += splitText.length * (fontSize * 0.45)
    }

    // --- Header ---
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(22)
    doc.setTextColor(30, 30, 30)
    doc.text('AGUNG HERMAWAN', margin, currentY + 3)
    currentY += 8

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(100, 100, 100)
    doc.text('Purwakarta, ID | 0831-3509-7377 | emailkerja.agung@gmail.com | linkedin.com/in/herzmwnagung | github.com/herzxxvi', margin, currentY)

    // Adjust Y position after header
    currentY += 12

    // --- Summary ---
    addSectionHeader('Professional Summary')
    currentY += 2
    addText(profileDesc, { fontSize: 10, color: [40, 40, 40] })
    currentY += 8

    // --- Experience ---
    addSectionHeader('Work Experience')
    currentY += 2
    experiences.forEach((exp) => {
        // Role & Period
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(10)
        doc.setTextColor(30, 30, 30)
        doc.text(exp.role, margin, currentY)

        doc.setFont('helvetica', 'normal')
        doc.setFontSize(9)
        doc.setTextColor(100, 100, 100)
        doc.text(exp.period, pageWidth - margin, currentY, { align: 'right' })

        currentY += 5

        // Company
        doc.setFont('helvetica', 'italic')
        doc.setFontSize(10)
        doc.setTextColor(80, 80, 80)
        doc.text(exp.company, margin, currentY)
        currentY += 6

        // Bullets
        exp.description.forEach(bullet => {
            const splitBullet = doc.splitTextToSize(bullet, pageWidth - margin * 2 - 5)
            doc.setFont('helvetica', 'normal')
            doc.setFontSize(9)
            doc.setTextColor(50, 50, 50)

            // Bullet icon
            doc.text('•', margin + 1, currentY)
            doc.text(splitBullet, margin + 5, currentY)
            currentY += splitBullet.length * 4.5
        })

        currentY += 4
    })
    currentY += 4

    // --- Education ---
    addSectionHeader('Education')
    currentY += 2
    education.forEach(edu => {
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(10)
        doc.setTextColor(30, 30, 30)
        doc.text(edu.school, margin, currentY)

        doc.setFont('helvetica', 'normal')
        doc.setFontSize(9)
        doc.setTextColor(100, 100, 100)
        doc.text(edu.period, pageWidth - margin, currentY, { align: 'right' })

        currentY += 5

        if (edu.major) {
            doc.setFont('helvetica', 'italic')
            doc.setFontSize(9)
            doc.setTextColor(80, 80, 80)
            doc.text(edu.major, margin, currentY)
            currentY += 5
        }
        currentY += 2
    })
    currentY += 4

    // --- Skills & Languages ---
    addSectionHeader('Skills & Languages')
    currentY += 2

    // Flatten core domains
    const domains = expertiseItems.map(item => item.title).join(', ')
    // Flatten tech stacks
    const techStacks = Array.from(new Set(expertiseItems.flatMap(item => item.techStack))).join(', ')
    // Format languages
    const formattedLanguages = languages.map(lang => `${lang.name} (${lang.level.split(' / ')[0]})`).join(', ')

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.setTextColor(50, 50, 50)
    doc.text('Core Competencies:', margin, currentY)

    doc.setFont('helvetica', 'normal')
    const splitDomains = doc.splitTextToSize(domains, pageWidth - margin * 2 - 35)
    doc.text(splitDomains, margin + 35, currentY)
    currentY += splitDomains.length * 4.5 + 2

    doc.setFont('helvetica', 'bold')
    doc.text('Technologies:', margin, currentY)

    doc.setFont('helvetica', 'normal')
    const splitTech = doc.splitTextToSize(techStacks, pageWidth - margin * 2 - 25)
    doc.text(splitTech, margin + 25, currentY)
    currentY += splitTech.length * 4.5 + 2

    doc.setFont('helvetica', 'bold')
    doc.text('Languages:', margin, currentY)

    doc.setFont('helvetica', 'normal')
    const splitLangs = doc.splitTextToSize(formattedLanguages, pageWidth - margin * 2 - 22)
    doc.text(splitLangs, margin + 22, currentY)
    currentY += splitLangs.length * 4.5 + 12

    // --- Portfolio URL Footer ---
    doc.setFont('helvetica', 'italic')
    doc.setFontSize(9)
    doc.setTextColor(80, 80, 150)
    doc.text('Detailed portfolio & creative works: https://portfolio.niskalahub.com', pageWidth / 2, currentY, { align: 'center' })

    // Download the PDF
    doc.save('Agung_Hermawan_ATS_Resume.pdf')
}
