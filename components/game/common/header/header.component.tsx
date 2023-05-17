'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Logo from 'public/images/logo.svg';
import PillButton from '../pill-button/pill-button.component';

export default function Header() {
  const router = useRouter();

  const menuOnClickHandler = () => {
    router.push('');
  };

  const restartOnClickHandler = () => {
    console.log('restart');
  };
  return (
    <header className="flex items-center justify-between">
      <PillButton onClickFunc={() => menuOnClickHandler()}>Menu</PillButton>
      <Image src={Logo} alt="Logo" />
      <PillButton onClickFunc={() => restartOnClickHandler()}>
        Restart
      </PillButton>
    </header>
  );
}
