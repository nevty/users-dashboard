import { AvatarIcon } from '@shared/ui';

export const UserAuth = () => {
  return (
    <div className="sm:flex hidden border border-[#222B44] flex-col justify-center px-3.5 py-2 rounded-md border-solid">
      <div className="flex justify-between gap-3 items-start">
        <div className="w-8 max-w-full">
          <AvatarIcon />
        </div>
        <div className="items-stretch self-stretch flex flex-col">
          <div className="text-slate-500 text-xs whitespace-nowrap">
            Вы авторизованы
          </div>
          <div className="text-white text-sm font-medium whitespace-nowrap">
            Администратор
          </div>
        </div>
      </div>
    </div>
  );
};
