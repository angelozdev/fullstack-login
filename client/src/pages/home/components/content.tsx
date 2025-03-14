import CardInfo from './card-info'
import { Button } from '~/components'
import { css } from '~/styled-system/css'
import { IUser } from '~/types/user'

interface IContentProps {
  showBalance: boolean
  editMode: boolean
  user: IUser
  optimisticFields: {
    phone: string
    address: string
    company: string
  }
  isPending: boolean
}

function Content({
  editMode,
  isPending,
  optimisticFields,
  showBalance,
  user
}: IContentProps) {
  const infoList = [
    {
      defaultValue: user.balance,
      editable: false,
      label: 'Balance',
      name: 'balance',
      displayValue: showBalance ? user.balance : '********'
    },
    {
      defaultValue: user.phone,
      editable: true,
      label: 'Phone',
      name: 'phone',
      displayValue: optimisticFields.phone,
      disabled: optimisticFields.phone !== user.phone
    },
    {
      defaultValue: user.address,
      editable: true,
      label: 'Address',
      name: 'address',
      displayValue: optimisticFields.address,
      disabled: optimisticFields.address !== user.address
    },
    {
      defaultValue: user.company,
      editable: true,
      label: 'Company',
      name: 'company',
      displayValue: optimisticFields.company,
      disabled: optimisticFields.company !== user.company
    },
    {
      editable: false,
      label: 'Age',
      displayValue: user.age,
      defaultValue: user.age,
      name: 'age'
    }
  ]

  return (
    <div className={css({ p: 4 })}>
      <ul
        className={css({
          display: 'flex',
          gap: 4,
          flexWrap: 'wrap',
          flexDirection: 'column'
        })}
      >
        {infoList.map((info) => (
          <li key={info.name} className={css({ flex: 1 })}>
            <CardInfo {...info} editMode={editMode} />
          </li>
        ))}
      </ul>

      {editMode && (
        <div className={css({ mt: 4 })}>
          <Button type="submit" variant="primary" disabled={isPending}>
            {isPending ? 'Saving...' : 'Save'}
          </Button>
        </div>
      )}
    </div>
  )
}

export default Content
