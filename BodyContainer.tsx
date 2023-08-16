import React, { useState } from 'react'
import style from "./bodyContainer.module.scss"
import {  Tabs, TabsProps } from 'antd';
import viewAgenda from '../assets/view_agenda.svg';
import candidate from '../assets/Frame 1000005832.svg';
import candidateSource from '../assets/Frame 1000009100.svg';
import purpose from '../assets/Frame 1000009353.svg'
import AssessmentContainer from './AssessmentContainer';
import addSvg from '../assets/add.svg'
import ModalContainer from './ModalContainer';
import screenShare from '../assets/mobile_screen_share.svg'


const BodyContainer = ({setIsMobileView,isMobileView}:{setIsMobileView:any,isMobileView:boolean}) => {
  
  const [isShowModal, setIsShowModal] = useState(false)  

  return (
    <div className={style['body-container']}>
      {isShowModal && (<ModalContainer isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>)}
        <div className={style['header']}>
            <div className={style['wrap-left-section']}>
            <div className={style['heading']}>Assessment</div>
            <div className={style['wrap-tabs']}>
            <div className={style['my-assessment-header']}>My Assessment</div>
            </div>
            </div>
            <div className={style['mobile-view']} onClick={()=> setIsMobileView(true)}><img src={screenShare} alt="" /></div>
        </div>

        <div className={style['mid-section']}>
            <div className={style['mid-section-divOne']}>
                <div className={style['assessment-overview']}>Assessments Overview</div>
                <div className={style['wrap-mid-section-one']}>
                  <div className={style['wrap-assess']} style={{paddingTop: '11px'}}>
                  <div className={style['total-assessment']}>Total Assessment</div>
                  <div className={style['wrap-agenda']}>
                    <div className={style['purple']}></div>
                    <img src={viewAgenda} alt='' style={{ position: 'absolute',marginLeft: '10px'}}/>
                    <div className={style['total-assessment-value']}>34</div>
                  </div>
                  </div>  
                  <div className={style['wrap-candidates']}>
                  <div className={style['total-assessment']}>Candidates</div>
                  <div className={style['wrap-agenda']}>
                    <div className={style['purple']}></div>
                    <img src={purpose} alt='' style={{ position: 'absolute'}}/>
                    <div style={{paddingLeft:'20px'}}> 
                      <div style={{display:'flex'}}> 
                      <div className={style['values']}>11,145</div>
                      <div className={style['increments']}>+89</div></div>
                    <div className={style['total-candidates']}>Total Candidates</div>
                    </div>
                    <div style={{padding:'0px 0px 0px 20px '}}>
                    <div className={style['vertical-line']}/>
                    </div>
                    <div style={{paddingLeft:'20px'}}> 
                      <div style={{display:'flex'}}> 
                      <div className={style['values']}>1,14</div>
                      <div className={style['increments']}>+89</div></div>
                    <div className={style['total-candidates']}>Who Attempted</div>
                    </div>
                 </div>
                  </div>
                  <div className={style['wrap-candidates-source']}>
                  <div className={style['total-assessment']}>Candidates Source</div>
                  <div className={style['wrap-agenda']}>
                    <div className={style['purple']}></div>
                    <img src={candidate} alt='' style={{ position: 'absolute'}}/>
                    <div style={{paddingLeft:'20px'}}> 
                      <div style={{display:'flex'}}> 
                      <div className={style['values']}>11,000</div>
                      <div className={style['increments']}>+89</div></div>
                    <div className={style['total-candidates']}>E-mail</div>
                    </div>
                    <div style={{padding:'0px 0px 0px 20px '}}>
                    <div className={style['vertical-line']}/>
                    </div>
                    <div style={{paddingLeft:'20px'}}> 
                      <div style={{display:'flex'}}> 
                      <div className={style['values']}>145</div>
                      <div className={style['increments']}>+89</div></div>
                    <div className={style['total-candidates']}>Social Share</div>
                    </div>
                    <div style={{padding:'0px 0px 0px 20px '}}>
                    <div className={style['vertical-line']}/>
                    </div>
                    <div style={{paddingLeft:'20px'}}> 
                      <div style={{display:'flex'}}> 
                      <div className={style['values']}>145</div>
                      <div className={style['increments']}>+89</div></div>
                    <div className={style['total-candidates']}>Unique Link</div>
                    </div>
                  </div>
                  </div>
                  <div className={style['wrap-purpose']}>
                  <div className={style['total-assessment']}>Total Purpose</div>
                  <div className={style['wrap-agenda']}>
                    <div className={style['purple']}></div>
                    <img src={candidateSource} alt='' style={{ position: 'absolute'}}/>
                    <div className={style['total-assessment-value']}>11</div>
                  </div>
                  </div> 
                </div>
            </div>
            <div className={style['mid-section-divTwo']}>
                <div className={style['my-assessment']}>My Assessment</div>
               <div className={style['assessment-container']}>
                <div className={style['add-assessment']}>
                  <div className={style['add-assess-main-section']}>
                    <div className={style['add-btn-background']} onClick={()=>setIsShowModal(true)}> 
                    <img src={addSvg} alt='' className={style['add-icon']}/>
                    </div>
                    <div className={style['new-assesment']}>New Assessment</div>
                  <div className={style['adding-desc']}>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</div>
                  </div>
                </div>
               <AssessmentContainer isMobileView={isMobileView}/>
               <AssessmentContainer isMobileView={isMobileView}/>
               </div>
                
            </div>

        </div>
    </div>
  )
}

export default BodyContainer