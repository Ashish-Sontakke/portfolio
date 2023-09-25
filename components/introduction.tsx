import { TwitterLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"
import mimoji from "@/public/mimoji.png";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";


export default function Introduction() {
    return (
        <section
            className="col-span-2 flex items-start justify-start text-center p-4 md:p-8 border rounded-xl hover:shadow">
            <div className="flex flex-col items-start justify-between text-start">
                <p className="text-sm">Welcome !</p>
                <h1 className="text-4xl mt-4">S Ashish</h1>
                <p className="text-lg mt-2 mb-4 max-w-md">
                    {`Hey there, I'm Ashish Sontakke. I'm a Software Developer, Engineer. Here I share my learnings & projects`}
                </p>
                <ModeToggle />
            </div>
            <Image src={mimoji} alt="mimoji" height={200} width={200} className="mx-4 rounded-full bg-gray-50 dark:bg-gray-900" />
        </section>
    );
}