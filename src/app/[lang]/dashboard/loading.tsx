export default function Loading() {
  return (
    <div className="min-h-screen bg-surface px-8 py-20">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="h-6 w-48 rounded-full bg-surface-container" />
        <div className="h-16 max-w-3xl rounded-md bg-surface-container" />
        <div className="h-8 max-w-2xl rounded-md bg-surface-container-low" />
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="h-[360px] rounded-lg bg-surface-container-low lg:col-span-7" />
          <div className="h-[360px] rounded-lg bg-surface-container-low lg:col-span-5" />
        </div>
      </div>
    </div>
  );
}
