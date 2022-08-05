import { Form } from "@remix-run/react";

export default function SignInPage() {
  return (
    <div id="app">
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="rmx-auto w-full max-w-md items-center px-8">
          <div className="mb-12 text-center text-2xl font-bold">Sign In</div>
          <Form method="post" className="w-full max-w-sm">
            <input type="hidden" name="redirectTo" />
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                autoFocus={true}
                autoComplete="email"
                id="email"
                // aria-invalid={Boolean(actionData?.errors?.email)}
                // aria-describedby="email-error"
                className="mt-2 block h-10 w-full appearance-none rounded-md bg-slate-100 px-3 shadow-sm ring-1 ring-slate-700 ring-opacity-5 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
              />
              {/* {actionData?.errors?.email && (
                <div className="pt-1 text-red-400" id="email-error">
                  {actionData.errors.email}
                </div>
              )} */}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password-input"
                className="block text-sm font-semibold leading-6"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                autoComplete="current-password"
                id="password"
                // aria-invalid={Boolean(actionData?.errors?.password)}
                // aria-describedby="password-error"
                className="mt-2 block h-10 w-full appearance-none rounded-md bg-slate-100 px-3 shadow-sm ring-1 ring-slate-700 ring-opacity-5 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
              />
              {/* {actionData?.errors?.password && (
                <div className="pt-1 text-red-400" id="password-error">
                  {actionData.errors.password}
                </div>
              )} */}
            </div>
            <input type="hidden" name="redirectTo" />
            <button
              type="submit"
              className="text-md mt-2 inline-flex w-full justify-center rounded bg-blue-500 py-2.5 px-4 font-semibold text-white hover:bg-blue-700"
            >
              Login
            </button>
          </Form>
        </div>
      </main>
    </div>
  );
}
