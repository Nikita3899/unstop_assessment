import React from 'react'
import style from './assessment.module.scss'
import breifCase from '../assets/Frame 1000008703.svg'
import menuDots from '../assets/Group 6.svg'
import calender from '../assets/calendar_today.svg'
import schedule from '../assets/schedule.svg'
import link from '../assets/link.svg'

const AssessmentContainer = ({isMobileView}:{isMobileView:boolean}) => {

  return (
    <div className={ isMobileView ? style['wrap-assessments-mobile'] : style['wrap-assessments']}>
        <div className={style['wrap-section-one']}>
        <div>
        <img src={breifCase} alt=''/>
        </div>
        <div>
        <img src={menuDots} alt="" />
        </div>
        </div>
        <div className={style['math-assessment']}>Math Assessment</div>
        <div className={style['wrap-calender']}>
        <div className={style['job']}>Job</div>
        <img src={isMobileView ? schedule : calender} alt='' style={{paddingLeft:'5px'}}/>
        <div className={style['date']}>20 Apr 2023</div>
        </div>
        <div className={style['dotted-line']}/>
        <div className={style['durations']}>
        <div style={{display:'flex'}}>
        <div style={{paddingRight:'16px'}}>
        <div className={style['duration-value']}>00</div>
        <div className={style['duration-text']}>Duration</div>
        </div>
        <div> 
        <div className={style['duration-value']}>00</div>
        <div className={style['duration-text']}>Questions</div>
        </div>
        </div>
        <div style={{display:'flex'}}>
            <div className={style['wrap-share']}> <img src={link} alt="" />    
        <div className={style['share']}>Share</div></div>
       
        <div className={style['people-added']}>LP</div>
        </div>
        </div>
       

        
    </div>
  )
}

export default AssessmentContainer