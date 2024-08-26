import CustomLink from './custom-link';
import packageJSON from '@/package.json';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 px-3 my-3 mx-0 w-full text-sm sm:flex-row sm:justify-between sm:items-center sm:px-4 sm:my-8 sm:mx-auto sm:max-w-3xl sm:h-5">
      <div className="flex flex-col gap-4 sm:flex-row">
        {/* Footer content */}
      </div>
      <div className="flex gap-2 justify-start items-center">
        {`version ${packageJSON.version}`}
      </div>
    </footer>
  );
}
