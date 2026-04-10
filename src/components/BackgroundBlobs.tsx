export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Blob 1 - top right */}
      <div
        className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px] dark:opacity-10"
        style={{
          background: "var(--color-primary)",
          animation: "blob-float-1 20s ease-in-out infinite",
        }}
      />
      {/* Blob 2 - bottom left */}
      <div
        className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full opacity-15 blur-[140px] dark:opacity-8"
        style={{
          background: "var(--color-chart-2)",
          animation: "blob-float-2 25s ease-in-out infinite",
        }}
      />
      {/* Blob 3 - center */}
      <div
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px] dark:opacity-5"
        style={{
          background: "var(--color-chart-5)",
          animation: "blob-float-3 18s ease-in-out infinite",
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
