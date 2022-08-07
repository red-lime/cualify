import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import React from "react";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const form = await db.form.findMany({
    select: {
      id: true,
      schema: true,
    },
  });

  const labels = form.map((item) => {
    // console.log("item", item.schema);
    return item.schema;
  });

  return json(labels);
};

export default function FormWidget() {
  const data = useLoaderData<typeof loader>();
  const [index, setIndex] = React.useState(0);

  const current = data[0];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="rmx-auto w-full max-w-3xl items-center px-8">
        <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg">
          <div className="px-4 py-4 sm:px-6">
            <h1 className="mb-6 text-3xl font-bold leading-6 text-gray-900"></h1>
            <div className="my-2 flex flex-col justify-center py-4 px-4">
              <h2 className="text-xl font-bold text-slate-700">
                Answer these two questions for a demo.
              </h2>
              <Form method="post" className="mt-4 flex flex-col">
                <>
                  <div className="my-2 flex flex-col">
                    {current[index].label}
                    <input
                      name="range"
                      id="range"
                      className="my-4"
                      type="range"
                      min={0}
                      max={10}
                      defaultValue={0}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                  </div>
                </>
                <div className="flex flex-1 justify-between">
                  {current.length - 1 <= index ? (
                    <button
                      type="submit"
                      className="text-md mx-auto mt-2 inline-flex max-w-fit rounded bg-blue-500 py-2.5 px-4 font-semibold text-white hover:bg-blue-700"
                    >
                      Complete!
                    </button>
                  ) : (
                    <>
                      <button
                        type="submit"
                        onClick={() => setIndex(index - 1)}
                        className="text-md mt-2 inline-flex max-w-fit rounded bg-blue-500 py-2.5 px-4 font-semibold text-white hover:bg-blue-700"
                      >
                        Previous
                      </button>
                      <button
                        type="submit"
                        onClick={() => setIndex(index + 1)}
                        className="text-md mt-2 inline-flex max-w-fit rounded bg-blue-500 py-2.5 px-4 font-semibold text-white hover:bg-blue-700"
                      >
                        Next
                      </button>
                    </>
                  )}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
