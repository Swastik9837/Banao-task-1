import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import userPp from './images/user-pp.jpg'
import { LocationContext } from '../context/LocationState'
import CreateUserModal from './CreateUserModal'
import LoginModal from './LoginModal'


const TopBar = () => {

	const contextLocation = useContext(LocationContext)
	const { path, setPath, loggedIn, setLoggedIn } = contextLocation

	const navigate = useNavigate()

	const handleSwitchRoute = () => {
		if (path === '/') {
			setPath('/logged-in')
			setLoggedIn(true)
			navigate('/logged-in')
		} else {
			setPath('/')
			setLoggedIn(false)
			navigate('/')
		}
	}

	return (
		<>
			<div className="top-bar row py-3 p-3 w-100 align-items-center m-0">
				<div className="col-md-3 px-5">
					<h3 className='d-flex align-items-center m-0'>
						<span className='text-success'>ATG.</span>
						W
						<svg width="25" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.3007 22.2V12.8205L11.9123 18.45H11.9452V24C9.93993 23.8981 7.99522 23.278 6.3007 22.2ZM13.6149 18.4845L19.2924 12.7935V22.1655C17.6003 23.2755 15.6368 23.9006 13.6149 23.973V18.4845ZM19.2924 18.2835V12.786H24.7706C24.6415 14.734 24.0334 16.6199 23.0005 18.276L19.2924 18.2835ZM2.59263 18.2835C1.55855 16.6252 0.950455 14.7366 0.822525 12.786H6.3007V18.276L2.59263 18.2835ZM9.30732 12.0165C9.30851 11.3294 9.51319 10.658 9.8955 10.0873C10.2778 9.5165 10.8206 9.07197 11.4553 8.80984C12.0899 8.54771 12.788 8.47973 13.4612 8.61451C14.1345 8.74929 14.7527 9.08078 15.2378 9.56707C15.7229 10.0534 16.053 10.6727 16.1865 11.3467C16.3201 12.0207 16.2509 12.7192 15.9879 13.3539C15.7249 13.9886 15.2798 14.5311 14.7088 14.9127C14.1379 15.2943 13.4667 15.498 12.7801 15.498C12.3236 15.4976 11.8717 15.4072 11.4502 15.2321C11.0286 15.0569 10.6457 14.8003 10.3232 14.477C10.0008 14.1538 9.74506 13.7701 9.57075 13.3479C9.39644 12.9257 9.30693 12.4733 9.30732 12.0165ZM19.1605 11.1465L13.6149 5.5965V0C15.6266 0.127176 17.5711 0.773109 19.2595 1.875V5.64L19.2759 5.6565H22.972C23.9983 7.30233 24.6051 9.17515 24.7391 11.1105L24.7706 11.1465H19.1605ZM0.789551 11.1465L0.830019 11.1C0.980743 9.1712 1.58635 7.30566 2.59712 5.6565H6.28421L6.3007 5.64V1.875C7.98907 0.773109 9.9336 0.127176 11.9452 0V5.5905L6.39962 11.1405L0.789551 11.1465Z" fill="url(#paint0_linear_1_813)" />
							<defs>
								<linearGradient id="paint0_linear_1_813" x1="0.789551" y1="10.464" x2="12.7907" y2="23.9906" gradientUnits="userSpaceOnUse">
									<stop stopColor="#00A854" />
									<stop offset="1" stopColor="#004D25" />
								</linearGradient>
							</defs>
						</svg>
						RLD
					</h3>
				</div>
				<div className="col-md-6">
					<div className="search-box rounded-pill d-flex align-items-center w-50 mx-auto">
						<i className="fas fa-search mx-2"></i>
						<input type="search" className="form-control border-0 rounded-pill" placeholder="Search for your favourite groups in ATG" aria-label="Search" aria-describedby="search-addon" />
					</div>
				</div>
				<div className="account-section col-md-3 d-flex">
					{!loggedIn && 'Create account.'}
					<span className='text-primary dropdown'>
						{
							loggedIn === false ?
								<span className="dropdown-toggle m-0 d-flex align-items-center text-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									&nbsp;<span className='text-primary'>It's free!</span>
								</span> :
								<span className="dropdown-toggle m-0 d-flex align-items-center text-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									<img src={userPp} alt="" height='30rem' className='rounded-circle mx-2' />
									<p className='m-0 mx-2'>Siddharth Goyal</p>
								</span>
						}
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							<li>
								{loggedIn === false ?
									<p className="dropdown-item m-0 cursor-pointer" data-bs-toggle="modal" data-bs-target="#createUserModal">
										Sign Up
									</p> :
									<p className="dropdown-item m-0 cursor-pointer" onClick={handleSwitchRoute}>
										Log Out
									</p>
								}
								{!loggedIn && <p className="dropdown-item m-0 cursor-pointer" data-bs-toggle="modal" data-bs-target="#loginModal">
									Log In
								</p>}
							</li>
						</ul>
					</span>
				</div>
			</div>
			<CreateUserModal />
			<LoginModal />
		</>
	)
}

<div className="row modal-head">
	<div className="col-12">
		<p className="m-0 p-3">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘</p>
	</div>
</div>

export default TopBar