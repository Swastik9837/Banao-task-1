import React, { useState, useContext } from 'react'
import groups from './RecommendedGroupsData'
import { Link } from 'react-router-dom'
import { LocationContext } from '../context/LocationState'

const BodyRightMenu = () => {

	const contextLocation = useContext(LocationContext)
	const { loggedIn } = contextLocation

	const [readOnly, setReadOnly] = useState(true)
	const [newGrpArray, setNewGrpArray] = useState(groups)

	const handleFollowClick = (index) => {
		let tempArray = [...newGrpArray]
		let tempObj = { ...tempArray[index] }
		if (tempObj.followed) {
			tempObj.followed = false
		} else {
			tempObj.followed = true
		}
		tempArray[index] = tempObj
		setNewGrpArray(tempArray)
	}

	const handleClearClick = () => {
		document.body.querySelector('.location-input').value = null
		document.body.querySelector('.location-input').focus()
	}

	const toggleReadOnly = () => {
		if (readOnly) {
			setReadOnly(false)
			document.body.querySelector('.location-input').focus()
		} else {
			setReadOnly(true)
		}
	}
	document.querySelector('html').addEventListener('click', (event) => {
		if (event.target.className === 'fa-solid fa-pen cursor-pointer' || event.target.className === 'fa-solid fa-xmark cursor-pointer') {
			return
		}
		if (event.target.className !== 'fa-solid fa-pen cursor-pointer' || event.target.className !== 'fa-solid fa-xmark cursor-pointer') {
			setReadOnly(true)
		}
	})

	return (
		<>
			<div className="body-right-menu container">

				<div className="location d-flex align-items-center mx-auto">
					<div className='mx-auto location-section'>
						<div className="row">
							<div className="col-md-2">
								<i className="fa-solid fa-location-dot mx-1"></i>
							</div>
							<div className="col-md-8 ps-0">
								<input
									type="text"
									className="border-0 location-input mx-1"
									placeholder="Enter your location"
									readOnly={readOnly}
								/>
							</div>
							<div className="col-md-2">
								{readOnly && <i className="fa-solid fa-pen cursor-pointer" onClick={toggleReadOnly}></i>}
								{!readOnly && <i className="fa-solid fa-xmark cursor-pointer" onClick={handleClearClick}></i>}
							</div>
						</div>
						<div className="location-notice mt-4 row">
							<i className="col-1 fa-solid fa-circle-exclamation mt-1"></i>
							<p className='col-11'>Your location will help us serve better and extend a personalised experience.</p>
						</div>
					</div>
				</div>

				{loggedIn && <div>
					<div className="recommended-groups mt-5">
						<h6 className='mb-4'><i className="fa-solid fa-thumbs-up"></i> RECOMMENDED GROUPS</h6>
						{
							newGrpArray.map((group, index) => {
								return <div key={index} className="row mb-4">
									<div className="col-3 d-flex align-items-center">
										<img src={group.imgSrc} alt="" className="rounded-circle" />
									</div>
									<div className="col-6 d-flex align-items-center">
										{group.name}
									</div>
									<div className="col-3 d-flex align-items-center">
										{!newGrpArray[index].followed && <button className='rounded-pill follow-btn px-2' onClick={() => { handleFollowClick(index) }}>Follow</button>}
										{newGrpArray[index].followed && <button className='rounded-pill bg-dark text-light follow-btn px-2' onClick={() => { handleFollowClick(index) }}>Followed</button>}
									</div>
								</div>
							})
						}
					</div>

					<div className="text-end">
						<Link to="">see more...</Link>
					</div>
				</div>
				}
			</div>
		</>
	)
}

export default BodyRightMenu