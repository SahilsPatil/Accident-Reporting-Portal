import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

export default function TopNav({ title }) {
    const navigate = useNavigate()
    const [showSearchBox, setshowSearchBox] = useState(false)
    const [showProfileOptions, setshowProfileOptions] = useState(false)
    const [showNotifications, setshowNotifications] = useState(false)
    const [searchText, setsearchText] = useState("")
    const { userAllData } = useAuth();

    console.log(userAllData);
    

    // console.log(userAllData.firstName);
    

    function handleSearchbar() {
        if (!showSearchBox) {
            setshowSearchBox(true);
        }
        else if (searchText.trim()) {
            navigate('/reports', {
                state: { message: searchText }
            });
            setshowSearchBox(true);
        }
        else {
            setshowSearchBox(false);
        }
    }

    function clearSearch() {
        setsearchText("")
        setshowSearchBox(true);
        navigate('/reports', {
            state: { message: "" }
        });

    }
    return (
        <div className="top">
            <div className="top_title">
                {/* {title != null ? title : "Hello, Admin !"} */}
                Hello, {userAllData!=null?userAllData.firstName:" User"} !
            </div>
            <div className="top_other">
                <div className="top_other_search" >
                    {
                        showSearchBox ? <div><input type="text" value={searchText} onChange={(e) => { setsearchText(e.target.value) }} name="location" id="location" placeholder='Search' /> <span onClick={clearSearch}>X</span></div> : <input type="text" name="location" id="location" hidden placeholder='Search' />
                    }
                    <img src="/src/assets/icon_search.svg" onClick={handleSearchbar} alt="" />
                </div>
                <div className="top_other_notification">
                    <img onClick={()=>{setshowNotifications(!showNotifications); setshowProfileOptions(false)}} src="/src/assets/icon_noti.svg" alt="" />
                    {showNotifications?<div className="top_other_profile_pop top_other_notification_pop">
                        <div className="top_other_profile_pop_items_item">
                            New Accident
                        </div>
                        <div className="top_other_profile_pop_items_item">
                            Issue Resolved
                        </div>
                        <div className="top_other_profile_pop_items_item">
                            Issue Sent to Police
                        </div>
                    </div>:true}
                </div>
                <div onClick={()=>{setshowProfileOptions(!showProfileOptions);setshowNotifications(false)}} className="top_other_profile">
                    <img src="/src/assets/icon_profile.svg" alt="" />
                    {showProfileOptions?<div className="top_other_profile_pop">
                        <div className="top_other_profile_pop_items_item">
                            Profile
                        </div>
                        <div className="top_other_profile_pop_items_item">
                            Settings
                        </div>
                        <div className="top_other_profile_pop_items_item">
                            Logout
                        </div>
                    </div>:true}
                </div>
            </div>
        </div>
    )
}
