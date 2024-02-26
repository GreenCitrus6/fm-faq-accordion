import "./globals.css";
import workSans from "next/font/local";

const work_Sans = workSans({ src: './../../public/static/fonts/WorkSans-VariableFont_wght.ttf' });

export const metadata = {
  title: "FM FAQ Accordion",
  description: "FAQ Accordion menu challenge by Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work_Sans.className}>
        {children} 
      </body>
    </html>
  );
}
