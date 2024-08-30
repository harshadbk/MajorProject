import React, { useState, useEffect } from 'react';
import './profile.css';
import ProfileImg from '../components/Assets/myprof.jpeg';

const Profile = () => {

    const role = localStorage.getItem('role');

    const [data, setData] = useState(null);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

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

    // for farmers profile information

    const [profile, setprofile] = useState(null);
    const [info, setInfo] = useState({
        email: localStorage.getItem('user-name'),
        address: "",
        phone: 0,
        area: "",
        farm_type: "",
        soil_type: "",
        crop_grown: "",
        fertilizers: "",
    });

    const handleSaveClick = async () => {
        console.log(info);
        try {
            const response = await fetch('http://127.0.0.1:5000/farmerd', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info),
            });
            const data = await response.json();
            data.success ? alert("Profile Added Successfully !!!") : alert("Profile Addition Failed");
            localStorage.setItem('address', info.address);
        }
        catch (error) {
            console.error("Error adding Profile:", error);
        }
    };

    const changeHandler = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const fetchFarmer = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/perfarmer', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: localStorage.getItem('user-name') })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setprofile(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchFarmer();
    }, []);

    // for shopkeeper profile information

    const [shProfile, setShProfile] = useState(null);
    const [shinfo, setshinfo] = useState({
        email: localStorage.getItem('user-name'),
        ownaddress: "",
        shaddress: "",
        phoneno: 0,
        shname: "",
        shtype: "",
        ophours: "",
        payment: ""
    })

    const handleShSaveClick = async () => {
        console.log(shinfo);
        try {
            const response = await fetch('http://127.0.0.1:5000/shopkeeperd', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(shinfo),
            });
            const data = await response.json();
            data.success ? alert("Profile Added Successfully !!!") : alert("Profile Addition Failed");
            localStorage.setItem('address', shinfo.shaddress);
        }
        catch (error) {
            console.error("Error adding Profile:", error);
            alert("An error occurred while adding the user");
        }
    };

    const shopChangeHandler = (e) => {
        setshinfo({ ...shinfo, [e.target.name]: e.target.value });
    };

    const fetShop = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/pershop', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: localStorage.getItem('user-name') })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setShProfile(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetShop();
    }, []);

    const handleCompleteProfileClick = () => {
        setShowAdditionalInfo(true);
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
                    <button onClick={() => {
                        handleSaveClick();
                        window.location.replace('/profile');
                    }}>
                        Save
                    </button>

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
                            <input type="text" name="ownaddress" value={shinfo.ownaddress} onChange={shopChangeHandler} />
                        </label>
                        <br />
                        <label>
                            Shop Address:
                            <input type="text" name="shaddress" value={shinfo.shaddress} onChange={shopChangeHandler} />
                        </label>
                        <br />
                        <label>
                            Phone No:
                            <input type="text" name="phoneno" value={shinfo.phoneno} onChange={shopChangeHandler} />
                        </label>
                        <br />
                        <label>
                            Shop Name:
                            <input type="text" name="shname" value={shinfo.shname} onChange={shopChangeHandler} />
                        </label>
                        <br />
                        <label>
                            Shop Type (Fertilizers and Pesticides):
                            <input type="text" name="shtype" value={shinfo.shtype} onChange={shopChangeHandler} />
                        </label>
                        <br />
                        <label>
                            Operating Hours(from 10 AM to 8 PM):
                            <input type="text" name="ophours" value={shinfo.ophours} onChange={shopChangeHandler} />
                        </label>
                        <br />
                        <label>
                            Payment Methods Accepted (e.g., cash, card, mobile payments):
                            <input type="text" name="payment" value={shinfo.payment} onChange={shopChangeHandler} />
                        </label>
                    </div>
                    <button onClick={() => {
                        handleShSaveClick();
                        window.location.replace('/profile');
                    }}>
                        Save
                    </button>
                </div>
            );
        }
    };

    return (
        <>
        <div className='profile'>
            <div className="profile-header">
                <h1>My Profile</h1>
                <div className="profile-pic">
                    <img src={ProfileImg} alt="Profile" />
                </div>
                <div className="profile-table">
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>{data.name}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{data.email}</td>
                            </tr>
                            <tr>
                                <td>Password:</td>
                                <td>{data.password}</td>
                            </tr>
                            <tr>
                                <td>Role:</td>
                                <td>{data.role}</td>
                            </tr>
                        </tbody>
                        {localStorage.setItem('role', data.role)}
                    </table>
                </div>

            </div>
            <br />
            {profile || shProfile ? (
                role !== 'Admin' && role !== 'Deliveryboy' && (
                    <div className="nav2-detailsbtn">
                        <button className='nav2-profile'>
                            Your Profile
                        </button>
                    </div>
                )
            ) : (
                role !== 'Admin' && role !== 'Deliveryboy' && (
                    <>
                        <div className="nav2-detailsbtn">
                            <button className='nav2-profile' onClick={handleCompleteProfileClick}>
                                Complete Your Profile
                            </button>
                        </div>
                        {showAdditionalInfo && renderAdditionalInfo()}
                    </>
                )
            )
            }
            <div className="profile-add">
                {profile && (
                    <table>
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <td>{profile.email}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>{profile.address}</td>
                            </tr>
                            <tr>
                                <th>Phone No</th>
                                <td>{profile.phone}</td>
                            </tr>
                            <tr>
                                <th>Area</th>
                                <td>{profile.area}</td>
                            </tr>
                            <tr>
                                <th>Farm Type</th>
                                <td>{profile.farm_type}</td>
                            </tr>
                            <tr>
                                <th>Soil Type</th>
                                <td>{profile.soil_type}</td>
                            </tr>
                            <tr>
                                <th>Current Crops</th>
                                <td>{profile.crop_grown}</td>
                            </tr>
                            <tr>
                                <th>Repeated Fertilizer Used</th>
                                <td>{profile.fertilizers}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>

            <div className="profile-add">
                {shProfile && (
                    <table>
                        <tbody>
                            <tr>
                                <th>Your Email</th>
                                <td>{shProfile.email}</td>
                            </tr>
                            <tr>
                                <th>Owner Address</th>
                                <td>{shProfile.ownaddress}</td>
                            </tr>
                            <tr>
                                <th>Shop address</th>
                                <td>{shProfile.shaddress}</td>
                            </tr>
                            <tr>
                                <th>Phone no</th>
                                <td>{shProfile.phoneno}</td>
                            </tr>
                            <tr>
                                <th>shop name</th>
                                <td>{shProfile.shname}</td>
                            </tr>
                            <tr>
                                <th>Shop type</th>
                                <td>{shProfile.shtype}</td>
                            </tr>
                            <tr>
                                <th>operating hours</th>
                                <td>{shProfile.ophours}</td>
                            </tr>
                            <tr>
                                <th>payment method</th>
                                <td>{shProfile.payment}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
        <div>
        
        </div>
        </>
    );
}

export default Profile;