import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

// shout-out to https://icanhazdadjoke.com/

const schema = [
  {
    category: "Business",
    question:
      "Do you currently use any softwares to manage your business? (e.g. a CRM, Calendly, etc.)",
  },
  {
    category: "Client Success",
    question: "How strong do you feel about your current client success path?",
  },
];

async function main() {
  const forms = await db.form.create({
    data: {
      name: "Demo Call Form",
      schema: schema,
    },
  });

  console.log(forms);
}

main()
  .catch((e: Error) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
