import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

// shout-out to https://icanhazdadjoke.com/

const schema = [
  {
    category: "Business",
    label:
      "Do you currently use any softwares to manage your business? (e.g. a CRM, Calendly, etc.)",
  },
  {
    category: "Client Success",
    label: "How strong do you feel about your current client success path?",
  },
];

async function main() {
  const forms = await db.form.create({
    data: {
      name: "Demo Call Form",
      schema: schema,
    },
  });

  const lead = await db.lead.create({
    data: {
      form: { connect: { id: forms.id } },
    },
  });

  console.log(forms, lead);
}

main()
  .catch((e: Error) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
