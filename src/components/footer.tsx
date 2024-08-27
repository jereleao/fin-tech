import packageJSON from '@/package.json';
import { MainNav } from '@/components/main-nav';

export default function Footer() {
  return (
    <footer className="sticky botton-0 flex justify-center border-t">
      <div className="w-full h-16 max-w-3xl px-4 sm:px-6">
        <MainNav />
      </div>
    </footer>
  );
}
