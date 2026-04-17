export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ayush K.C. — Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}
