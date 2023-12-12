import { User } from '@entities/user';
import { EditIcon, SortDirection, TableColumnI, TrashIcon } from '@shared/ui';

export const createUserColumns = (
  tokenSort: (direction: SortDirection) => void,
): TableColumnI<User>[] => [
  {
    columnId: 'email',
    label: 'Email',
    renderRow: (item) => <div>{item.email}</div>,
  },
  {
    columnId: 'name',
    label: 'Имя',
    renderRow: (item) => <div className="cursor-pointer">{item.name}</div>,
  },
  {
    columnId: 'role',
    label: 'Роль',
    renderRow: (item) => <div>{item.role}</div>,
  },
  {
    columnId: 'subscription',
    label: 'Подписка',
    renderRow: (item) => <div>{item.subscription.plan.type}</div>,
  },
  {
    columnId: 'token',
    label: 'Токен',
    onSort: ({ sortDirection }) => tokenSort(sortDirection),
    renderRow: (item) => <div>{item.subscription.tokens} TKN</div>,
  },
  {
    columnId: 'action',
    label: 'Действия',
    renderRow: () => (
      <div className="flex justify-center gap-2">
        <div className="cursor-pointer">
          <EditIcon />
        </div>
        <div className="cursor-pointer">
          <TrashIcon />
        </div>
      </div>
    ),
  },
];
