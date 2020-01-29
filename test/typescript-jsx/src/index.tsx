import React, { FC } from "react"
import { FormattedMessage } from "react-intl"
import Header from "components/Header"

export function MyPage(): FC {
  return (
    <>
      <Header>Title</Header>
      <button>
        <FormattedMessage id="press-button" />
      </button>
    </>
  )
}
