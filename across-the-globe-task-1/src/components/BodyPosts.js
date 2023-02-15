import React from 'react'
import { Link } from 'react-router-dom'

const BodyPosts = (props) => {

	const { imgSrc, category, title, desc, company, date, location, website, profilePic, name, views } = props

	return (
		<>
			<div className="card posts mb-4">
				{imgSrc && <div className="card-img-top">
					<img src={imgSrc} alt="" className='w-100' />
				</div>}
				<div className="card-body">
					<div className="row mb-4">
						<div className="col-12">
							{category}
						</div>
						<div className="row">
							<div className="col-9">
								<h4>{title}</h4>
							</div>
							<div className="col-3 text-end">
								<div className="dropdown">
									<p className='m-0 ms-auto cursor-pointer p-0 px-2 py-1 rounded post-options' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis"></i></p>
									<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
										<li><Link className="dropdown-item" to="/">Edit</Link></li>
										<li><Link className="dropdown-item" to="/">Report</Link></li>
										<li><Link className="dropdown-item" to="/">Option 3</Link></li>
									</ul>
								</div>
							</div>
						</div>
						{(date || company || location) && <div className="row mb-4">
							{date && <div className="col-lg-3 col-md-6">
								<i className="fa-solid fa-calendar-day"></i><span className='ms-2'>{date}</span>
							</div>}
							{company && <div className="col-lg-3 col-md-6">
								<i className="fa-solid fa-briefcase"></i><span className='ms-2'>{company}</span>
							</div>}
							<div className="col-lg-4 col-md-6">
								<i className="fa-solid fa-location-dot"></i><span className='ms-2'>{location}</span>
							</div>
						</div>}
						{desc && <div className="row mb-4">
							<div className="col-12">
								<p>{desc}</p>
							</div>
						</div>}
						{website && <div className="row mb-4">
							<div className="col-12">
								<button className={`btn border w-100 ${website.color}`}>{website.text}</button>
							</div>
						</div>}
						<div className="row d-flex align-items-center">
							<div className="col-lg-1 col-md-2 border rounded-circle">
								<img src={profilePic} alt="" className='rounded-circle' height='40px' />
							</div>
							<div className="col-lg-3 col-md-4">
								<strong>{name}</strong>
							</div>
							<div className="col-lg-4 col-md-1">

							</div>
							<div className="col-lg-3 col-md-4">
								<i className="fa-solid fa-eye"></i> {views} Views
							</div>
							<div className="col-md-1 text-end">
								<i className="fa-solid fa-share-nodes cursor-pointer d-flex justify-content-center align-items-center"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BodyPosts