import React from 'react'
import googleIco from './images/google.svg'
import facebookIco from './images/facebook.svg'
import createAcImg from './images/create-ac-img.jpg'

const LoginModal = () => {
	return (
		<>
			<div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-lg">
					<div className="modal-content" style={{ borderRadius: '0.7rem' }}>
						<div className="modal-header p-0">
							<h5 className="modal-title p-3 w-100 text-center" id="loginModalLabel" style={{ borderRadius: '0.7rem' }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘</h5>
							{/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
						</div>
						<div className="modal-body">
							<button className='rounded-circle m-0 modal-close-btn d-flex justify-content-center align-items-center' data-bs-dismiss="modal" aria-label="Close">
								<i className="fa-solid fa-xmark" style={{ opacity: '0.4' }}></i>
							</button>
							<div className="row container">
								<div className="col-md-5 col-sm-12">
									<h2 className='m-0 mb-3'>Sign In</h2>
								</div>
								<div className="col-md-3"></div>
								<div className="col-4 warn-modal">
									<p className="m-0" style={{ fontSize: '13px' }}>Don't have an account yet? <span className='text-primary'>Create new for free!</span></p>
								</div>
							</div>
							<div className="row container">
								<div className="col-md-6 col-sm-12 row-height-adjust">
									<form className='login-form'>
										<input type="Email" aria-label="Last name" className="form-control" placeholder='Email' />
										<input type="Password" aria-label="Last name" className="form-control" placeholder='Password' />
									</form>

									<div className="row">
										<div className="col-sm-6">
											<button className="btn create-account-btn rounded-pill my-4">Sign In</button>
										</div>
										
									</div>
									<div className="border border-1 p-2 text-center mb-2">
										<img className='mx-2' src={facebookIco} alt="" height='33px' />
										Sign in with Facebook
									</div>
									<div className="border border-1 p-2 text-center mb-2">
										<img className='mx-2' src={googleIco} alt="" height='25px' />
										Sign in with Google
									</div>
									<div className="text-center">
										<b style={{ fontSize: '12px' }}>Forgot Password?</b>
									</div>
								</div>
								<div className="col-6 row-height-adjust modal-img text-center">
									<img src={createAcImg} className='modalImg' alt="" height='330rem' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default LoginModal