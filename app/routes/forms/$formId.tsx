import { ActionFunction, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import React from "react";
import { db } from "~/utils/db.server";

function getBlockData(data: typeof json) {
  return data.schema.blocks.map((block) => {
    return block.data;
  });
}

export const action: ActionFunction = async (formData) => {
  return null;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const data = await db.form.findFirst({
    where: {
      id: params.id,
    },
    select: {
      id: true,
      schema: true,
    },
  });

  return json(data);
};

export default function FormWidget() {
  const data = useLoaderData<typeof loader>();
  const [index, setIndex] = React.useState(0);
  const block = getBlockData(data);

  const currentBlock = block[index];
  console.log(index);

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
                <div className="flex flex-col">
                  <label className="my-2 block font-medium leading-5 text-gray-700">
                    {currentBlock.label}
                  </label>
                  <input
                    className="mt-4"
                    type="range"
                    max={10}
                    defaultValue={0}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  {index === 0 ? (
                    <>
                      <button
                        type="submit"
                        className="text-md mt-4 inline-flex w-40 justify-center rounded bg-blue-500 py-2 px-4 font-semibold text-white hover:bg-blue-700"
                        onClick={() => setIndex(index + 1)}
                      >
                        Next
                      </button>
                    </>
                  ) : block.length - 1 === index ? (
                    <>
                      <button
                        type="submit"
                        className="text-md mt-4 inline-flex w-40 justify-center rounded bg-blue-500 py-2 px-4 font-semibold text-white hover:bg-blue-700"
                        onClick={() => setIndex(index - 1)}
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        className="text-md mt-4 inline-flex w-40 justify-center rounded bg-blue-500 py-2 px-4 font-semibold text-white hover:bg-blue-700"
                      >
                        Complete
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="text-md mt-4 inline-flex w-40 justify-center rounded bg-blue-500 py-2 px-4 font-semibold text-white hover:bg-blue-700"
                        onClick={() => setIndex(index + 1)}
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        className="text-md mt-4 inline-flex w-40 justify-center rounded bg-blue-500 py-2 px-4 font-semibold text-white hover:bg-blue-700"
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
