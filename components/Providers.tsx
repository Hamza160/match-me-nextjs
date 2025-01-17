import { NextUIProvider } from '@nextui-org/react'
import React, { PropsWithChildren } from 'react'

function Providers({children}:PropsWithChildren) {
  return (
    <NextUIProvider>{children}</NextUIProvider>
  )
}

export default Providers;