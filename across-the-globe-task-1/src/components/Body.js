import React from 'react'
import BodyNav from './BodyNav'
import BodyPosts from './BodyPosts'
import BodyRightMenu from './BodyRightMenu'
import data from './PostData'

const Body = () => {
	return (
		<>
			<div className="container body-container mt-sm-5">
				<BodyNav />
				<div className="row w-100 mt-sm-3">
					<div className="col-md-8 posts-col px-sm-4">
						{
							data.map((post, index) => {
								return <BodyPosts
									key={index}
									imgSrc={post.imgSrc}
									category={post.category}
									title={post.title}
									desc={post.desc}
									company={post.company}
									date={post.date}
									location={post.location}
									website={post.website}
									profilePic={post.profilePic}
									name={post.name}
									views={post.views}
								/>
							})
						}
					</div>
					<div className="col-md-4">
						<BodyRightMenu />
					</div>
				</div>
			</div>
		</>
	)
}

export default Body