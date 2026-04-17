export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      
      <div className="relative w-full max-w-6xl text-center">

        <div className="mx-auto mb-6 h-48 w-48 lg:h-56 lg:w-56 rounded-full overflow-hidden border-4 border-primary/20">
          <img src="/images/profile.png" className="h-full w-full object-cover" />
        </div>

        <p className="text-lg text-primary uppercase tracking-widest">
          Hello, I'm
        </p>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold">
          Ayush K.C.
        </h1>

        <p className="mt-4 text-xl sm:text-2xl text-muted-foreground">
          Software Engineer | AI & Full-Stack
        </p>

      </div>
    </section>
  );
}