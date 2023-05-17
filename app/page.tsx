import MainMenu from '@/components/common/main-menu/main-menu.component';
import Image from 'next/image';

import Logo from 'public/images/logo.svg';

export default function Home() {
  return (
    <main className="grid h-screen content-center justify-items-center bg-light-purple sm:bg-purple">
      <div className="relative flex w-full max-w-xs flex-col items-center gap-y-20 bg-light-purple sm:max-w-lg sm:rounded-[40px] sm:border-3 sm:border-black sm:px-10 sm:py-16 sm:shadow-brand">
        <Image src={Logo} alt="" className="relative" />
        <MainMenu />
      </div>
    </main>
  );
}
