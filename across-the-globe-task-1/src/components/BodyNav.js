import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { LocationContext } from '../context/LocationState'
import LoginModal from './LoginModal'

const BodyNav = () => {

	const contextLocation = useContext(LocationContext)
	const { path, setPath, loggedIn, setLoggedIn } = contextLocation

	const navigate = useNavigate()

	const handleGroupBtnClick = () => {
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
			<div className="BodyNav">
				<div className="row pb-0">
					<div className="col-md-8 d-flex mb-0 pb-0 navItems">
						<Link to="/" className="nav-link mb-0 pb-0 active-nav">All Posts(32)</Link>
						<Link to="/" className="nav-link">Article</Link>
						<Link to="/" className="nav-link">Event</Link>
						<Link to="/" className="nav-link">Education</Link>
						<Link to="/" className="nav-link">Job</Link>
					</div>
					<div className="col-md-4 d-flex justify-content-between">
						<button className="btn write-post-btn btn-sm d-flex justify-content-center align-items-center px-2 mx-2">
							Write a Post <i className="fa-solid fa-sort-down ms-3"></i>
						</button>
						<button className="write-post-mobile-view rounded-circle text-light py-2 px-2">
							<i className="fa-solid fa-pen"></i>
						</button>
						<button className={`btn ${loggedIn === true ? 'leave-group-btn' : 'join-group-btn'} btn-sm mx-2`} data-bs-toggle="modal" data-bs-target="#loginModal" >
							{
								loggedIn === false ?
									<span><i className="fa-solid fa-user-plus me-2"></i>Join</span> :
									<span><i className="fa-solid fa-arrow-right-from-bracket me-2"></i>Leave</span>
							} Group
						</button>
					</div>
				</div>
				<hr className='m-0' />
			</div>
			<LoginModal />
		</>
	)
}

export default BodyNav