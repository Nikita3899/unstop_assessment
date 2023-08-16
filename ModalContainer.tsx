import React from 'react'
import { Drawer } from 'antd'
import style from './modalContainer.module.scss';
import downArrow from '../assets/keyboard_arrow_down.svg'
import close from '../assets/close.svg'
import cut from '../assets/cut.svg'
import cutRed from '../assets/cut-red.svg'

const ModalContainer = (
    {isShowModal,
    setIsShowModal,
    isMobileView
    }:
    {isShowModal?:boolean,
    setIsShowModal?:any
    isMobileView?:boolean,
  }
    ) => { 
  return (
    <div className={style['drawer-container']}>
        <Drawer
        title = {isMobileView ? 'Sub-Section Details':'Create New Assessment'}
        placement='bottom'
        closable={false}
        contentWrapperStyle	={{boxShadow:'unset',
        width: isMobileView ?'28vw':'42vw',
        position: 'absolute',
        left:isMobileView ? '37%':'30%',
        top:isMobileView ? '':'16%',
        display: 'flex',
        height:'80vh',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '8px',
        border: '1px solid #DADCE0',
        background:'#FFF'
    }}
        open={isShowModal}
        className={style['custom-drawer']}
        key='bottom'
      >
        <div className={style['close-modal']}>
        <img src={isMobileView ? cutRed : cut} alt='' onClick={()=>setIsShowModal(false)} className={isMobileView ? style['red-cut'] : ""}/>
        </div>
        <div>
        <div className={style['new-assess']}>Name of assessment</div>
        <div className={style['input-box']}>Type Here</div>
        <div style={{padding:'20px 0px'}}>
        <div className={style['new-assess']}>Purpose of the test is</div>
        <div className={style['input-box']}>Select
        <div style={{display:'flex'}}><img src={downArrow} alt=''/></div>
        </div>
        </div>
        <div className={style['new-assess']}>Description</div>
        <div className={style['input-box']}>Select
        <div style={{display:'flex'}}><img src={downArrow} alt=''/></div>
        </div>
        <div style={{padding:'20px 0px'}}>
        <div className={style['new-assess']}>Skills</div>
        <div className={style['input-box']} style={{
            borderRadius:'8px 8px 0px 0px', 
            }}>
            <div>
            <div style={{display:'flex'}}>
            <div className={style['skills']}>UI/UX and Design
            <img src={close} alt="" className={style['cancel-icon']}/>
            </div>
            <div className={style['skills']}>No of Question
            <img src={close} alt="" className={style['cancel-icon']}/>
            </div>
            <div className={style['skills']}>Web Development
            <img src={close} alt="" className={style['cancel-icon']}/>
            </div>
            </div>
            <div>
            <div> 
            <div style={{display:'flex'}}>
            <div className={style['skills']}>UI/UX and Design
            <img src={close} alt="" className={style['cancel-icon']}/></div>
            <div className={style['skills']}>No of Question
            <img src={close} alt="" className={style['cancel-icon']}/></div>
            </div>
            </div>
            </div>
            </div>  
           
        </div>
        <div className={style['input-box']} 
            style={{
            borderTop:'unset',
            borderRadius:'0px 0px 8px 8px',
            marginTop:'unset'
            }}>Type Here</div>       
        </div>
        <div className={style['new-assess']}>Duration of assessment</div>
        <div className={style['input-box-time']}>HH:MM:SS</div>
        </div>
        <div className={style['save-footer']}>
            <div className={style['save-text']}>Save</div>
        </div>
      </Drawer>
    </div>
  )
}

export default ModalContainer