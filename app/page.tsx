export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-slate-100 font-sans">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-emerald-800">
          David Recuero
        </h1>
        
        <p className="text-xl text-slate-800">
          Software Developer
        </p>

        <p className="text-slate-900 text-base leading-relaxed">
          6 Years of experience in software development, specializing in web and mobile applications.
        </p>

      </div>
    </main>
  );
}