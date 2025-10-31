'use client';

import Loading from '@/components/loading/loading';
import { PDFDocument, rgb, StandardFonts, } from 'pdf-lib';
import { useEffect, useState } from 'react';

export default function PDFPreview({ nome, dataInicio, dataFim }: { nome: string, dataInicio: string, dataFim: string }) {
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    useEffect(() => {
  async function generatePdf() {
    const existingPdfBytes = await fetch('/modelo.pdf').then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSizeName = 30;
    const fontSizeDescription = 15;
    const pageWidth = firstPage.getWidth();

    // 👉 Nome centralizado
    const nomeWidth = font.widthOfTextAtSize(nome, fontSizeName);
    firstPage.drawText(nome, {
      x: (pageWidth - nomeWidth) / 2,
      y: 330,
      size: fontSizeName,
      font,
      color: rgb(0, 0, 0),
    });

    // 👉 Texto com quebra de linha
    const descricao =
      `concluiu com êxito o treinamento de Gestão de Projetos em Engenharia ` +
      `realizado de ${dataInicio} a ${dataFim}, com carga horária total de 40 horas.`;

    // Função para quebrar linhas com limite de caracteres
    const wrapText = (text: string, maxCharsPerLine = 65): string[] => {
      const words = text.split(' ');
      const lines: string[] = [];
      let line = '';

      for (const word of words) {
        if ((line + word).length <= maxCharsPerLine) {
          line += word + ' ';
        } else {
          lines.push(line.trim());
          line = word + ' ';
        }
      }
      if (line) lines.push(line.trim());
      return lines;
    };

    const lines = wrapText(descricao);
    const startY = 300;
    const lineHeight = fontSizeDescription + 4;

    lines.forEach((line, idx) => {
      const lineWidth = font.widthOfTextAtSize(line, fontSizeDescription);
      firstPage.drawText(line, {
        x: (pageWidth - lineWidth) / 2,
        y: startY - idx * lineHeight,
        size: fontSizeDescription,
        font,
        color: rgb(0, 0, 0),
      });
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);
  }

  generatePdf();
}, [nome, dataInicio, dataFim]);


    return (
        <div className="w-auto h-[86dvh] border rounded shadow overflow-hidden">
            {pdfUrl ? (
                <iframe src={pdfUrl} width="100%" height="100%" />
            ) : (
                <Loading/>
            )}
        </div>
    );
}
