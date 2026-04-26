export default function Loading() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="border-b border-outline-variant px-5 py-4 sm:px-8 lg:px-12">
        <div className="ml-auto h-12 w-full max-w-md rounded-lg bg-surface-container-low md:block" />
      </div>

      <div className="px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px] space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <div className="h-10 w-64 rounded-lg bg-surface-container-low" />
              <div className="h-5 w-[32rem] max-w-full rounded-lg bg-surface-container-low" />
            </div>
            <div className="flex gap-3">
              <div className="h-12 w-56 rounded-lg bg-surface-container-low" />
              <div className="h-12 w-40 rounded-lg bg-surface-container-low" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              <div className="h-8 w-48 rounded-lg bg-surface-container-low" />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="h-64 rounded-lg bg-surface-container-low" />
                <div className="h-64 rounded-lg bg-surface-container-low" />
                <div className="h-64 rounded-lg bg-surface-container-low md:col-span-2" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-64 rounded-lg bg-surface-container-low" />
              <div className="h-56 rounded-lg bg-surface-container-low" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
