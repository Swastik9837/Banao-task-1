import React from 'react'
import googleIco from './images/google.svg'
import facebookIco from './images/facebook.svg'
import createAcImg from './images/create-ac-img.jpg'

const CreateUserModal = () => {
	return (
		<>
			<div className="modal fade" id="createUserModal" tabIndex="-1" role="dialog" aria-labelledby="createUserModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-lg">
					<div className="modal-content" style={{ borderRadius: '0.7rem' }}>
						<div className="modal-header p-0">
							<h5 className="modal-title p-3 w-100 text-center" id="createUserModalLabel" style={{ borderRadius: '0.7rem' }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘</h5>
							{/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
						</div>
						<div className="modal-body">
							<button className='rounded-circle m-0 modal-close-btn d-flex justify-content-center align-items-center' data-bs-dismiss="modal" aria-label="Close">
								<i className="fa-solid fa-xmark" style={{ opacity: '0.4' }}></i>
							</button>
							<div className="row container">
								<div className="col-5">
									<h2 className='m-0 mb-3'>Create Account</h2>
								</div>
								<div className="col-3"></div>
								<div className="col-4">
									<p className="m-0" style={{ fontSize: '13px' }}>Already have an account? <span className='text-primary'>Sign In</span></p>
								</div>
							</div>
							<div className="row container">
								<div className="col-6 row-height-adjust">
									<form className='login-form'>
										<div className="input-group d-flex">
											<input type="text" aria-label="First name" className="w-50" style={{outline: 'none'}} placeholder='First Name' />
											<input type="text" aria-label="Last name" className="w-50" style={{outline: 'none'}} placeholder='Last Name' />
										</div>
										<input type="Email" aria-label="Last name" className="w-100" style={{outline: 'none'}} placeholder='Email' />
										<input type="Password" aria-label="Last name" className="w-100" style={{outline: 'none'}} placeholder='Password' />
										<input type="password" aria-label="Last name" className="w-100" style={{outline: 'none'}} placeholder='Confirm Password' />
									</form>

									<button className="btn create-account-btn rounded-pill my-4 w-100">Create Account</button>

									<div className="border border-1 p-2 text-center mb-2">
										<img className='mx-2' src={facebookIco} alt="" height='33px' />
										Sign up with Facebook
									</div>
									<div className="border border-1 p-2 text-center mb-2">
										<img className='mx-2' src={googleIco} alt="" height='25px' />
										Sign up with Google
									</div>
								</div>
								<div className="col-6 row-height-adjust text-center">
									<img src={createAcImg} className='modalImg' alt="" height='330rem' />
									<p className="m-0" style={{ fontSize: '11px' }}>
										By signing up, you agree to our Terms & conditions, Privacy Policy
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CreateUserModal