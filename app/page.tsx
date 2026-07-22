import TrainingPlan from "./plan-prototype";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg:bg-color-bg font-sans dark:bg-color-bg">
      <header></header>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <TrainingPlan />
      </main>
      <footer></footer>
    </div>
  );
}
