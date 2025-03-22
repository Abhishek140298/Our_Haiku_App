import Link from "next/link";
import {register} from '../actionsServer/userController'

export default function () {
  return (
    <>
      <p className="text-center text-2xl text-grey-600 mb-5">
        Don&rsquo; have an account <strong>Create One</strong>
      </p>
      <form action={register} className="max-w-xs mx-auto">
        <div className="mb-3">
          <input
            name="username"
            autoComplete="off"
            type="text"
            placeholder="Username"
            className="input input-bordered input-md w-full max-w-xs bg-gray-200 text-black"
          />
        </div>
        <div className="mb-3">
          <input
            name="password"
            autoComplete="off"
            type="password"
            placeholder="Password"
            className="input input-bordered input-md w-full max-w-xs bg-gray-200 text-black"
          />
        </div>
        <div className="mb-3">
        <button className="btn btn-primary">Create Account</button>

        </div>
      </form>
    </>
  );
}
