import { Prisma, PrismaClient } from "@prisma/client";
const db = new PrismaClient();

const formSchema = [
  {
    id: "340848b4-3961-481b-8b39-f2687b1fc842",
    published: "false",
    blocks: [
      {
        id: "SZ2s1sb8J7",
        data: {
          label:
            "Do you currently use any softwares to manage your business? (e.g. a CRM, Calendly, etc.)",
          placeholder: "Enter your asnwer here.",
        },
        type: "text",
      },
      {
        id: "ikQxlZ9sZB",
        data: {
          label:
            "How strong do you feel about your current client success path?",
        },
        type: "range",
      },
    ],
  },
];

async function main() {
  const forms = await db.form.create({
    data: {
      name: "Demo Call Form",
      schema: formSchema,
    },
  });

  const lead = await db.lead.create({
    data: {
      form: { connect: { id: forms.id } },
    },
  });
}

main()
  .catch((e: Error) => {
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
