import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const tools_of_choice = [
    {
        name: "Flutter",
        description: "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, desktop, and embedded devices from a single codebase.",
        href: "https://flutter.dev/",
    },
    {
        name: "NextJS",
        description: "Next.js is a React framework that enables several capabilities such as server-side rendering and generating static websites.",
        href: "https://nextjs.org/",
    },
    {
        name: "PostgreSQL",
        description: "PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.",
        href: "https://www.postgresql.org/",
    },
    {
        name: "NodeJS",
        description: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
        href: "https://nodejs.org/en/",
    },
    {
        name: "Hardhat",
        description: "Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. It helps developers manage and automate the recurring tasks that are inherent to the process of building smart contracts and dApps, as well as easily introducing more functionality around this workflow.",
        href: "https://hardhat.org/",
    },
    {
        name: "Vercel",
        description: "Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow.It enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.",
        href: "https://vercel.com/",
    }, {
        name: "AWS",
        description: "Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
        href: "https://aws.amazon.com/",
    }
];

export default function About() {
    return (
        <section
            className="col-span-2 row-span-1 md:row-span-2 md:col-span-1 h-full flex flex-col justify-around text-center p-4 md:p-8 border hover:border-primary rounded-xl hover:shadow">
            <div className="flex flex-col items-start justify-between text-start mb-4 md:mb-0">
                <p className="text-sm">About Me</p>
                <p className="font-light mt-2">
                    {"I'm a Software developer, working on web, blockchain and mobile applications. I'm currently working at"}
                    <span
                        className="font-normal"
                    >{` `}SingularityDao Labs{` `}</span>
                    {"as a Blockchain & Backend Developer."}
                </p>
            </div>

            <div className="flex flex-col items-start justify-start">
                <p className="mb-2 mt-4 text-sm">Here are some of my tools of choice</p>
                <div className="flex flex-wrap items-start justify-start w-full gap-2">
                    {tools_of_choice.map((tool) => (
                        <Link
                            key={tool.name}
                            href={tool.href}
                            className=" text-xs font-light p-2 border rounded-xl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {tool.name}

                            <span className="sr-only">{tool.name}</span>
                        </Link>

                    ))}
                </div>

            </div>
        </section>
    );
}