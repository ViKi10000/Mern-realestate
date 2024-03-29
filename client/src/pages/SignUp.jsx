import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form className='flex flex-col gap-4'>
        <input type="text"  placeholder='username'
        className='border p-3 rounded-lg ' id='username'/>
        <input type="email"  placeholder='email'
        className='border p-3 rounded-lg ' id='username'/>
        <input type="password"  placeholder='password'
        className='border  p-3 rounded-lg ' id='username'/>

        <button  className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>SignUp</button>
      </form>

      <div className='flex gap-2 mt-5 '>
        <p>Have an account?</p>
        <Link to={"./Sign-in"}>
          <span className="text-red-600">signIn</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp;