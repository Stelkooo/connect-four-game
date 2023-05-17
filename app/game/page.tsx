import Header from '@/components/game/common/header/header.component';

export default function Page() {
  return (
    <div className="h-screen bg-light-purple">
      <div className="mx-auto grid max-w-[335px] gap-y-12 pt-4">
        <Header />
        <main>Main</main>
      </div>
    </div>
  );
}
