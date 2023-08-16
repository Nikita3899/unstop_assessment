import React from 'react'
import style from './sideMenuBarDrawer.module.scss'
import { Drawer } from 'antd'
import  dashboard from '../assets/dashboard.svg'
import roundStatus from '../assets/admin_meds.svg'
import quiz from '../assets/quiz.svg'
import note from '../assets/note_alt.svg'


const SideMenuDrawer = ({isSideMenuOpen,setIsSideMenuOpen}:{isSideMenuOpen:boolean,setIsSideMenuOpen:any}) => {
  
      const onClose = () => {
        setIsSideMenuOpen(false)
      };
    
  return (
    <div className={style['main-container']}>
       <Drawer
        title="Menu"
        placement={'left'}
        closable={true}
        contentWrapperStyle	={{
        boxShadow:'unset',
        position:'absolute',
        left:'37%',
        width: '25%',
        display: 'flex',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '8px',
        border: 'unset',
        background:'unset'
    }}
        className={isSideMenuOpen ? style["custom-drawer"] : style['custom-drawer-closed']}
        onClose={onClose}
        open={isSideMenuOpen}
       
      >
        <div className={style['main-container']}>
            <div>
                <div className={style['menu-title']}>
                <img src={dashboard} alt="" />
                    <p style={{paddingLeft:'8px'}}>Dashboard</p>
                  
                </div>
                <div className={style['menu-title-assessment']}>
                <img src={note} alt="" />
                   <div style={{paddingLeft:'8px'}}> Assessment</div>
                </div>
                <div className={style['menu-title']}>
                <img src={quiz} alt="" />
                    <p style={{paddingLeft:'8px'}}> My Library</p>
                   
                </div>
                <div style={{width:'100%', borderBottom:'1px dashed #BACBD5'}}/>
                <div className={style['menu-title']} style={{width:'100%', justifyContent:'space-between'}}>
                    <div style={{display:'flex',alignItems:'center'}}><img src={roundStatus} alt=""  />
                    <div style={{paddingLeft:'8px', display:'inline-block'}}>Round Status</div></div>
                
                    <div className={style['admin']}>Admin</div>
                 
                </div>
            </div>
        </div>
      </Drawer>
    </div>
  )
}

export default SideMenuDrawer