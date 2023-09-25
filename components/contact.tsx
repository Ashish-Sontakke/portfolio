import { TwitterLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon, DiscordLogoIcon } from "@radix-ui/react-icons"


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
        name: "Discord",
        href: "https://discordapp.com/users/697007211834114078",
        icon: DiscordLogoIcon,
    },
    {
        name: "Email",
        href: "mailto:ashishsontakke12@gmail.com",
        icon: EnvelopeClosedIcon,
    },
]

export default function Contact() {

    return (
        <section
            className="md:col-span-1 col-span-2 h-full  flex flex-col items-start justify-between text-center p-4 md:p-8 border rounded-xl hover:shadow">
            <p className="text-sm">{`Let's work together`}</p>
            <div className="flex flex-col items-start justify-start">
                <p className="mt-2">Contact Details</p>
                <p className="font-extralight max-w-md break-all text-start">
                    {`ashishsontakke12@gmail.com`}
                </p>
                <div className="flex space-x-4 my-4">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            className="text-xl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">{social.name}</span>
                            <social.icon width={24} height={24} />
                        </a>
                    ))}
                </div>

            </div>
            <p className="font-extralight max-w-md break-all text-start">
                {`Pune, India`}
            </p>

        </section>
    );
}