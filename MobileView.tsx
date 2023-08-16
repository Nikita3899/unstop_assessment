import React, { useState } from 'react'
import style from './mobileViewContainer.module.scss'
import time from '../assets/9_41.svg'
import battery from '../assets/Frame 1000007851.svg'
import network from '../assets/Vector.svg'
import wifi from '../assets/Vector (1).svg'
import segment from '../assets/segment.svg'
import laptop from '../assets/laptop_mac.svg'
import barChart from '../assets/bar_chart.svg'
import filterList from '../assets/filter_list_alt.svg'
import addSvg from '../assets/add.svg'
import search from '../assets/search.svg'
import add from '../assets/add_white.svg'
import AssessmentContainer from './AssessmentContainer'
import ModalContainer from './ModalContainer'
import SideMenuDrawer from './SideMenuDrawer'

const MobileView = ({isMobileView,setIsMobileView}:{setIsMobileView:any,isMobileView:boolean}) => {
    const [isShowModal, setIsShowModal] = useState(false)  
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  return (
    <div className={style['mobile-view-container']}>
          <div className={style['create-new-assessment']}>{isShowModal && (<ModalContainer isShowModal={isShowModal} setIsShowModal={setIsShowModal} isMobileView={isMobileView}/>)}</div>
          <div className={style['side-menu-bar']}>{isSideMenuOpen && (<SideMenuDrawer isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen}/>)}</div>
        <div className={style['mobile-body']}>
          <div className={style['wrap-top-section']} >
        <div className={style['mobile-header']}>
            <div className={style['time']}>
                <img src={time} alt="" />
            </div>
            <div style={{display:'flex'}}>
                <div> <img src={network} alt="" /></div>
                <div style={{padding:'0px 8px'}}>  <img src={wifi} alt="" /></div>
                <div>  <img src={battery} alt="" /></div>
            </div>
        </div>
        <div className={style['dashboard-header']}>
            <div className={style['header-wrap']}>
            <div className={style['segment-background']}><img src={segment} alt="" onClick={()=>setIsSideMenuOpen(true)} /></div>
            <div className={style['assess']}>Assessment</div>
            </div>
            <div style={{paddingTop:'3px'}}>
                <img src={laptop} alt='' onClick={()=>{setIsMobileView(false)}}/>
            </div>
        </div>
        <div className={style['tabs-container']}>
             <div className={style['my-assessments-header']}>My Assessments</div>
       
        <div className={style['unstop-assessment']}>
            Unstop Assessments
        </div>
        </div>
        </div>
        <div className={style['body-container']}>
            <div className={style['main-wrap']}>
            <div className={style['my-assessment']}>My Assessment</div>
            <div className={style['wrap-icon']}>
                <div className={style['icon-spacing']}><img src={search} alt=''/></div>
                <div className={style['icon-spacing']}><img src={filterList} alt=''/></div>
                <div className={style['icon-spacing']}><img src={barChart} alt=''/></div>
            </div>
            </div>
            <div>
            <div className={style['assessment-container-mobile']}>
                <div className={style['add-assessment-mobile']}>
                  <div className={style['add-assess-main-section-mobile']}>
                    <div className={style['add-btn-background']} onClick={()=>setIsShowModal(true)}> 
                    <img src={addSvg} alt='' className={style['add-icon']}/>
                    </div>
                    <div className={style['new-assesment']}>New Assessment</div>
                  <div className={style['adding-desc']}>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</div>
                  </div>
                </div>
                <div className={style['fixed-add-button']}><img src={add} alt='' onClick={()=>setIsShowModal(true)}/></div>
               <AssessmentContainer isMobileView={isMobileView}/>
               <AssessmentContainer isMobileView={isMobileView}/>
               <AssessmentContainer isMobileView={isMobileView}/>
               <AssessmentContainer isMobileView={isMobileView}/>
               <AssessmentContainer isMobileView={isMobileView}/>
               <AssessmentContainer isMobileView={isMobileView}/>
               </div>
            </div>
          
        </div>

     
        </div>
    </div>
  )
}

export default MobileView