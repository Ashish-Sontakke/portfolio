import { TwitterLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"

const socials = [
    {
        name: "Twitter",
        href: "https://twitter.com/zeroAsh_",
        icon: TwitterLogoIcon,
    },
    {
        name: "GitHub",
        href: "https://github.com/Ashish-Sontakke",
        icon: GitHubLogoIcon,
    },
    {
        name: "Email",
        href: "mailto:ashishsontakke12@gmail.com",
        icon: EnvelopeClosedIcon,
    },
]

export default function Introduction() {

    return (
        <section
            className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl">S Ashish</h1>
            <p className="text-xl mt-2">Software Developer, Engineer. Here I share my learnings & projects</p>
            <div className="flex mt-4 space-x-4">
                {socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        className="text-xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="sr-only">{social.name}</span>
                        <social.icon width={24} height={24}/>
                    </a>
                ))}
            </div>
        </section>
    );
}