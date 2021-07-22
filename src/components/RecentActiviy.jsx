import React from 'react'
import { CashIcon, ChevronRightIcon } from '@heroicons/react/solid'
export default function RecentActiviy({ transaction }) {
  return (
    <li key={transaction.id}>
      <a
        href={transaction.href}
        className="block px-4 py-4 bg-white hover:bg-gray-50"
      >
        <span className="flex items-center space-x-4">
          <span className="flex-1 flex space-x-2 truncate">
            <CashIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span className="flex flex-col text-gray-500 text-sm truncate">
              <span className="truncate">{transaction.name}</span>
              <span>
                <span className="text-gray-900 font-medium">
                  {transaction.amount}
                </span>{' '}
                {transaction.currency}
              </span>
              <time dateTime={transaction.datetime}>{transaction.date}</time>
            </span>
          </span>
          <ChevronRightIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </a>
    </li>
  )
}
