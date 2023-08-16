import React, { useState } from 'react'
import styles from './rootContainer.module.scss'
import SideBarContainer from './SideBarContainer'
import BodyContainer from './BodyContainer'
import MobileView from './MobileView'

const RootContainer = () => {
  const [isMobileView, setIsMobileView] = useState(false)
  return (
    <> 
    {isMobileView ? (<><MobileView isMobileView={isMobileView} setIsMobileView={setIsMobileView}/></>):(
       <div className={styles['root-main-container']}> 
      <div className={styles['containers-layout']}>
      <SideBarContainer/>
      <BodyContainer setIsMobileView={setIsMobileView} isMobileView={isMobileView}/>
    </div>     
  </div>)}
 
  </>
  )
}

export default RootContainer