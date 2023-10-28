import Link from "next/link";
import Image from "next/image";
import staticstudio from "@/public/projects/logo.svg";
import tantheta from "@/public/projects/favicon.png";
import continuity from "@/public/projects/continuity.jpeg";

import { Link2Icon } from "@radix-ui/react-icons";
const quick_links = [
    {
        name: "Static Studio",
        image: staticstudio,
        href: "https://staticstudio.app",
    },
    {
        name: "Tantheta",
        image: tantheta,
        href: "https://tantheta.dev"
    },
    {
        name: "Continuity Cafe",
        image: continuity,
        href: "https://continuity.cafe/home"
    }
];

export default function Projects() {

    return (
        <section
            className="relative md:col-span-1 col-span-2 h-full  flex flex-col items-start justify-between text-center p-4 md:p-8 border hover:border-primary rounded-xl hover:shadow">
            <Link2Icon className="absolute right-4 top-4" />
            <p className="text-sm">{`Projects`}</p>
            <div className="text-start">
                <h3 className="font-light mt-4">{
                    'I like to build things in my free time. Click on this card to learn more about my projects.'
                }</h3>
            </div>
            <div className="flex space-x-4 my-4">
                {quick_links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="p-1 rounded-full bg-gray-50 dark:bg-gray-900"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="sr-only">{link.name}</span>
                        <Image src={link.image} alt={link.name} width={32} height={32} />
                    </Link>
                ))}
            </div>

        </section>
    );
}