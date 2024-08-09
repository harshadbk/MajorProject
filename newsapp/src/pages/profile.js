import React, { useState, useEffect } from 'react';
import './profile.css';
import ProfileImg from '../components/Assets/myprof.jpeg';

const Profile = () => {
    const [data, setData] = useState(null);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [info, setInfo] = useState({
        email:localStorage.getItem('user-name'),
        address: "",
        phone: "",
        area: "",
        farm_type: "",
        soil_type: "",
        crop_grown: "",
        fertilizers: "",
    });

    const handleSaveClick = async () => {
        console.log(info);
        try{
           const response = await fetch('http://127.0.0.1:5000/farmerd',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(info),
           });
            const data = await response.json();
            data.success ? alert("Profile Added Successfully !!!") : alert("Profile Addition Failed");
        }
        catch(error){
            console.error("Error adding Profile:", error);
            alert("An error occurred while adding the user");
        }
    };


    const [minfo,setminfo]=useState({

    });

    const [winfo,setwinfo]=useState({

    });

    const [sinfo,setsinfo]=useState({

    });

    const role = localStorage.getItem('role');

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/peruser', {
                headers: {
                    'auth-token': localStorage.getItem('auth-token')
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCompleteProfileClick = () => {
        setShowAdditionalInfo(true);
    };

    const changeHandler = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    const renderAdditionalInfo = () => {
        if (role === 'Farmer') {
            return (
                <div className="additional-info">
                    <h2>Complete Your Profile</h2>
                    <div className="profile-row">
                        <label>
                            Your Address With Village:
                            <input type="text" name="address" value={info.address} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Phone No:
                            <input type="text" name="phone" value={info.phone} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Total Land Area in Acres :
                            <input type="text" name="area" value={info.area} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Farm Type (Ex Grapes And Onions):
                            <input type="text" name="farm_type" value={info.farm_type} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Soil Type Of Your Farm:
                            <input type="text" name="soil_type" value={info.soil_type} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Currently Crop Grown in Your Farm:
                            <input type="text" name="crop_grown" value={info.crop_grown} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Fertilizers Usage:
                            <input type="text" name="fertilizers" value={info.fertilizers} onChange={changeHandler} />
                        </label>
                    </div>
                    <button onClick={handleSaveClick}>Save</button>
                </div>
            );
        } else if (role === 'Merchant') {
            return (
                <div className="additional-info">
                    <h2>Complete Your Profile</h2>
                    <div className="profile-row">
                        <label>
                            Your Complete Address:
                            <input type="text" name="address" value={info.address} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Phone No:
                            <input type="text" name="phone" value={info.phone} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Business Type (e.g., Wholesaler, Retailer, Distributor):
                            <input type="text" name="business_type" value={info.business_type} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Geographical Service Area
                            <input type="text" name="business_type" value={info.business_type} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Payment Methods Accepted(e.g., cash, card,credit):
                            <input type="text" name="goods_sold" value={info.goods_sold} onChange={changeHandler} />
                        </label>
                        <label>
                            Goods Sold:
                            <input type="text" name="goods_sold" value={info.goods_sold} onChange={changeHandler} />
                        </label>
                    </div>
                    <button onClick={handleSaveClick}>Save</button>
                </div>
            );
        }
        else if (role === "Worker") {
            return (
                <div className="additional-info">
                    <h2>Complete Your Profile</h2>
                    <div className="profile-row">
                        <label>
                            Your Address:
                            <input type="text" name="address" value={info.address} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Phone No:
                            <input type="text" name="phone" value={info.phone} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Date Of Birth:
                            <input type="text" name="business_type" value={info.business_type} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Working Time (eg.,11 to 6)
                            <input type="text" name="business_type" value={info.business_type} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Skills:(e.g,crop planting, harvesting, equipment operation).
                            <input type="text" name="business_type" value={info.business_type} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Expected Hourly Rate/Salary
                            <input type="text" name="business_type" value={info.business_type} onChange={changeHandler} />
                        </label>
                    </div>
                    <button onClick={handleSaveClick}>Save</button>
                </div>
            );
        }
        else if (role === "Shopkeeper") {
            return (
                <div className="additional-info">
                    <h2>Complete Your Profile</h2>
                    <div className="profile-row">
                        <label>
                            Owner Address:
                            <input type="text" name="address" value={info.address} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Shop Address:
                            <input type="text" name="address" value={info.address} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Phone No:
                            <input type="text" name="phone" value={info.phone} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Shop Name:
                            <input type="text" name="business_type" value={info.business_type} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Shop Type (Fertilizers and Pesticides):
                            <input type="text" name="goods_sold" value={info.goods_sold} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Operating Hours:
                            <input type="text" name="goods_sold" value={info.goods_sold} onChange={changeHandler} />
                        </label>
                        <br />
                        <label>
                            Payment Methods Accepted (e.g., cash, card, mobile payments):
                            <input type="text" name="goods_sold" value={info.goods_sold} onChange={changeHandler} />
                        </label>
                    </div>
                    <button onClick={handleSaveClick}>Save</button>
                </div>
            );
        }
    };

    return (
        <div className='profile'>
            <div className="profile-header">
                <h1>My Profile</h1>
                <div className="profile-pic">
                    <img src={ProfileImg} alt="Profile" />
                </div>
                <div className="profile-row">
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Password: {data.password}</p>
                    <p>Role: {data.role}</p>
                    {localStorage.setItem('role', data.role)}
                </div>
            </div>
            <br />
            { role !== 'Admin' && role !== 'Deliveryboy' && (
            <div className="nav2-detailsbtn">
                <button className='nav2-profile' onClick={handleCompleteProfileClick}>
                    Complete Your Profile
                </button>
            </div>
        )}
            {showAdditionalInfo && renderAdditionalInfo()}
        </div>
    );
}

export default Profile;
