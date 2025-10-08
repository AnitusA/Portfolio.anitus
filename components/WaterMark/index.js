import React, { useEffect, useState } from 'react'

const consoleMyName = () => {
    console.log(`
  Designed and Developed By Anitus
  `)
  }

const WaterMark = () => {
    useEffect(consoleMyName, [])
    return <></>
}

export default React.memo(WaterMark)
