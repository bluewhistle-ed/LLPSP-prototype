import { SharedNavBar } from './SharedNavBar';

export function Navbar({ activeItem }: { activeItem: 'Dashboard' | 'PSPs' | 'Partners' | 'Global Lists' }) {
  const activePageMap = {
    'Dashboard': 'dashboard',
    'PSPs': 'psps',
    'Partners': 'partners',
    'Global Lists': 'global-lists',
  } as const;

  return (
    <div className="px-[32px] pt-[32px] w-full">
      <SharedNavBar activePage={activePageMap[activeItem] as 'dashboard' | 'psps' | 'partners' | 'global-lists'} />
    </div>
  );
}
