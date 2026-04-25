export default function Loading() {
  return (
    <div className="flex min-h-screen bg-surface">
      <div className="h-screen w-64 border-r border-outline-variant bg-surface-container-low" />
      <div className="flex flex-1">
        <div className="h-screen w-80 border-r border-outline-variant bg-surface-container-lowest" />
        <div className="h-screen flex-1 bg-surface-container" />
        <div className="h-screen w-[480px] border-l border-outline-variant bg-surface-container-lowest" />
      </div>
    </div>
  );
}
