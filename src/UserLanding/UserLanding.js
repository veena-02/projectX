import React from 'react';
import UserNavbar from '../UserLandingNavbar/UserLandingNavbar';
import QuestionAnswerOutlined from '/home/veena/Develop/projectx/node_modules/@material-ui/icons/QuestionAnswerOutlined'
import Person from '/home/veena/Develop/projectx/node_modules/@material-ui/icons/Person'
import './UserLanding.css'
const UserLanding=()=>{
    return(
        <div>
            <UserNavbar />
            <div style={{display:'flex'}}>
                <div className='__leftsidebar' style={{display:'flex',flexDirection:'column' ,flex:1}} >
                    <div className="__adds"></div>
                </div>
                <div className='__body' style={{flex:3}} >
                    <div style={{width:'80%',margin:'0 auto',backgroundColor:'whitesmoke',height:100,marginTop:25,display:'flex'}}>
                        <Person className='__person' style={{fontSize:40}} />
                        <textarea rows="5" cols="50" name="comment" form="usrform" style={{margin:10}}>
                                Your Message Here...
                        </textarea>
                        <div style={{display:'flex',flexDirection:'column'}}>    
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <button type='submit' style={{marginTop:10}}>Send</button>
                        </div>    
                    </div>
                    <div style={{width:'80%',margin:'0 auto',backgroundColor:'whitesmoke',height:300,marginTop:50}}></div>
                    <div style={{width:'80%',margin:'0 auto',backgroundColor:'whitesmoke',height:300,marginTop:25}}></div>
                </div>
                <div className='__rightsidebar' style={{flex:1}} >
                    <div className="__adds">
                        <div className='__sideoptions'>
                            <h3>Topics</h3>
                            <ul>
                                <li>Academics</li>
                                <li>Fests</li>
                                <li>Hostel</li>
                                <li>Placements</li>
                            </ul>
                            <div className='footer' style={{width:'50%',margin:'0 auto'}}><QuestionAnswerOutlined/> Message </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default UserLanding;