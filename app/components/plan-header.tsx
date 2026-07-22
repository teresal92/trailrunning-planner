// TODO: replace hard coded data with plan data
export default function PlanHeader() {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="font-mono text-text-secondary text-sm tracking-wide">
        Teresa Lew
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">Mammoth Trailfest 26K</h1>
        <div className="text-text-secondary">May – September 2026</div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col bg-surface-alt px-4 py-2 rounded-lg border-2 border-border-subtle gap-1">
          <span className="text-xs font-semibold text-text-secondary">
            PR Target
          </span>{" "}
          <span className="font-mono font-bold">sub 2:50</span>
        </div>
        <div className="flex flex-col bg-surface-alt px-4 py-2 rounded-lg border-2 border-border-subtle gap-1">
          <span className="text-xs font-semibold text-text-secondary">
            Race Day
          </span>
          <span className="font-mono font-bold">Sep 27, 2026</span>
        </div>
        <div className="flex flex-col bg-surface-alt px-4 py-2 rounded-lg border-2 border-border-subtle gap-1">
          <span className="text-xs font-semibold text-text-secondary">
            Weeks
          </span>
          <span className="font-mono font-bold">20</span>
        </div>
      </div>
    </div>
  );
}
