export default function SkillGroup({title, skills,}: {title: string; skills: { name: string; icon: string }[];}) {
    return (
        <div>
            <h3 className="mb-2 text-2xl font-bold text-neutral-400">
                {title}
            </h3>

            <div className="space-y-1">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2">
                    <img
                        src={skill.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                    />
                    <span className="text-xl">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}